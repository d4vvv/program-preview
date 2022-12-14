# App setup

The app can be run by running commands “**pnpm install**” and “**pnpm run dev**”.

# Environment setup

You have to create a file .env in the root directory and provide the required values. You can find the list of values in the file .env.example.

```
NEXT_PUBLIC_API_ADDRESS = https://api.example
```

# App description

Presented app is a simple program list preview.
As the backbone of the project I decided to use **React** with **Next.js** and **Typescript**. For the data fetching I went with **SWR** as it caches response data, prevents unnecessary api calls and provides simple fetch error indicator. The styling has been done with the help of **Chakra-UI**. The UI is responsive and works for both mobile and computer screens.

I have also prepared basic **unit tests** and **end to end test** for the components with **Jest**, **React Testing Library** and **Cypress**.

# Further improvements

In the future the app could be expanded with **more filtration options** apart from “Movie” and “Series”. **Pagination** could also be added so that it is possible to see more results in a comfortable way. Addition of **more sorting options** would also be a useful feature.

As in terms of code - more **unit tests** and **end to end tests** could be added to ensure proper app functionality now and when the app would be further expanded.
