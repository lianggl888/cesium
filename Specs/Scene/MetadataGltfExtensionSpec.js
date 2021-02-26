import { MetadataGltfExtension } from "../../Source/Cesium.js";

describe("Scene/MetadataGltfExtension", function () {
  it("creates glTF metadata with default values", function () {
    var metadata = new MetadataGltfExtension({
      extension: {},
    });

    expect(metadata.schema).toBeUndefined();
    expect(metadata.featureTables).toEqual({});
    expect(metadata.statistics).toBeUndefined();
    expect(metadata.extras).toBeUndefined();
    expect(metadata.extensions).toBeUndefined();
  });
});
