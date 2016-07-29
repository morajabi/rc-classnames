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

## License
Copyright (c) 2016 Mohammad Rajabifard

The MIT License (MIT)
```
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
