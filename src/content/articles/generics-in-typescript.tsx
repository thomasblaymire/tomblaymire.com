import { ArticleMeta } from '@/types/article';

export const meta: ArticleMeta = {
  title: 'Generics In TypeScript',
  slug: 'generics-in-typescript',
  description:
    "In this post I'm going to outline what Generics are in TypeScript, along with how they can be useful to avoid duplication of types along with limiting the usage of the 'any' keyword.",
  publishDate: '2017-05-16',
  tags: ['typescript', 'javascript'],
};

export default function GenericsInTypescript() {
  return (
    <article>
      <p>
        In this post I&apos;m going to outline what Generics are in TypeScript, along with
        how they can be useful to avoid duplication of types along with using the
        &apos;any&apos; keyword. Be sure to re-write or copy and paste the examples in
        your code editor or on the{' '}
        <a href="https://www.typescriptlang.org/play">TypeScript Playground</a> to see
        full intellisense along with autocomplete suggestions.
      </p>

      <h2>In A Nutshell</h2>
      <p>
        Generics are an easy way to create &apos;type variables&apos; without having to
        explicitly define types. You can create functions, classes or type aliases and
        leave the TypeScript compiler to automatically infer the types for you.
      </p>

      <h2>Generic Array</h2>
      <p>
        The most basic generic in TypeScript is the array. In the example below I have
        created a type for a stringArray. Then in the brackets I have defined that this is
        of type string.
      </p>
      <pre>
        <code>{`type stringArr = Array<string>`}</code>
      </pre>
      <p>
        We can use any type inside of the <code>&lt;&gt;</code> brackets and this will
        influence what the end type is.
      </p>

      <h2>Generics Function</h2>
      <p>
        We could also create a function which returns the last element in the array like
        so:
      </p>
      <pre>
        <code>{`const last = (arr: Array<number>) => {
  return arr[arr.length - 1];
}`}</code>
      </pre>
      <p>
        Note how we define that the array will be of type number this can then be called
        with the following:
      </p>
      <pre>
        <code>{`const numberArray = last([1, 2, 3]);`}</code>
      </pre>
      <p>
        But what happens if you want to do the same with a string array here? The compiler
        will warn on this as its not an array of numbers. However functions should be able
        to work with any type of array.
      </p>
      <pre>
        <code>{`const stringArray = last(['1', '2', '3']);`}</code>
      </pre>
      <p>
        To solve this problem many developers reach for the &apos;any&apos; keyword. This
        will fix the problem however we lose the valuable intellisense when hovering over.
      </p>
      <pre>
        <code>{`const last = (arr: Array<any>) => {
  return arr[arr.length - 1];
}`}</code>
      </pre>
      <p>An alternative solution is to use generics:</p>
      <pre>
        <code>{`const last = <T>(arr: T[]) => {
  return arr[arr.length - 1];
}`}</code>
      </pre>
      <p>
        <strong>
          T is just a variable name but it can be called anything you like. T is the
          generic type that can be passed into the function.
        </strong>
      </p>
      <p>
        Now we have updated to the above this function will take an array of T and return
        T. So you can now hover over both of the function calls with our{' '}
        <code>numberArray</code> and <code>stringArray</code> below and notice that the
        compiler has inferred that the first call is of type <strong>number</strong> and
        the second is of type <strong>string</strong>.
      </p>
      <pre>
        <code>{`const numberArray = last([1, 2, 3]);
const stringArray = last(['1', '2', '3']);`}</code>
      </pre>

      <h2>Multiple Generic Types</h2>
      <p>
        We can also define multiple different types inside of a generic. Given the example
        below I have created a function called <code>createArray</code> this takes in a
        value and simply returns an array of that given value, currently a number.
      </p>
      <pre>
        <code>{`const createArray = (num: number) => {
  return [num]
}

const arrayOne = createArray(5);`}</code>
      </pre>
      <p>
        But what if we wanted to pass in a string value and return an array of strings,
        currently there is no way to easily define this however with generics we could do
        the following:
      </p>
      <pre>
        <code>{`const createArray = <T>(num: T) => {
  return [num]
}

const arrayOne = createArray(5);
const arrayTwo = createArray('5');`}</code>
      </pre>
      <p>
        This now works as the compiler will automatically infer the type as the type that
        is passed in.
      </p>
      <p>
        Taking this a step further we can also pass in multiple different generic types.
        For example I could create the following:
      </p>
      <pre>
        <code>{`const createArray = <X, Y>(x: X, y: Y): [X, Y] => {
  return [x, y]
}

const arrayOne = createArray(5, 6);
const arrayTwo = createArray("a", "b");`}</code>
      </pre>
      <p>
        This automatically infers the types and allows us to even go a step further and do
        the below all without having to define specific types:
      </p>
      <pre>
        <code>{`const arrayMixed = createArray("a", 5);`}</code>
      </pre>

      <h2>Generic Constraints</h2>
      <p>
        We can also use generics to apply constraints when working with objects. In the
        example below I have created a function called <code>makeFullName</code>. This
        simply takes in an object with some user data which can be anything and then adds
        a property for <code>fullName</code> combining the firstName and lastName values
        together.
      </p>
      <p>
        We can use generics here alongside the extends keyword to limit that the firstName
        and lastName values must both be of type string in order for the concatenation to
        work.
      </p>
      <pre>
        <code>{`const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
  };
};

const bob = makeFullName({ firstName: "Bob", lastName: "Junior", age: 15 });`}</code>
      </pre>

      <h2>Generic Interfaces</h2>
      <p>
        Often when working with TypeScript you create multiple different interfaces in
        order to describe groups of data that is passed into functions. Let&apos;s say we
        have an interface called <code>Block</code> that has a <code>data</code> value
        which could be anything one way to define this is like the below:
      </p>
      <pre>
        <code>{`interface Block {
  id: string;
  position: number;
  color: string;
  data: any
}`}</code>
      </pre>
      <p>However we could also use a generic for this example:</p>
      <pre>
        <code>{`interface Block<T> {
  id: string;
  position: number;
  color: string
  data: T
}`}</code>
      </pre>
      <p>And then call with:</p>
      <pre>
        <code>{`type NumberElementBlock = Block<number>`}</code>
      </pre>
      <p>
        Which is the same as writing out the below but has saved us having to write out
        the entire block along with allowing us the ability to easily extend with a second
        type such as our StringElementBlock:
      </p>
      <pre>
        <code>{`type NumberElementBlock = {
  id: string;
  position: number;
  color: string;
  data: number
}

type StringElementBlock = Block<string>;`}</code>
      </pre>

      <h2>Conclusion</h2>
      <p>
        As you can see from this short post that generics are a very useful concept to
        grasp in TypeScript and allow you to get a lot done without having to use the
        &apos;any&apos; keyword along with duplicating entire interfaces when you just
        want to be able to extend functionality.
      </p>
      <p>
        As always be sure to read through the{' '}
        <a href="https://www.typescriptlang.org/docs/handbook/2/generics.html">
          Generics TypeScript Documentation
        </a>{' '}
        online for further examples.
      </p>
    </article>
  );
}
