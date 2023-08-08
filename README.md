# Stress Detection using Mental Arithmetic Tasks

## About Nextjs

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## About the experiment (interface)

* There are 4 main sessions in total
* These 4 sessions are,
  1) easy - addition (easy.js)
  2) medium - subtract (medium.js)
  3) hard - multiplication (hard.js)
  4) music (audio.js)
* The details of each task is shown in the table below,
  
|Levels  | Tasks          | Total no.s in series | Each no. range | no. to add/sub/mul | each no. shown for | Time given to input series |
|:------:|:--------------:|:--------------------:|:--------------:|:------------------:|:------------------:|:--------------------------:|
|Easy    |   Addition     |   3                  | 1 to 10        |     <5             |   3.5 sec          |     16.5 sec               |
|Medium  | Subtraction    |   4                  | 1 to 20        |     <8             |   3 sec            |     15 sec                 |
|Hard    | Multiplication |   5                  | 1 to 13        |     2-5            |   3 sec            |     15 sec                 |

* Music - the participants just sat in front of the monitor with a pleasant image on the screen and listened to soothing music for 90 sec
* Stress sessions - The stress session included 3 levels of arithmetic tasks. All levels were 5 min each. A series of numbers were shown on the screen. Participants were asked to memorize the series and mentally “Add/Subtract/Multiply” a given number to each number in the series. For example, if the series shown is (5, 3, 1) and if asked to add 1, then the correct answer will be (6, 4, 2). In the following fields, they were required to input the revised series. If the input answer series is correct, an alert message, “Correct” is popped on the screen and if not, an alert message “Incorrect” is popped. If they fail to input an answer, a “timeout” message appears on the screen.
* Auxiliary session - additional task, in which a few circles appeared on the screen one after another. The participants were asked to catch these circles by clicking anywhere inside the circle (clicks.js)
* Post- and pre-questionnaire forms are used to collect details feedback from participants (pre_form.js and post_form.js)
