/**
 * Extension assertion namespace.
 *
 * Built-in assertions remain in src/assertions/*.
 * Custom/organization-specific assertions should be registered from this namespace.
 */

export interface ExtensionAssertion {
  id: string;
  description: string;
}

const extensionAssertions: ExtensionAssertion[] = [];

export function registerExtensionAssertion(assertion: ExtensionAssertion): void {
  extensionAssertions.push(assertion);
}

export function listExtensionAssertions(): ExtensionAssertion[] {
  return [...extensionAssertions];
}
