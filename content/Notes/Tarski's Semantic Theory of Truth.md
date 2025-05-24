<hr>

Created: 2024-07-21 13:14
Tags: [[Philosophy]] [[Epistemology]] [[Alfred Tarski]]

#### Introduction
- Tarski's goal is to define truth in the context of formal logical languages like mathematics and logic
- Tarski's work was largely influential - work on truth in the 20th century is largely in response to Tarski
- Tarski sets out for two satisfy conditions on his definition of truth
	- **Material Adequacy**
		- Basically, it has to capture what we usually mean by true. It has to adhere to the goals posited by the correspondence theory (even if we argue his theory is deflationary)
		- Tarski cites Aristotle's summary of the ordinary meaning of truth:
			- "To say of what is that it is, or of what is not that it is not, is true"
				- // this is putting being ahead of truth, and why Heidegger may matter so much
		- Formally, the definition of truth must entail all sentences of the following form:
			- (T): "P" is true iff P
				- Sentences of this form are called "T-sentences"
				- Left hand side is the name of the sentence, right hand side is the sentence
				- Ex: "Snow is white" if true iff snow is white
				- (T-Conditional) if "P" is true, then P
				- (T-Converse) if P, then "P" is true
			- (T) itself is not a definition of truth, as two different definitions of truth could satisfy all of the T sentences
				- Tarski wants to say that any acceptable definition of truth ought to entail all the instances of T (have the extension of T), and thus he made this condition
	- **Formal Correctness**
		- The definition of truth must not lead to contradiction
		- Semantic Closure
			- A language is semantically closed just in case:
				- It is capable of self reference, so it contains expressions that can refer to its own expressions, ex: "this sentence"
				- It contains predicates such as "true" and "false"
			- If we have a semantically closed language, we can construct a liar paradox:
				- Ex: this sentence is false
			- Tarski does not want to modify the laws of logic, so instead he eliminates semantic closure. He claims that languages should be semantically open, meaning to illuminate truth we should not construct systems with self reference
				- If we want to give truth in the context of natural language, we will have to approximate them using formal systems

#### Meta-Languages and Object-Languages
- Since languages ought to be semantically open, we cannot talk about the truth of statements without using another language, namely, the Meta-Language. There is only truth in the "Object-Language", through statements in the "Meta-Language"
	- Earlier, when we stated the material adequacy condition, it was actually meaningless. What we really mean is 
		- (T*) "P" is true-in-O iff P
			- "true" had really meant "true-in-the-object-language"
		- Ex: "Schnee ist weiss" is true-in-German iff snow is white
			- English is the Meta-Language, German is the Object-Language
			- Note that we don't actually want to use semantically open languages like natural languages, this is just example
			- "Schnee ist weiss" is simply a convenient naming for a German sentence, we could have given this a name such as "German_Sentence_4"
- We can develop hierarchies of Meta-Languages, where we go up a level every time we speak of the truth of an Object-Language using a Meta-Language
	- L0: "Snow is white"
	- L1: ""Snow is white" is true" $\equiv$ ""snow is white" is true-in-L0"
	- L2: """Snow is white" is true" is true" $\equiv$ """snow is white" is true-in-L0" is true-in-L1"
- The same sentence may be true in one language, but false in another, and this is a natural consequence of the "true-in-O" concept.
- Liar Paradox, revisited
	- (F) This sentence is false
	- (F*) This sentence is false-in-O $\equiv$ (F*) F* is false-in-O
		- However, (F*) doesn't exist in O. "false-in-O" is a Meta-Language level concept
		- Since F* doesn't exist in O, F* cannot be false-in-O. See L2 below.
	- L0: \[no F*\]
	- L1: "F* is false in-L0"
	- L2: ""F* is false in-L0" is false-in-L1" 
		- Because L1 isn't an accurate description according to L2, F* doesn't exist at all in L0, how can it be false
- Finite Languages
	- Suppose L contains only two sentences, "snow is white", and "grass is green"
	- The complete definition of truth for L is:
		- "Snow is white" iff snow is white
		- "Grass is green" iff grass is green
	- P is true-in-L iff 
		- \a\[P = "snow is white" and snow is white\] or 
		- \a\[P = "grass is green" and grass is green]
	- We now have a clear and systematic model of truth, but how do we go further?
- Infinite Languages
	- Operators
		- Suppose we add the connectives "and" and "not" to L
		- We can now generate an infinite number of sentences:
			- Ex: "Snow is not white"
			- Ex: "Snow is white and snow is white and grass is not green"
			- ...
	- Recursion: To define truth in L, we now need to add recursion clauses
		- Base Clauses: 
			- "Snow is white" iff snow is white
			- "Grass is green" iff grass is green
		- Recursion Clauses (For any sentences A or B):
			- "A and B" is true iff "A" is true and "B" is true
			- "Not-A" is true iff if is not the case that "A" is true
	- Now, we have a satisfactory definition of truth in L.
	- P is true-in-L iff:
		- \a\[P = "snow is white" and snow is white\] or 
		- \a\[P = "grass is green" and grass is green] or
		- \a\[P = "A and B" and "A" is true and "B" is true\] or 
		- \a\[P = "~A" and it is not the case the "A" is true]
- Satisfaction
	- Open sentences
		- An open sentence is a sentence where one or more of the nouns is replaced with a free variable
			- Ex: "x is white"
			- Ex: "x is north of y"
		- Open sentences are not true or false in themselves, but rather satisfied or not satisfied by various things
			- Ex: "x is white" is satisfied by snow, but not grass
			- Ex: "x is north of y" is satisfied by the ordered pair \<London, Rome>
		- Open sentences express properties and relations, not instances of truth
	- Satisfaction is a relation between open sentences and ordered sequences of objects
		- We could have infinite sequences of objects, even with finite free variables
			- Ex: "x is north of y" is satisfied by \<London, Rome, snow, grass, Edinburgh, ....>
	- Satisfaction is a tool for turning open sentence into true sentences (via predication)
	- Satisfaction and Recursion
		- A language contains finitely many basic predicates. In English, there is "x is white", "x is green", etc.
		- We can use recursion to generate infinitely many more complex predicates
			- If a satisfies "x is F" and a satisfies "x is G", then a satisfies "x is F and G"
			- If a fails to satisfy "x is F", then a satisfies "x is not F"

#### Conclusion: A Formal statement on Truth
- Hence we arrive at a definition of truth and falsehood by simply saying that a sentence is true if it is satisfied by all objects, and false otherwise
- "P" is true iff "P" is satisfied by all sequences of objects
	- Ex: "x is between y and z"
		- is satisfied by all sequences that begin: \<London, Edinburgh, Rome, ...>
		- is not satisfied by all sequences of objects, so it is false
	- Ex: "snow is white"
		- is satisfied by all sequences that begin: <...>, that is, all sequences
		- "snow is white" is true
- Note that "all sequences of objects" is relative to the Domain of the language
## References
1. 