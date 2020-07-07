import { PackageLinks } from './package-links';
import { Person } from './person';

/**
 * PackageSuggestion contains abbreviated package metadata returned
 * by the registry's suggestions API.
 */
export interface PackageSuggestion {
    /** Package name */
    readonly name: string;

    /** Package scope; either `unscoped` or the package's scope */
    readonly scope: string;

    /** Latest package version number */
    readonly version: string;

    /** Package's description */
    readonly description?: string;

    /** Keywords describing the package */
    readonly keywords?: string[];

    /** Publishing timestamp for the latest version */
    readonly date: string;

    /** Useful links */
    readonly links: PackageLinks;

    /** Package publisher */
    readonly publisher: Person;

    /** Package author */
    readonly author?: Person;

    /** Package maintainers */
    readonly maintainers?: Person[];
}
