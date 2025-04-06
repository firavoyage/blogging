> author: deepseek r1
>
> prompt: comprehensive regex guide write in english at least 1000 words

**Comprehensive Regular Expressions (Regex) Guide**

Regular expressions (regex) are a powerful tool for working with text. They enable developers, data scientists, and system administrators to search, validate, extract, and manipulate text efficiently. This guide will walk you through the fundamentals of regex, its syntax, common use cases, and advanced features. By the end, you’ll understand how to craft patterns to solve real-world problems.

---

### **Table of Contents**

1. **What is Regex?**
2. **Basic Regex Syntax**
   • Literals and Metacharacters
   • Anchors
   • Quantifiers
   • Character Classes
   • Groups and Alternation
   • Escaping Special Characters
3. **Advanced Regex Features**
   • Lookaheads and Lookbehinds
   • Backreferences
   • Greedy vs. Lazy Quantifiers
4. **Common Use Cases**
   • Validation (Emails, Dates, etc.)
   • Search and Replace
   • Data Extraction
5. **Regex Modifiers**
6. **Best Practices**
7. **Tools and Resources**

---

### **1. What is Regex?**

A **regular expression** is a sequence of characters that defines a search pattern. It is widely used in:
• **Text validation** (e.g., checking if an email or password is valid).
• **Text extraction** (e.g., parsing phone numbers from a document).
• **Text replacement** (e.g., reformatting dates in a log file).
• **String splitting** (e.g., tokenizing sentences).

Regex is supported in most programming languages (Python, JavaScript, Java, etc.), text editors (VS Code, Sublime), and command-line tools (grep, sed).

---

### **2. Basic Regex Syntax**

#### **Literals and Metacharacters**

• **Literals** match themselves. For example, `a` matches the character "a".
• **Metacharacters** have special meanings:
• `.` : Matches any single character (except newline).
• `^` : Start of a line.
• `$` : End of a line.
• `\d` : Digit (0-9).
• `\w` : Word character (a-z, A-Z, 0-9, \_).
• `\s` : Whitespace (space, tab, newline).

**Example**:  
• `a.c` matches "abc", "a2c", "a c".
• `^\d` matches a line starting with a digit.

---

#### **Anchors**

Anchors assert positions in the text:
• `^` : Start of the string (or line, depending on modifiers).
• `$` : End of the string (or line).

**Example**:  
• `^Hello` matches "Hello" at the start of a string.
• `world$` matches "world" at the end.

---

#### **Quantifiers**

Quantifiers define how many times a character or group should appear:
• `*` : 0 or more times.
• `+` : 1 or more times.
• `?` : 0 or 1 time.
• `{n}` : Exactly `n` times.
• `{n,}` : At least `n` times.
• `{n,m}` : Between `n` and `m` times.

**Examples**:  
• `a+` matches "a", "aa", "aaa", etc.
• `\d{3}` matches three consecutive digits (e.g., "123").

---

#### **Character Classes**

Character classes match one of several characters:
• `[abc]` : Matches "a", "b", or "c".
• `[a-z]` : Matches lowercase letters.
• `[^abc]` : Matches any character **not** in the set.

**Examples**:  
• `[A-Za-z]+` matches any English word.
• `[0-9]{3}` matches three digits.

---

#### **Groups and Alternation**

• **Groups** `()` capture parts of a match for reuse or extraction.
• **Alternation** `|` acts like a logical OR.

**Examples**:  
• `(cat|dog)` matches "cat" or "dog".
• `(\d{3})-(\d{2})` captures "123-45" into two groups.

---

#### **Escaping Special Characters**

Use a backslash `\` to escape metacharacters. For example, `\.` matches a literal dot.

---

### **3. Advanced Regex Features**

#### **Lookaheads and Lookbehinds**

These are **zero-width assertions** that match a pattern only if it is followed or preceded by another pattern:
• `(?=...)` : Positive lookahead.
• `(?!...)` : Negative lookahead.
• `(?<=...)` : Positive lookbehind.
• `(?<!...)` : Negative lookbehind.

**Example**:  
• `\d{3}(?=-)` matches "123" in "123-456" (if followed by a hyphen).
• `(?<=\$)\d+` matches numbers preceded by "$" (e.g., "$100" → "100").

---

#### **Backreferences**

Backreferences reuse captured groups within the same pattern using `\1`, `\2`, etc.

**Example**:  
• `(\w+) \1` matches repeated words like "hello hello".

---

#### **Greedy vs. Lazy Quantifiers**

Quantifiers are **greedy** by default (match as much as possible). Add `?` to make them **lazy** (match as little as possible).

**Examples**:  
• `a.*b` in "aabb" matches the entire string (greedy).
• `a.*?b` in "aabb" matches "aab" (lazy).

---

### **4. Common Use Cases**

#### **Validation**

• **Email**:

```regex
^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
```

• **Date (MM/DD/YYYY)**:

```regex
^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$
```

#### **Search and Replace**

Replace dates in `YYYY-MM-DD` format with `DD/MM/YYYY`:  
• **Pattern**: `(\d{4})-(\d{2})-(\d{2})`
• **Replacement**: `\3/\2/\1`

#### **Data Extraction**

Extract phone numbers from text:

```regex
(\+\d{1,3}\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}
```

---

### **5. Regex Modifiers**

Modifiers change how the regex engine behaves:
• `i` : Case-insensitive matching.
• `g` : Global matching (find all matches).
• `m` : Multiline mode (^ and $ match start/end of lines).
• `s` : Dotall mode (`.` matches newlines).

**Example**:  
`/pattern/gi` applies case-insensitive and global matching.

---

### **6. Best Practices**

1. **Test Incrementally**: Use tools like [regex101](https://regex101.com/) or [RegExr](https://regexr.com/) to debug.
2. **Keep It Readable**: Use comments (`(?#comment)`) or whitespace with the `x` modifier.
3. **Avoid Catastrophic Backtracking**: Simplify greedy quantifiers in complex patterns.
4. **Escape User Input**: Sanitize inputs when building regex dynamically.
5. **Optimize for Performance**: Prefer specific character classes (e.g., `\d` over `[0-9]`).

---

### **7. Tools and Resources**

• **Regex101**: Online tester with explanations.
• **MDN Regex Guide**: Mozilla’s JavaScript regex documentation.
• **Regular-Expressions.info**: In-depth tutorials and examples.
• **Debugging**: Use `re.debug` in Python or browser dev tools.

---

### **Conclusion**

Regex is a versatile skill for text processing, but it requires practice. Start with simple patterns, experiment with modifiers, and gradually tackle advanced features like lookarounds. Remember: readability and efficiency matter. Use regex responsibly, and you’ll save countless hours of manual text manipulation.
