# react-classnames
Manage classNames conditionally in React and JSX easily

## Why react-classnames
Do you remember when you wanted a button in JSX to have diffrent states conditionally? You might endup with something like this:
```
<button className={'button' + (isDisabled ? ' button--disabled' : '') + (hasRadius ? '' : 'button--no-radius'} />
```
Or in ES6 syntax:
```
<button className={`button${isDisabled && ' button--disabled'}${hasRadius || button--no-radius}`} />
```
Oh, It's very hard to read. But with react-classNames those days are gone! It's intelligent! You can give it classNames in *Any Format* you want and it will generate a neat classname for you. Let's see how can we implement our button with react-classnames:
```
import c from 'react-classnames';

<button className={c('button', {
  'button--disabled': isDisabled,
  'button--no-radius': !hasRadius
})} />
```
Even with Arrays and Nested Arrays: 
```
<button className={c(
  ['button', 'header__button', ['button--large']],
  {
    'button--disabled': isDisabled,
    'button--no-radius': !hasRadius
  }
)} />
```
Or Arrays containing objects:
```
<button className={c(
  'button', 
  [
    'header__button', 
    {
      'button--disabled': isDisabled,
      'button--no-radius': !hasRadius
    }
  ]
)} />
```
See? Give your classNames in *Any Format* you wish!

## Have problems?
I hope you don't have any problem with the library, but if library have problems, fill an issue containing the case with a seperate Repo and me or other friends will answer ASAP. Please double check your code before sumbiting issues.
