import { Plugins } from './plugins/index';

import type { PluginFactory } from './plugins/index';

const customPluginRegistry = new Map<string, PluginFactory>();

export function registerCustomRedteamPlugin(factory: PluginFactory): void {
  customPluginRegistry.set(factory.key, factory);
}

export function registerCustomRedteamPlugins(factories: PluginFactory[]): void {
  for (const factory of factories) {
    registerCustomRedteamPlugin(factory);
  }
}

export function clearCustomRedteamPlugins(): void {
  customPluginRegistry.clear();
}

export function findRegisteredPlugin(key: string): PluginFactory | undefined {
  const builtIn = Plugins.find((plugin) => plugin.key === key);
  const custom = customPluginRegistry.get(key);
  return custom ?? builtIn;
}

export function isRegisteredPlugin(key: string): boolean {
  return findRegisteredPlugin(key) !== undefined;
}

export function getRegisteredPlugins(): PluginFactory[] {
  const merged = [...Plugins];

  for (const customPlugin of customPluginRegistry.values()) {
    const builtInIndex = merged.findIndex((plugin) => plugin.key === customPlugin.key);
    if (builtInIndex >= 0) {
      merged[builtInIndex] = customPlugin;
    } else {
      merged.push(customPlugin);
    }
  }

  return merged;
}
