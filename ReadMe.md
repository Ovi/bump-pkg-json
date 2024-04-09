# bump-pkg-json

bump-pkg-json is a command-line tool that increments the version of `package.json` based on the bump type specified or sets a specific version if provided.

## Installation

To install `bump-pkg-json`, run the following command:

```bash
npm install -g bump-pkg-json
```

## Usage

Navigate to the directory where your `package.json` file is located, then run the following command:

```bash
bump-pkg-json <bump-type or version>
```

Replace `<bump-type or version>` with one of the following:
- `MAJOR` for a major version bump.
- `MINOR` for a minor version bump.
- `PATCH` for a patch version bump.
- A specific version in the format x.x.x to set a specific version.

If no bump type or version is provided, the default is "PATCH".

## Example

To increment the patch version:

```bash
bump-pkg-json PATCH
```

To set a specific version:

```bash
bump-pkg-json 1.2.3
```

This will update the `package.json` file in the current directory with the new version.

