import { OrganizationSwitcher, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function Header() {
  return (
    <header className="flex h-10px items-center gap-4 border-b border-solid border-black border-opacity-20 px-4 sm:px-8">
      <p className="my-1 text-2xl font-bold text-gray-800 hover:text-gray-600">
        T3 + Clerk
      </p>
      <div className="grow" />
      <SignedIn>
        <div className="hidden sm:block">
          <OrganizationSwitcher afterCreateOrganizationUrl="/dashboard" />
        </div>
        <div className="block sm:hidden">
          <OrganizationSwitcher
            afterCreateOrganizationUrl="/dashboard"
            appearance={{
              elements: {
                organizationSwitcherTriggerIcon: `hidden`,
                organizationPreviewTextContainer: `hidden`,
                organizationSwitcherTrigger: `pr-0`,
              },
            }}
          />
        </div>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      <SignedOut>
        <a href="/sign-in" className="text-black hover:text-gray-600">
          Sign in
        </a>
      </SignedOut>
    </header>
  );
}
