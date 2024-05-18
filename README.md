# 99bottles_js
## Chapter 1
### Being shameless is good, sometimes
The `main` branch contains [my solution](https://github.com/c-auri/99bottles/blob/main/lib/bottles.js) for the timed exercise. 

At first, I tried to use more complicated conditionals, similar to *Incomprehensibly Concise*. But I noticed early that this approach is harder to extend without introducing bugs and that the problem complexity is not that high anyways. So I scratched my approach and just wrote four `if`-branches and managed to get it done in time quite comfortably. The result is basically the same as *Shameless Green*.

I like the solution and was pleased to read that Sandi agrees that it's probably already "good enough" in a real world scenario. I find it hard to imagine that investing time into refactoring this would have any other use than learning.

### DRY is bad, sometimes
As an extra exercise, I tried to refactor the code to something "better" after the initial time was up. The [result](https://github.com/c-auri/99bottles/blob/dry/lib/bottles.js) is stored in the `dry` branch. 

I tried to focus on code duplication and removed it by adding helper functions and inlining some conditionals. The result may be more DRY, but I don't think it's a worthwhile improvement. While I don't think it's as bad as any of the other listings in the book, it still was harder to write than *Shameless Green* and I don't think it's as easy to read either. One may argue that the functions themselves are named well enough and they are therefore easy to understand. But by burying the implementation details, the code needlessly obfuscates the problem domain (how many different verse variants are there, which ones are most different, etc.)

This approach of writing code is similar to what Robert Martin describes in his book *Clean Code*. I've read this book early in my career and followed some of it's advice almost religiously, but nowadays I don't really like it anymore. Interestingly, the code also does not score better on the metrics touched on later in the chapter: the extra function calls increase the ABC score while the SLOC and the cyclomatic complexity remain about the same. Combined with Sandis remarks in the beginning of the chapter, it seems like she would not approve of this way of writing code either.

### Outlook
It's also worth mentioning that my refactoring does not really introduce any object oriented patterns. I'm interested to see how the book will approach improving *Shameless Green*. I suspect there is some way to use composition (or \**shudder*\* inheritance) to abstract the generation of the different verses without obscuring the problem domain.