> author: deepseek r1
>
> prompt: list all characters with special meaning in regex syntax, a pattern with its matches for each, and categorize them under different headers

### Regular Expression Special Characters

#### **1. Anchors**

- **`^`** (Start of line)
- **Pattern**: `^A`
- **Matches**: "A" in "Apple" (not in "aApple").
- **`$`** (End of line)
- **Pattern**: `a$`
- **Matches**: "a" in "banana" (not in "apple").

---

#### **2. Quantifiers**

- **`*`** (0 or more)
- **Pattern**: `ab*c`
- **Matches**: "ac", "abc", "abbc".
- **`+`** (1 or more)
- **Pattern**: `ab+c`
- **Matches**: "abc", "abbc" (not "ac").
- **`?`** (0 or 1)
- **Pattern**: `colou?r`
- **Matches**: "color" or "colour".
- **`{n,m}`** (Between `n` and `m` times)
- **Pattern**: `a{2,4}`
- **Matches**: "aa", "aaa", "aaaa".

---

#### **3. Character Classes**

- **`[...]`** (Matches any character in the set)
- **Pattern**: `[aeiou]`
- **Matches**: Vowels in "banana" (a, a, a).
- **`[^...]`** (Negation: matches any character **not** in the set)
- **Pattern**: `[^0-9]`
- **Matches**: Non-digits in "a1b2" (a, b).
- **`-`** (Range inside `[...]`)
- **Pattern**: `[A-Za-z]`
- **Matches**: Letters in "Hello123" (H, e, l, l, o).

---

#### **4. Escape Sequences**

- **`\d`** (Digit: `[0-9]`)
- **Pattern**: `\d+`
- **Matches**: "123" in "abc123".
- **`\D`** (Non-digit: `[^0-9]`)
- **Pattern**: `\D+`
- **Matches**: "abc" in "abc123".
- **`\w`** (Word character: `[A-Za-z0-9_]`)
- **Pattern**: `\w+`
- **Matches**: "user123" in "user123\_".
- **`\W`** (Non-word character)
- **Pattern**: `\W`
- **Matches**: "@" in "user@example".
- **`\s`** (Whitespace: space, tab, newline)
- **Pattern**: `\s+`
- **Matches**: " " in "hello world".
- **`\S`** (Non-whitespace)
- **Pattern**: `\S+`
- **Matches**: "hello" in " hello".
- **`\b`** (Word boundary)
- **Pattern**: `\bcat\b`
- **Matches**: "cat" in "The cat" (not "category").
- **`\B`** (Non-word boundary)
- **Pattern**: `\Bcat\B`
- **Matches**: "cat" in "scatter" (not standalone).
- **`\.`** (Literal dot)
- **Pattern**: `\.com`
- **Matches**: ".com" in "example.com".
- **`\\`** (Literal backslash)
- **Pattern**: `\\`
- **Matches**: "\" in "C:\\path".

---

#### **5. Groups and Alternation**

- **`(...)`** (Capturing group)
- **Pattern**: `(ab)+`
- **Matches**: "abab" in "ababc".
- **`|`** (Alternation)
- **Pattern**: `cat|dog`
- **Matches**: "cat" or "dog" in "I have a cat and a dog".
- **`(?:...)`** (Non-capturing group)
- **Pattern**: `(?:ab)+`
- **Matches**: "abab" without capturing the group.

---

#### **6. Lookaheads and Lookbehinds**

- **`(?=...)`** (Positive lookahead)
- **Pattern**: `a(?=b)`
- **Matches**: "a" before "b" in "cab".
- **`(?!...)`** (Negative lookahead)
- **Pattern**: `a(?!b)`
- **Matches**: "a" not followed by "b" in "cat".
- **`(?<=...)`** (Positive lookbehind)
- **Pattern**: `(?<=a)b`
- **Matches**: "b" after "a" in "ab".
- **`(?<!...)`** (Negative lookbehind)
- **Pattern**: `(?<!a)b`
- **Matches**: "b" not after "a" in "cb".

---

#### **7. Modifiers (Inline)**

- **`(?i)`** (Case-insensitive)
- **Pattern**: `(?i)abc`
- **Matches**: "AbC" in "AbC".
- **`(?m)`** (Multi-line mode)
- **Pattern**: `^a` (with `(?m)` enabled)
- **Matches**: "a" at the start of each line in multi-line input.

---

#### **8. Miscellaneous**

- **`.`** (Any character except newline)
- **Pattern**: `a.c`
- **Matches**: "abc", "a c", "aXc".
- **`\n`** (Newline), **`\t`** (Tab), **`\r`** (Carriage return)
- **Pattern**: `\t`
- **Matches**: Tab in "hello world".

---

This list covers the most commonly used special characters in regex syntax, along with examples and categories.
