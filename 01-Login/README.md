# Passage Next.js Example App

This example application uses the [Passage Auth Element](https://www.npmjs.com/package/@passageidentity/passage-elements) in a Next.js application to authenticate users using biometrics or magic links.

[Passage Node.js SDK](https://www.npmjs.com/package/@passageidentity/passage-node) is used to verify users on authenticated endpoints. To run this example application, follow the instructions below.

## Configure Your Environment Variables

1. Copy the text in the `EXAMPLE.env` file to your own `.env` file.
2. Replace the example variables with your own Passage App ID and API Key. You can get these from the [Passage Console](https://console.passage.id). You'll have to register and login, and then create a new application.  (Note that you'll use Passage to do so.)
3. The App ID is found on the main Dashboard page, and the API Key can be created and retrieved from the `Setting/API Keys` page.  **Note that both are required.**


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Then, ensure that all the dependencies are properly installed by running:

```bash
npm install
```

Once that is complete, open a browser and navigate to [http://localhost:3000](http://localhost:3000)  to see the result.

![Passage Login Screen](public/passageloginscreen.png)

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

# Using Passage with Next.js

## Importing and Using the Passage-Auth Custom Element

The easiest way to add authentication to a web frontend is with a Passage Auth custom element. First you'll need to install the [passage-elements](https://www.npmjs.com/package/@passageidentity/passage-elements) package from npm:

```bash
npm i --save @passageidentity/passage-elements
```
Importing `@passageidentity/passage-elements/passage-auth` triggers a side-effect that will register the passage-auth custom element with the client browser for usage. Since Next.js pre-renders pages on the server this presents a common issue with using web components, such as the Passage elements, in pre-rendered pages - when the server side pre-render occurs there is no client window defined to call `window.customElements.define()` on, which results in an error being thrown.

The most common solution when using custom elements in pre-rendered applications is to defer the registration of the custom element to a lifecycle hook so that the code is only executed when the client app is executed in browser. This is done in this example in [pages/index.js](https://github.com/passageidentity/example-nextjs/blob/main/pages/index.js):

```javascript
export default function Home() {

    useEffect(()=>{
        require('@passageidentity/passage-elements/passage-auth');
    }, []);

    return (
        <div>
            ...
        </div>
    )
}
```

## Getting Authentication Status and User Information with Server-Side Rendering

After the user has logged in with Passage, all requests need to be authenticated using the JWT provided by Passage. Use the [Passage Node.js SDK](https://www.npmjs.com/package/@passageidentity/passage-node) to authenticate requests and retrieve user data for your application. 

In this example, we handle authentication securely in Next.js's server-side rendering function [`getServerSideProps()`](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering). Per Next.js documention you can import modules in top-level scope for use in `getServerSideProps`. Imports used in `getServerSideProps` will not be bundled for the client-side. This means you can write server-side code directly in `getServerSideProps`.

The JWT provided by Passage is stored in both cookies and localstorage. Next.js provides the cookies set for an application to `getServerSideProps` which allows passing the JWT from the client browser to the server to handle authentication.

This is done in this example in pages/dashboard.js.
