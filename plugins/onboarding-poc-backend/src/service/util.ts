const yaml = require('js-yaml');

export const base64YamlToJSON = (raw: string, encoding:'base64') => {
    const rawYaml = Buffer.from(raw, encoding).toString();
    const rawJson= yaml.loadAll(rawYaml)
    return rawJson;
}