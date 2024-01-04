import { cn } from "../../lib/utils";

export function H1({ className, ...props }) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
    >
      {props.children}
    </h1>
  );
}

export function H2({ className, ...props }) {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
    >
      {props.children}
    </h2>
  );
}

export function H3({ className, ...props }) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
    >
      {props.children}
    </h3>
  );
}

export function H4({ className, ...props }) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
    >
      {props.children}
    </h4>
  );
}

export function Para({ className, ...props }) {
  return (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
      {props.children}
    </p>
  );
}

export function Blockquote({ className, ...props }) {
  return (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
      {props.children}
    </blockquote>
  );
}
