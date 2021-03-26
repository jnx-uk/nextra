export default {
  repository: 'https://github.com/jnx-uk/nhs-hybrid-ui',
  titleSuffix: ' – Docs - NHS UI Components',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">NHS UI Components</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        A hybrid front-end framework
      </span>
    </>
  ),
  head: (
    <>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
      <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
      <link rel="stylesheet" href="https://nhs.pages.dev/css/nhs-components.css" type="text/css" />
    <link rel="stylesheet" href="https://nhs.pages.dev/css/nhs-colours.css" type="text/css" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: false,
  footerEditOnGitHubLink: false,
  footerText: <> Built for © Aneurin Bevan University Health Board, Designed by <a href="https://jnx.app">Jake Jenkins</a>.</>
}
