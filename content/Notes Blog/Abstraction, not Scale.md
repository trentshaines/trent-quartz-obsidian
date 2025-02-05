---
created: 2024-11-18 20:59
type: note
tags: [AI]
related: 
aliases:
---
## Failures to Generalize
- LLMs suffer from a failure to generalize, resulting in extreme sensitivity to phrasing, small deviations on familiar problems, hallucinations, etc.
	- For example, for a long time LLMs would fail minor variations on the monty-hall problem. They were only patched by being special-cased.
	- State of the art models still suffer with this lack of generalization on problems that aren't special-cased
- Even for something as simple as 3 digit number multiplication, GPT-4 has 59% accuracy. Similarly, LLMs trained on "A is B" will fail to learn "B is A".
- So, why are LLMs beating every human benchmark?

## Benchmarks and Defining Intelligence 
- McCarthy view of AI : "AI is about making machines do tasks they have never seen before"
- Minsky view of AI: "AI is about making machines do tasks that would require intelligence if done by humans" 
- Current benchmarks are under the Minsky view, it is task-centric, and does not require proper generalization outside of the tasks.
- Chollet sides with McCarthy - skill is not intelligence, attributing "intelligence" to a behavior is a category error. Intelligence is actually a process, and skill is the output. 
- Chollet recognizes a few vague areas/scales for intelligence, importantly, all are related to **generalization**
	- Fluidity
		- synthesizing new programs on the fly
	- Operational area
		- Broad area of programs used
	- Information-Efficiency
		- Information-Efficient program acquisition / synthesis
- Human exams do not have generalization in mind, in fact, they have generalization assumptions of the human biology. 
- Generalization is a conversion between past experience and potential operating area.  When measuring generalization, we should control for experience and priors.

## ARC-AGI
- Chollet created a new dataset called Abstraction Reasoning Corpus, or ARC-AGI dataset. They are easy problems for humans but require generalization capabilities.
- LLMs like Claude achieve around 20% on ARC-AGI, which is not great, but we should understand what this means - Can LLM's abstract?
- One theory of abstraction is that complexity and variability arises in any domain due to the repetition, composition, transformation, and instantiation of a small number of **kernels of structure** 
	- Abstraction is simply the process of mining past experiences for **reusable kernels of structure** 
	- Intelligence is high sensitivity to similarities and isomorphisms, ability to recast old patterns in new contexts, to abstract efficiently
- programs are abstractions / **reusable kernels of structure**
- LLMs are at this point:![[Pasted image 20241118215000.png]]
- Clearly, we have a lot of structured relations, but it is not truly generalizable as we cannot multiply 3 digit numbers across the entire domain.

## Value-Centric Abstraction vs. Program-Centric Abstraction
- Value-Centric Abstraction (Type 1)
	- Ex: Facial recognition software - abstracting across the domain of faces, constructing a prototype of the prototypical face
	- Operates in the continuous domain
	- Compares things with a continuous distance function, commonly dot product or euclidean distance
	- Abstraction is obtained by clustering concrete samples into prototype that are similar in terms of distance
	- This is abstract with respect to details that are not present in the prototypes
	- Related to: Geometry, Analogy, Perception, Intuition, Approximation, "abstraction" in art.
- Program-Centric Abstraction (Type 2)
	- Ex: Function sorting a list - abstracting across the domain of all lists of integers
	- Operates in discrete graphs of operators
	- Input nodes in the graphs can take on different values
	- The Program is obtained by merging specialized functions under a new abstract signature.  
	- This is abstract with respect to the values of the input nodes
	- Related to: Topology, Reasoning, Planning, Rigor, "abstraction" in CS
- LLM's rely on transformers, which is entirely Value-Centric abstraction. This is why we cannot multiply numbers.
- In fact, due to task familiarity, often times LLM can write a program for a problem that to solve something generally which it cannot directly generally solve (ex: multiply 3 digit numbers).

## Discrete Program Search
- Program-Centric Abstraction can be searched for - we can have program synthesis by exhausting turing machines and looking for correctness. One way to model these programs are graph operators from a DSL / Domain Specific Language: ![[Pasted image 20241118222956.png]]
- Program Synthesis actually performs better than LLMs on ARC-AGI, a brute force search scaled up achieves 49%.

## Combining Type 1 and Type 2 Abstractions
- Type 2 is costly due to combinatorial explosion, so we rely on Type 1 to prune. For example, in Chess, we will play out lines in our head, but only some. This is basically 'thinking fast and slow' lol.
-  We can try to leverage Deep Learning to prune our Program Search; we can "draw maps". 
- Similar to the example above of asking LLM to code a solution to multiply 3-digit numbers, we can use LLM to generate candidate programs for Program Search. This actually already has a high ARC-AGI score. 

## For later
- #todo Generalization in terms of Information Theory, more formally / mathematically
- #todo : Nelson Goodman Ways of Worldmaking in relation to generalization, both type 1 and type 2, faithful inductions as/and kernels of structure
- #todo theory-ladenness of 'correctness' and kernels of structure. language as truth. Assumptions of the correspondence theory of truth. 
- #todo language - postmodernity and its relations to both types of abstraction.
- #todo mechanistic interpretability and type 2 abstraction. 
- #todo causal inference / causal discovery and the journey from type 1 -> type 2 abstraction

## References
1. https://www.youtube.com/watch?v=s7_NlkBwdj8