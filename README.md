# Passage Next.js Example App

This example application uses the [Passage Auth Element](https://www.npmjs.com/package/@passageidentity/passage-node) in a Next.js application to authenticate users using biometrics or magic links.
[Passage Node.js SDK](https://www.npmjs.com/package/@passageidentity/passage-node) is used to verify users on authenticated endpoints. To run this example application, follow the instructions below.

## Configure Your Environment Variables

1. Copy the EXAMPLE.env file to your own .env file.
2. Replace the example variables with your own Passage App ID and API Key. You can get these from the [Passage Console](https://console.passage.id).

# Using Passage with Next.js

## Importing and Using the Passage-Auth Custom Element
The easiest way to add authentication to a web frontend is with a Passage Auth custom element. First you'll need to install the [passage-auth](https://www.npmjs.com/package/@passageidentity/passage-auth) package from npm:
```
npm i --save @passageidentity/passage-auth
```
Importing `@passageidentity/passage-auth` triggers a side-effect that will register the three custom elements with the client browser for usage. Since Next.js pre-renders pages on the server this presents a common issue with using web components, such as the passage elements, in pre-rendered pages - when the server side pre-render occurs there is no client window defined to call `window.customElements.define()` on, which results in an error being thrown.

The most common solution when using custom elements in pre-rendered applications is to defer the registration of the custom element to a lifecycle hook so that the code is only executed when the client app is executed in browser. This is done in this example in [pages/index.js](https://github.com/passageidentity/example-nextjs/blob/main/pages/index.js):
```javascript
export default function Home() {

    useEffect(()=>{
        require('@passageidentity/passage-auth');
    }, []);

    return (
        <div>
            ...
        </div>
    )
}
```

## Getting Authentication Status and User Information
After the user has logged in with Passage, all requests need to be authenticated using the JWT provided by Passage. The [Passage Node.js SDK](https://www.npmjs.com/package/@passageidentity/passage-node) to authenticate requests and retrieve user data for your application. 

In this example, we handle authentication securely in Next.js's server-side rendering function [`getServerSideProps()`](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering). Per Next.js documention you can import modules in top-level scope for use in `getServerSideProps`. Imports used in `getServerSideProps` will not be bundled for the client-side. This means you can write server-side code directly in `getServerSideProps`.

The JWT provided by Passage is stored in both cookies and localstorage. Next.js provides the cookies set for an application to `getServerSideProps` which allows passing the JWT from the client browser to the server to handle authentication.

This is done in this example in [pages/dashboard.js](https://github.com/passageidentity/example-nextjs/blob/main/pages/dashboard.js).