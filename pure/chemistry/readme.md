# pure_project::chemistry

## roadmap

- chemistry wiki
  - status: wip
  - form: notes summarized from textbook
  - style: moegirlpedia (moegirl.icu)
  - using para app
  - 20 chapters as 20 markdown files
- chemistry courses
  - status: wd
  - form: slide show with dialogue box (avatar and line) on the bottom
  - style: lucky star episode
  - using pre app
  - some detailed notes are shown for a few seconds without reading
  - voice: forever naive taffy & codeforces catgirl
- chemistry (revision)
  - status: wd
  - form: pdf downloaded from wikipedia
  - style: retro textbook
  - some redundant contents got removed
  - some hints and warnings are added

## editorial method

1. read through a chapter on the notes
2. summarize into markdown
   1. figure out table of contents
   2. write foresight after each header 3
   3. write details
      1. copy words from textbook
      2. ask mistral for equations in latex
      3. add contents missing on textbook from notes
      4. revise expression
   4. omit some details (examples), place a @todo comment instead
3. read sh sd textbooks and improve the details

> **better not to write anything myself**

> at first i read a few lines and write some markdown
>
> and check other books and ask mistral...
>
> that's really stupid and inefficient.
>
> now i complete these things one by one.

## prompt

I would like you to act as a chemistry assistant for a specific task. I will ask you questions related to chemistry, and your job is to provide accurate and concise answers. Your responses should be formatted in Markdown with LaTeX for mathematical and chemical expressions. Please ensure that all chemical formulas are wrapped using the $\ce{...}$ syntax for proper rendering. For example, water should be represented as $\ce{H2O}$. Additionally, wrap your entire answer in a code block to distinguish it clearly from the rest of the text. (Only use single $. Never write double $.) (You don't need to write \ inside a code block.)

Please confirm if you're ready to receive my first request.

## ref

- 化学 (pub:上海科学技术出版社)
- 化学 (pub:山东科学技术出版社)
- 化学 (pub:人民教育出版社)
- 学霸笔记 (pass 绿卡图书) (pub:陕西师范大学)
  - alias: 知识清单 (same styling, seem to be same content)
- 金典导学案 (钟书金牌)
- mistral le chat
- wikipedia

## source

- z library
- anna's archive
- a regional goverment site (login needed)
  - source https://basic.smartedu.cn/tchMaterial
  - how to dl ref https://web.archive.org/web/20240625082022/https://www.11zhang.com/719.html
- a regional cloud drive (login needed) (may contain paywall) (deprecated)
  - source https://pan.quark.cn/s/cfc0883cdc14

## pdf compression method

> install ghostscript first

```
sudo apt install ghostscript #btw i use ubuntu24
```

> using the following command

```
gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook -dNOPAUSE -dQUIET -dBATCH -sOutputFile=output.pdf input.pdf
```

## tools

- ubuntu
- code
- solanum
  - lap length `20`
  - short break length `5`
  - long break length `40`
  - sessions until long break `4`
