import {
    PluginDatabaseManager,
    resolvePackagePath,
} from '@backstage/backend-common';

const migrationsDir = resolvePackagePath(
    '@internal/plugin-toolkit-backend',
    'migrations',
);

type Options = {
    database: PluginDatabaseManager;
};
export const databaseConnection = async (options: Options) => {

    const { database } = options;
    const client = await database.getClient();
    if (!database.migrations?.skip) {

        await client.migrate.latest({
            directory: migrationsDir,
        });
    }
    return client
}
