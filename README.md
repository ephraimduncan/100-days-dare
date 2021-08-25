<p align="center">
  <a href="https://100daysdare.vercel.app/">
    <img alt="100 Days Dare" src="public/cover1.svg" width="500" />
  </a>
</p>

<p align="center">
    <a href="https://100daysdare.vercel.app/" target="blank">View Demo</a>
    ·
    <a href="https://github.com/dephraiim/100-days-dare/issues/new">Report Bug</a>
    ·
    <a href="https://github.com/dephraiim/100-days-dare/issues/new">Request Feature</a>
</p>

### 100 Days Dare

Dare yourself to learn or build anything in 100 Days. Stay consistent and keep document your journey with us. Tweet to us [@100DaysDare](https://twitter.com/100DaysDare/) with [#100DaysDare](https://twitter.com/hashtag/100DaysDare)

[Blog Post Here 📖]()

## 🚀 Demo

<a href="https://100daysdare.vercel.app/" target="blank">
<img src="public" />
</a>

## 🧐 Features

Here are some of our best features.

> Power up your new lifestyle and habit with the 100 Days of Challenge.

- 👾 **Add progress on each day**
- 🍭 **Set a Daily and Final Goal**
- 🌱 **Reset your progress and start again** (If you want to)
- 🥁 **Share your progress on Twitter**
- 🔖 **Save your progress as PDF**
- 👤 **Sign Up with Email, Google, Github or Twitter**

## 🛠️ Installation Steps

1. [Sign up for a free account at FaunaDB](https://dashboard.fauna.com/accounts/register).

2. Create a collection in Fauna called `users` and a token (more info on tokens)[https://docs.fauna.com/fauna/current/security/tokens.html].

3. [Sign up for a free account at Auth0](https://auth0.com/signup?place=header&type=button&text=sign%20up).

4. Create an application in Auth0 and make note of your domain, client Id, and client secret. Chekout the dos for [more details on setup + configuration](https://github.com/auth0/nextjs-auth0).

5. Clone the repository

```bash
git clone https://github.com/dephraiim/100-days-dare.git
```

6. Change the working directory

```bash
cd 100-days-dare
```

7. Install dependencies

```bash
npm install
# or
yarn
```

8. Copy the `.env.local.example` file to `.env.local` and include your credentials.

- **FAUNA_SECRET**: Your fauna token
- **AUTH0_SECRET**: A long secret value used to encrypt the session cookie. You can generate a suitable string using openssl rand -hex 32 on the command line
- **AUTH0_BASE_URL**: The base URL of your application.
- **AUTH0_ISSUER_BASE_URL**: The URL of your Auth0 tenant domain. If you are using a Custom Domain with Auth0, set this to the value of your Custom Domain instead of the value reflected in the "Settings" tab.
- **AUTH0_CLIENT_ID**: Your Auth0 application's Client ID.
- **AUTH0_CLIENT_SECRET**: Your Auth0 application's Client Secret.

9. Run the development server:

```bash
npm run dev
# or
yarn dev
```

You are all set! Open [localhost:3000](http://localhost:3000/) to see the app.

## 🍰 Contributing

- Please contribute using [GitHub Flow](https://guides.github.com/introduction/flow). Create a branch, add commits, and [open a pull request](https://github.com/dephraiim/100-days-dare/compare).

- Please read [`CONTRIBUTING`](CONTRIBUTING.md) for details on our [`CODE OF CONDUCT`](CODE_OF_CONDUCT.md), and the process for submitting pull requests to us.

## 💻 Built with

- [Next.js](https://nextjs.org/): App
- [Auth0](https://auth0.com/): User Authentication
- [FaunaDB](https://fauna.com/): Database
- [Chakra UI](https://chakra-ui.com/): UI Design
- [react-hook-form](https://react-hook-form.com/): Form State Management
- [swr](https://swr.vercel.app/): Data Fetching
- [Vercel](http://vercel.com/): Hosting

## 🛡️ License

This project is licensed under the MIT License - see the [`LICENSE`](LICENSE) file for details.

## 🦄 Deploy

<a href="https://vercel.com/new/project?template=https://github.com/dephraiim/100-days-dare.git">
<img src="https://vercel.com/button" height="35px" />
</a>
<a href="https://app.netlify.com/start/deploy?repository=https://github.com/dephraiim/100-days-dare.git">
<img src="https://www.netlify.com/img/deploy/button.svg" height="35px" />
</a>
<a href="https://cloud.digitalocean.com/apps/new?repo=https://github.com/dephraiim/100-days-dare.git">
<img src="https://camo.githubusercontent.com/df21703b4229f8d44f76c2d56073657a4ab450ca4566ba5d24d05bf528c298f8/68747470733a2f2f7777772e6465706c6f79746f646f2e636f6d2f646f2d62746e2d626c75652e737667" height="35px" />
</a>

## 👨‍💻 Author

### 👤 Ephraim Atta-Duncan

- Twitter: [@dephraiim](https://twitter.com/dephraiim)
- Github: [@dephraiim](https://github.com/dephraiim)
- Hashnode: [@dephraiim](https://hashnode.com/@dephraiim)

## 🙏 Support

If you found the app helpful, consider supporting me with a coffee.

<a href="https://www.buymeacoffee.com/dephraiim">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="35px">
</a>
