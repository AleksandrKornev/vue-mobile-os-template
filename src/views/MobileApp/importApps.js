export default function importApps(apps) {
  const importedApps = [];

  for (let i = 0; i < apps.length; i++) {
    const app = require(`@/apps/${ apps[i].name }/index.vue`).default;
    importedApps.push(app);
  }

  return importedApps;
}