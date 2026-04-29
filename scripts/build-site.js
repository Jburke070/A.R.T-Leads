const fs = require("fs");
const path = require("path");
const { locations } = require("../src/site-data");
const { renderHome, renderLocation, renderThankYou } = require("../src/templates");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const publicDir = path.join(root, "public");

function assertInsideRoot(target) {
  const relative = path.relative(root, target);
  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error(`Refusing to write outside project root: ${target}`);
  }
}

function writeFile(filePath, content) {
  assertInsideRoot(filePath);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, "utf8");
}

function copyDir(source, destination) {
  assertInsideRoot(destination);
  fs.mkdirSync(destination, { recursive: true });
  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    const sourcePath = path.join(source, entry.name);
    const destinationPath = path.join(destination, entry.name);
    if (entry.isDirectory()) {
      copyDir(sourcePath, destinationPath);
    } else {
      fs.copyFileSync(sourcePath, destinationPath);
    }
  }
}

function emptyDist() {
  assertInsideRoot(dist);
  if (path.basename(dist) !== "dist") {
    throw new Error(`Unexpected dist path: ${dist}`);
  }
  fs.rmSync(dist, { recursive: true, force: true });
  fs.mkdirSync(dist, { recursive: true });
}

emptyDist();
copyDir(publicDir, dist);
writeFile(path.join(dist, "styles.css"), fs.readFileSync(path.join(root, "src", "styles.css"), "utf8"));
writeFile(path.join(dist, "site.js"), fs.readFileSync(path.join(root, "src", "site.js"), "utf8"));
writeFile(path.join(dist, "index.html"), renderHome());
writeFile(path.join(dist, "thank-you", "index.html"), renderThankYou());

for (const location of locations) {
  writeFile(path.join(dist, "locations", location.slug, "index.html"), renderLocation(location));
}

writeFile(
  path.join(dist, "robots.txt"),
  ["User-agent: *", "Allow: /", ""].join("\n")
);

writeFile(
  path.join(dist, "locations.json"),
  JSON.stringify(
    locations.map((location) => ({
      city: location.city,
      state: location.state,
      path: `/locations/${location.slug}/`
    })),
    null,
    2
  )
);

console.log(`Built ${locations.length + 2} pages in ${dist}`);
