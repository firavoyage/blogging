# dev

creation

**Created:** 2025.02.10

**Items:** 66

---



# 全 自 动 课 件 制 作 工 作 流 方汝见之

**Author:** 方汝见之  
**Bio:** 从来就没有什么救世主。  
**Avatar:** ![](https://picx.zhimg.com/v2-d7a9d5479aaece109baa4944b747bf57_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/2647c553252d30069c848cf6c7e675ef  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:** 114  
**Comments:** 9  
**Type:** article  

今有古书一本，保存质量不佳。我想将其中的内容变为高质量的课件，同时尽可能少动手（多让 ai 动手）。

我应当怎样做？

![](https://pic4.zhimg.com/v2-7a3947fc378f26350eec3ab075c607fb_r.jpg)

## 工具准备

显然本教程不是给完全的技术小白看的，也不是能全程白嫖的。

欲应用此教程，你需要

- 访问 zlibrary 下载电子版书籍的方法；
- 基础的  和 markdown 语法知识，尤其是 latex beamer 模版类的基础知识；
- pdf 转  软件，如 Doc2X，mathpix，math2tex 等
- 美团 LongCat AI 的 api（申请后每日 50M+5M 免费额度），或其他你能负担得起大模型的 api
- 阿里云百炼的 Coding Plan，或者其他你能负担起的、相较 qwen3.5-plus具有同等或更高智商的多模态模型的 api/coding plan（这一要求对于gemini 网页版而言是“思考”或“pro”）
- 配置好了 python 与  的 vscode

本文仅提供思路。只要能达到相同的效果，用什么工具并不重要。

同时，通过修改 prompt，本文的工具与工作流可以拓展至更广泛的需求，待有兴趣的读者慢慢探索……

## 阅读指南

有时我们不需要处理图片。此时处理过程会简化许多，只需阅读下文的

- Step 0
- Step 1
- Step 3
- Step 4 的 1,3 两步
- Step 5
- Step 6

即可。

进一步，在配置了合适的 MCP 或 skills 后（如利用 cherry studio），上述过程完全可以自动化进行，待读者自行研究……

## Step 0：获取书籍

从 zlibrary（现在网址超好记：[fuckfbi.ru](https://link.zhihu.com/?target=https%3A//fuckfbi.ru/%3Fts%3D1501)）获取书籍。

本教学使用的书籍是《中学数学加深 直线形 毛鸿翔》一书的第 14 节。

## Step 1：格式转换

> 稳妥起见，你可以先用诸 pdf 阅读器的“打印为 pdf”功能将你要处理的页面提取出来。

使用[Doc2X](https://link.zhihu.com/?target=https%3A//doc2x.noedgeai.com/%3FinviteCode%3DR1LDHH)，上传要处理的 pdf 文件并填入页码，并进行转换。

![](https://pic1.zhimg.com/v2-0177d785a58694687cd2f6adad34adfc_r.jpg)

右上角导出——导出为 markdown

![](https://pic1.zhimg.com/v2-0dab77a9248e97e36296a160eac1f278_r.jpg)

将导出文件解压，将解压出的文件夹移至你的备课工作目录。这个文件夹将是我们的工作区。

## Step 2：分割文件

用 vscode 打开导出的 markdown 文件，并在其中添加分割线---将其分块，使得每个定理/例题及其证明处于同一分块中，且同一分块中只有一个图片。

然后运行分割脚本splitter.py

importosdefmain():print("=== Markdown 题目分割工具 ===")# 1. 交互式获取文件名input_file=input("请输入 Markdown 文件的名称: ").strip()# 检查输入是否为空ifnotinput_file:print("错误：文件名不能为空。程序退出。")return# 2. 检查文件是否存在ifnotos.path.exists(input_file):print(f"错误：在当前目录下找不到文件 '{input_file}'。")print("请确认：")print("  1. 文件名是否正确（区分大小写）。")print("  2. 文件是否和该脚本在同一个文件夹内。")returnprint(f"正在读取文件：{input_file} ...")try:# 读取文件内容withopen(input_file,'r',encoding='utf-8')asf:content=f.read()exceptExceptionase:print(f"读取文件时出错: {e}")return# 3. 分割内容raw_problems=content.split('---')count=0forprobleminraw_problems:# 去除首尾空白clean_problem=problem.strip()# 跳过空内容ifnotclean_problem:continuecount+=1output_filename=f"{count}.md"# 写入文件try:withopen(output_filename,'w',encoding='utf-8')asf:f.write(clean_problem)print(f"已生成: {output_filename}")exceptExceptionase:print(f"写入文件 {output_filename} 失败: {e}")print("-"*20)print(f"处理完成！共提取了 {count} 道题目。")if__name__=="__main__":main()

## Step 3：复现图片

> 请根据你的需求酌情选择跳过这一步，或更改 prompt 使其与自己的目标相适配。

在当前目录下创建tkz文件夹。

依[教程](https://link.zhihu.com/?target=https%3A//bailian.console.aliyun.com/cn-beijing/%3Ftab%3Ddoc%23/doc/%3Ftype%3Dmodel%26url%3D3005961)配置好 qwen code 及 coding plan。然后鼠标右键——在终端打开——输入qwen启动 qwen code。向其发出指令

当然文件夹中有一些以 k.md （k 为正整数）命名的 markdown 文件。这些 markdown 文件中记录了一些平面几何定理、习题及其证明。
对于其中每一个 markdown 文件，若其中依 markdown 语法插入了图片，则请利用该文件中的信息，写 tkz-euclide 代码复刻该图片。
复刻所用代码保存在 tkz 文件夹中，并命名为 fig_k.tex
若该 markdown 文件中没有插入图片，则对其什么都不做。

运行完成后，逐个编译以检查生成的![](https://www.zhihu.com/equation?tex=%5CLaTeX)代码。一般不会编译报错，但极有可能角度标反了。

对于复杂的图形，极有可能复刻效果并不好。此时需打开 gemini pro 、复制此图与相应的文字描述并输入 prompt

据此，写代码用 tkz-euclide 复刻此图

用 gemini 所写代码代替不合格代码。

全部完成后，在tkz文件夹运行如下脚本以清理多余文件、清理文件格式

importosimportreimportsysfrompathlibimportPathdefprocess_folder(folder_path):target_dir=Path(folder_path).resolve()script_path=Path(__file__).resolve()if'__file__'inglobals()elseNoneifnottarget_dir.exists():print(f"错误：文件夹 '{folder_path}' 不存在。")returnifnottarget_dir.is_dir():print(f"错误：'{folder_path}' 不是一个文件夹。")returnprint(f"开始处理文件夹：{target_dir}")ifscript_path:print(f"脚本自身路径：{script_path} (将被保护)")# 计数器deleted_files_count=0processed_files_count=0warning_files_count=0# 遍历文件夹中的所有条目foritemintarget_dir.iterdir():# 只处理文件，忽略子文件夹ifitem.is_file():# 0. 保护脚本自身不被删除ifscript_pathanditem.resolve()==script_path:print(f"[跳过] {item.name} (脚本自身)")continue# 1. 删除所有非 .tex 文件ifitem.suffix!='.tex':try:item.unlink()print(f"[删除] {item.name}")deleted_files_count+=1exceptPermissionError:print(f"[跳过] 无法删除 {item.name} (权限不足)")# 2. 处理 .tex 文件else:try:# 读取文件内容，假设编码为 utf-8content=item.read_text(encoding='utf-8')# 使用正则查找 \begin{tikzpicture} 到 \end{tikzpicture} 的内容# re.DOTALL 让 . 可以匹配换行符pattern=r'\\begin\{tikzpicture\}.*?\\end\{tikzpicture\}'match=re.search(pattern,content,re.DOTALL)ifmatch:tikz_content=match.group(0)# --- 额外修正 1: 修改 scale 参数 ---# 按行分割，只处理包含 \begin{tikzpicture} 的那一行lines=tikz_content.splitlines(keepends=True)new_lines=[]forlineinlines:ifr'\begin{tikzpicture}'inline:# 正则匹配 scale = <浮点数>，排除 xscale/yscale# 匹配逻辑：前面不是 x 或 y，然后是 scale，可选空格，=，可选空格，数字scale_pattern=r'(?<!x)(?<!y)scale\s*=\s*\d+\.?\d*'# 替换为 scale = 0.8new_line=re.sub(scale_pattern,r'scale = 0.8',line)new_lines.append(new_line)else:new_lines.append(line)modified_tikz_content="".join(new_lines)# --- 额外修正 2: 添加 center 环境 ---final_content="\\begin{center}\n"+modified_tikz_content+"\n\\end{center}"# 写回文件item.write_text(final_content,encoding='utf-8')print(f"[处理] {item.name}")processed_files_count+=1else:print(f"[警告] {item.name} 中未找到 tikzpicture 环境，跳过修改。")warning_files_count+=1exceptExceptionase:print(f"[错误] 处理 {item.name} 时发生异常：{e}")print("-"*30)print(f"处理完成。")print(f"删除非 tex 文件：{deleted_files_count} 个")print(f"成功处理 tex 文件：{processed_files_count} 个")print(f"未找到 tikzpicture 的 tex 文件：{warning_files_count} 个")if__name__=="__main__":# 如果提供了命令行参数，则使用该路径，否则默认为当前目录iflen(sys.argv)>1:path=sys.argv[1]else:path="."# 确认提示confirm=input(f"⚠️  警告：此操作将永久删除 '{path}' 中的非 .tex 文件并修改 .tex 文件内容。\n是否继续？(输入 yes 继续): ")ifconfirm.lower()=='yes':process_folder(path)else:print("操作已取消。")

## Step 4：修改证明

原文的证明是用文字叙述的，而不是用![](https://www.zhihu.com/equation?tex=%5Cbecause)和![](https://www.zhihu.com/equation?tex=%5Ctherefore)的语言叙述的。这是不符合初中数学的规范的，需进行修改。

为此在主文件夹中配置以下脚本，填入你的 longcat api-key、分割文件数、prompt 等信息

importasyncioimportosfromopenaiimportAsyncOpenAIfrompathlibimportPath# ================= 配置区域 =================# 请在此处填入你的 API 配置API_KEY=""# 你的 API KeyBASE_URL="https://api.longcat.chat/openai/v1/"# API 地址 (如果是中转或非官方，请修改此处)MODEL_NAME="LongCat-Flash-Thinking"# 使用的模型名称TOTAL_FILES=# 总文件数量INTERVAL_SECONDS=20# 发送间隔 (秒)prompt="你将收到一个平面几何数学定理（或题目）及其证明的文本。请将其证明改写为 $\\because$ 和 $\\therefore$ 的形式。要求：全部使用行内公式，完全不使用行间公式；每条以 $\\because$ 或 $\\therefore$ 开头的语句占据单独的一行，且前后都插入空行；保留必要的说明性文本；除此之外不要作任何更改。"# ===========================================# 初始化异步客户端client=AsyncOpenAI(api_key=API_KEY,base_url=BASE_URL.strip()# 移除可能的多余空格)asyncdefsolve_problem(k:int):"""读取 k.md，调用 API，并将结果写入 k_solution.md优化：如果解决方案文件已存在，则跳过处理"""input_filename=f"{k}.md"output_filename=f"{k}_solution.md"# === 新增检查：跳过已存在的解决方案文件 ===ifos.path.exists(output_filename):print(f"[跳过] 解决方案 {output_filename} 已存在，跳过处理。")return# ======================================# 检查输入文件是否存在ifnotos.path.exists(input_filename):print(f"[跳过] 文件 {input_filename} 不存在。")returntry:# 1. 读取题目withopen(input_filename,'r',encoding='utf-8')asf:question_content=f.read()print(f"[开始处理] 题目 {input_filename}...")# 2. 调用 APIresponse=awaitclient.chat.completions.create(model=MODEL_NAME,messages=[{"role":"system","content":prompt},{"role":"user","content":question_content}],temperature=0.3)answer_content=response.choices[0].message.content# 3. 写入文件 (题目 + 答案)withopen(output_filename,'w',encoding='utf-8')asf:# 写入题干部分f.write(f"## 题目 ({k}.md)\n\n")f.write(question_content)f.write("\n\n---\n\n")# 写入解答部分，并包裹在 proof 环境中f.write("\\begin{proof}\n\n")f.write(answer_content)f.write("\n\n\\end{proof}")print(f"[完成] 已生成 {output_filename}")exceptExceptionase:print(f"[错误] 处理 {input_filename} 时出错: {e}")asyncdefmain_scheduler():"""调度器：每隔指定秒数启动一个新的任务，但不等待前一个任务结束（实现并行）"""tasks=[]print(f"开始处理 {TOTAL_FILES} 个文件，每隔 {INTERVAL_SECONDS} 秒发送一个请求...")forkinrange(1,TOTAL_FILES+1):# 创建异步任务并立即加入列表，不等待它完成task=asyncio.create_task(solve_problem(k))tasks.append(task)# 暂停指定时间，控制发送频率# 注意：如果是最后一个文件，不需要再等待了ifk<TOTAL_FILES:awaitasyncio.sleep(INTERVAL_SECONDS)print("所有题目已提交，等待剩余任务完成...")# 等待所有已启动的任务完成awaitasyncio.gather(*tasks)print("全部处理完成！")if__name__=="__main__":# 运行主程序asyncio.run(main_scheduler())

静置一段时间，待其处理完成。

此时文件夹中应生成了若干个1_solution.md这样的文件，其中包含了原文与所需的调整后的证明。

再运行如下脚本，将其中插入的图片替换为上一步复现的代码。

importosimportrefrompathlibimportPathdefprocess_solution_files():"""遍历当前文件夹中所有 k_solution.md 文件，将其中的图片插入代码替换为 \input{tkz/fig_k.tex}"""# 获取当前目录current_dir=Path('.')# 匹配 k_solution.md 格式的文件（k 为正整数）pattern=re.compile(r'^(\d+)_solution\.md$')# 获取所有匹配的文件files=[fforfincurrent_dir.iterdir()iff.is_file()andpattern.match(f.name)]ifnotfiles:print("未找到符合格式的文件（k_solution.md）")returnprint(f"找到 {len(files)} 个文件需要处理\n")forfile_pathinsorted(files,key=lambdax:int(pattern.match(x.name).group(1))):filename=file_path.namek=pattern.match(filename).group(1)# 读取文件内容withopen(file_path,'r',encoding='utf-8')asf:content=f.read()# 匹配 markdown 图片语法：![alt](url) 或 <img> 标签img_patterns=[r'!\[.*?\]\(.*?\)',# ![alt](url)r'<img\s+[^>]*>',# <img ...>r'<img\s+[^>]*/>',# <img ... />]original_content=contentreplaced=Falseforimg_patterninimg_patterns:match=re.search(img_pattern,content,re.IGNORECASE)ifmatch:# 替换为 \input{tkz/fig_k.tex}# 注意：反斜杠需要转义，使用 \\replacement=f'\\\\input{{tkz/fig_{k}.tex}}'content=re.sub(img_pattern,replacement,content,count=0,flags=re.IGNORECASE)replaced=Trueprint(f"✓ {filename}: 已替换图片插入代码")breakifnotreplaced:print(f"⚠ {filename}: 未找到图片插入代码")continue# 写回文件withopen(file_path,'w',encoding='utf-8')asf:f.write(content)print(f"\n处理完成！共处理 {len(files)} 个文件")if__name__=='__main__':process_solution_files()

最后运行合并脚本

import os

def process_files():
    # 交互式询问要处理的文件数
    while True:
        try:
            user_input = input("请输入要处理的文件总数: ")
            max_k = int(user_input)
            if max_k <= 0:
                print("请输入大于 0 的整数。")
                continue
            break
        except ValueError:
            print("输入无效，请输入一个整数。")

    # 固定输出文件名
    output_filename = "merged.md"
    processed_contents = []

    print(f"开始处理 1 到 {max_k} 的文件...")

    for k in range(1, max_k + 1):
        # 构建文件名
        filename = f"{k}_solution.md"
        
        # 检查文件是否存在
        if not os.path.exists(filename):
            print(f"警告: 未找到文件 {filename}，已跳过。")
            continue
        
        try:
            # 读取文件
            with open(filename, 'r', encoding='utf-8') as f:
                lines = f.readlines()
            
            # 1. 去除第 1 行 (索引为0的行)
            content_lines = lines[1:]
            
            # 将剩余行合并为字符串
            file_text = "".join(content_lines)
            
            # 2. 去除 **、# 和 ---
            # 注意：我们在添加分隔符之前进行清理，防止后续添加的分隔符被误删
            clean_text = file_text.replace('**', '').replace('#', '').replace('---', '')
            
            # 收集处理后的文本
            processed_contents.append(clean_text)
            
        except Exception as e:
            print(f"读取文件 {filename} 时发生错误: {e}")

    # 3. 合并文件并增加分隔符
    # 分隔符要求：空行、分割线、空行 (即 \n\n---\n\n)
    separator = "\n\n---\n\n"
    
    # 使用 join 将所有文件内容用分隔符连接起来
    final_merged_content = separator.join(processed_contents)

    # 4. 写入最终文件
    try:
        with open(output_filename, 'w', encoding='utf-8') as f:
            f.write(final_merged_content)
        print(f"处理完成！结果已保存为: {output_filename}")
    except Exception as e:
        print(f"写入输出文件时发生错误: {e}")

if __name__ == "__main__":
    process_files()

合并后将得到merged.md，这是我们课稿的原型。

## Step 5：转为

merged.md中保留了分割线（---）信息，可按此分割线直接将其转为 beamer。但这些分割线可能间距太大，导致转换后的 frame 内容溢出。故虽不强制，手动在merged.md中再插入一些分割线会是好的。

在安排好分割线后， 运行如下脚本。它会将两个分割线之间的内容视为一 frame 进行转换，并插入我[自用 LaTeX beamer 模版](https://zhuanlan.zhihu.com/p/1926205628164048579)中的配置信息。注意：该模版最后一页的致谢需插入图片，请自备并替换。

importredefconvert_md_to_beamer(input_file,output_file):"""Converts a markdown file partitioned by '---' into a LaTeX beamer file."""# 1. Read the input markdown filetry:withopen(input_file,'r',encoding='utf-8')asf:content=f.read()exceptFileNotFoundError:print(f"Error: The file '{input_file}' was not found.")return# 2. Split content by '---' separatorslides=content.split('---')latex_frames=[]# 3. Process each slide pieceforslideinslides:stripped_slide=slide.strip()# Skip empty sections (e.g., trailing dashes)ifnotstripped_slide:continue# Convert images: ![](path) -> \includegraphics[]{path}# We add basic scaling options to prevent images from blowing up the slideprocessed_content=re.sub(r'!\[(.*?)\]\((.*?)\)',r'\\includegraphics[width=\\textwidth,height=0.8\\textheight,keepaspectratio]{\2}',slide)# --- 新增功能：去除 Markdown 中的 # 和 ** ---# 去除所有的加粗标记 **processed_content=re.sub(r'\*\*','',processed_content)# 去除所有的标题标记 #processed_content=re.sub(r'#','',processed_content)# -----------------------------------------# Logic for Signal <E>ifstripped_slide.startswith('<E>'):# Remove the <E> tag from the contentclean_content=processed_content.replace('<E>','',1).strip()frame=("\\begin{frame}[t]\n""\\begin{Eg}\n""\\end{Eg}\n\n"f"{clean_content}\n""\\end{frame}")# Logic for Signal <B>elifstripped_slide.startswith('<B>'):# Remove the <B> tag from the contentclean_content=processed_content.replace('<B>','',1).strip()frame=("\\begin{frame}\n""\\begin{columns}[t]\n""\\begin{column}{0.48\\textwidth}\n""% Left column content\n""\\end{column}\n""\n""\\begin{column}{0.48\\textwidth}\n""      % Right column content\n""\\end{column}\n""\\end{columns}\n\n"f"{clean_content}\n""\\end{frame}")# Default Logic (Normal Frame)else:frame=("\\begin{frame}\n"f"{processed_content.strip()}\n""\\end{frame}")latex_frames.append(frame)# 4. Merge into a final Tex file# We include a minimal header so the file is compilable immediatelyheader=("% -*- coding: utf-8 -*-\n""\\documentclass[professionalfont]{beamer}\n""\\usefonttheme[onlymath]{serif}\n""\\mode<presentation> {\n""\t\\usetheme{Madrid}\n""\t\\usecolortheme{spruce}\n""}\n""\\usepackage{graphicx}\n""\\usepackage{booktabs}\n""\\usepackage{bm}\n""\\usepackage{xeCJK}\n""\\setCJKmainfont[BoldFont=simhei.ttf, SlantedFont=simkai.ttf]{simsun.ttc}\n""\\setbeamerfont{theorem body}{shape=\\upshape}\n""\\usepackage[bookmarks=true]{hyperref}\n""\\usepackage{tikz}\n""\\usepackage{xcolor}\n""\\definecolor{dg}{RGB}{0,51,36}\n""\\usepackage{ulem}\n""\\usepackage{mathrsfs}\n""\\newtheorem{Thm}{定理}\n""\\newtheorem{Lem}{引理}\n""\\newtheorem{QQ}{问题}\n""\\newtheorem{Prop}{命题}\n""\\newtheorem{Cor}{推论}\n""\\newtheorem{Def}{定义}\n""\\newtheorem{Eg}{例}\n""\\newtheorem{Axm}{公理}\n""\\setbeamertemplate{theorems}[numbered]\n""\n""\\title{\\S }\n""\n""\\author{}\n""\\institute\n""{\n""\n""}\n""\\date{\\today}\n""\\begin{document}\n\n""\\maketitle")footer=("\\begin{frame}[plain]\n""\n""\\begin{columns}\n""\\begin{column}{0.4\\textwidth}\n""\\begin{center}\n""\\pgfimage[width=0.6\\textwidth]{qdez.png}\n""\\end{center}\n""\\end{column}\n""\\begin{column}{0.75\\textwidth}\n""\\begin{center}\n""""\\font\\endfont = cmss10 at 25.40mm\n""\\color{brown}\n""\\endfont\n""\\baselineskip 20.0mm\n""\n""\\Huge{\\textbf{谢谢！}}\n""\n""\\end{center}\n""\n""\\end{column}\n""\\end{columns}\n""\n""\\end{frame}\n""\\end{document}\n")full_latex=header+"\n\n".join(latex_frames)+footerwithopen(output_file,'w',encoding='utf-8')asf:f.write(full_latex)print(f"Success! Converted {len(latex_frames)} frames to '{output_file}'.")# --- usage ---if__name__=="__main__":# 交互式输入文件名filename_input=input("请输入要处理的文件名（不需要输入 .md 后缀）：")# 自动补全输入和输出的文件名input_md=f"{filename_input}.md"output_tex=f"{filename_input}.tex"# 调用转换函数convert_md_to_beamer(input_md,output_tex)

## Step 6：调整格式

转换后的文件已经几乎可用了，但还有些小小的格式问题需要手动处理。只要知道需求，ai 及其写的脚本也可以很好地完成处理格式工作。

【利用脚本】我需要将带图的 frame 转为双栏的。为此我让 qwen 写了如下的脚本

importreimportosdefprocess_frame(match):"""处理单个 frame 环境的匹配对象。如果 frame 中包含 \input 且尚未被 columns 包裹，则重构为双栏布局。"""full_match=match.group(0)begin_tag=match.group(1)# \begin{frame}...content=match.group(2)# frame 内部内容end_tag=match.group(3)# \end{frame}# 检查是否已经包含 columns 环境，避免重复处理ifr'\begin{columns}'incontent:returnfull_match# 检查是否包含 \input 命令# 使用正则避免匹配到注释中的 \input 或文本中的 input# 这里简单判断行中是否包含 \inputlines=content.splitlines(keepends=True)input_lines=[]other_lines=[]has_input=Falseforlineinlines:# 简单的判断：行中包含 \input 且未被 % 注释# 去除行首空白和注释符号检查check_line=line.lstrip()ifcheck_line.startswith('%'):other_lines.append(line)continueifr'\input'inline:input_lines.append(line)has_input=Trueelse:other_lines.append(line)ifnothas_input:returnfull_match# 构建左栏内容 (\input 部分)left_content="".join(input_lines)# 构建右栏内容 (其余部分)right_content="".join(other_lines)# 构建新的 columns 结构# 注意缩进以保持美观new_content=(r"  \begin{columns}"+"\n"r"    \begin{column}{0.48\textwidth}"+"\n"+left_content+r"    \end{column}"+"\n"r"    "+"\n"r"    \begin{column}{0.48\textwidth}"+"\n"+right_content+r"    \end{column}"+"\n"r"  \end{columns}"+"\n")returnbegin_tag+new_content+end_tagdefmain():# 交互式询问文件名filename_base=input("请输入文件名（不加 .tex）：").strip()filename=f"{filename_base}.tex"ifnotos.path.exists(filename):print(f"错误：文件 '{filename}' 不存在。")returntry:withopen(filename,'r',encoding='utf-8')asf:content=f.read()exceptExceptionase:print(f"读取文件时出错：{e}")return# 正则匹配 frame 环境# 匹配 \begin{frame} 及其可选参数，直到 \end{frame}# 使用非贪婪匹配 .*? 配合 DOTALL 标志# 分组 1: \begin{frame}... (包含选项和标题)# 分组 2:  frame 内部内容# 分组 3:  \end{frame}pattern=r'(\\begin{frame}(?:\[[^\]]*\])?(?:\{[^}]*\})?\n*)(.*?)(\\end{frame})'try:new_content=re.sub(pattern,process_frame,content,flags=re.DOTALL)exceptExceptionase:print(f"处理内容时出错：{e}")returntry:withopen(filename,'w',encoding='utf-8')asf:f.write(new_content)print(f"处理完成，文件已更新：{filename}")exceptExceptionase:print(f"写入文件时出错：{e}")if__name__=="__main__":main()

【利用 ai】我需要将各类定义、定理、推论等置于合适的环境中。于是，仍旧利用 longcat ai，我运行如下的脚本

importosfromopenaiimportOpenAIfrompathlibimportPath# 引入 LangChain 的递归字符分割器fromlangchain_text_splittersimportRecursiveCharacterTextSplitter# --- 配置区域 ---# API 配置API_KEY=os.environ.get("OPENAI_API_KEY","")BASE_URL=os.environ.get("OPENAI_BASE_URL","https://api.longcat.chat/openai/v1")# 翻译/格式化配置MODEL_NAME="LongCat-Flash-Chat"# 根据你的模型修改# --- 初始化分割器 (核心优化) ---# 配置分割策略# separators: 优先使用双换行(段落)，然后是单换行，最后是中文/英文标点和空格# chunk_size: 每个块的最大字符数。# chunk_overlap: 格式化任务建议设为 0，避免上下文重复导致格式混乱text_splitter=RecursiveCharacterTextSplitter(separators=["\n\n","\n","。","！","？",".","!","?"," ",""],chunk_size=3000,chunk_overlap=0,length_function=len,)# --- 脚本逻辑 ---client=OpenAI(api_key=API_KEY,base_url=BASE_URL)deftranslate_text(text):"""调用 API 进行格式调整 (原 prompt 保持不变)"""prompt=f"""你是一个忠实格式调整器。你将收到一段 latex 文本。请将其中的定义置于 Def 环境中，定理置于 Thm 环境中，推论置于 Cor 环境中。除此之外，不要对原文作任何改动，忠实地输出原文即可。注意不要输出这里的 prompt需要处理的内容如下:{text}"""try:response=client.chat.completions.create(model=MODEL_NAME,messages=[{"role":"system","content":"You are a professional translator."},{"role":"user","content":prompt}],temperature=0.1,timeout=120.0)returnresponse.choices[0].message.contentexceptExceptionase:print(f"Error during processing: {e}")returnNonedefprocess_file(src_path,dist_path):"""处理单个文件"""try:withopen(src_path,'r',encoding='utf-8')asf:content=f.read()exceptExceptionase:print(f"Failed to read {src_path}: {e}")returnprint(f"Processing: {src_path.name} ...")ifnotcontent.strip():# 如果文件为空，直接创建空的目标文件withopen(dist_path,'w',encoding='utf-8')asf:f.write(content)print("File is empty. Created empty output file.")return# --- 使用分割器 ---chunks=text_splitter.split_text(content)print(f"  - Split into {len(chunks)} chunks.")translated_chunks=[]fori,chunkinenumerate(chunks):print(f"  - Processing chunk {i+1}/{len(chunks)} (length: {len(chunk)})...")processed_chunk=translate_text(chunk)ifprocessed_chunk:translated_chunks.append(processed_chunk)else:print("  ! Failed to process a chunk, keeping original.")translated_chunks.append(chunk)# 合并结果# 注意：这里原来是 "\n\n".join，如果不想在块之间增加额外空行，请改为 ""final_content="\n\n".join(translated_chunks)# 保存 (确保父目录存在，虽然同级目录通常不需要)dist_path.parent.mkdir(parents=True,exist_ok=True)try:withopen(dist_path,'w',encoding='utf-8')asf:f.write(final_content)print(f"  -> Saved to {dist_path}")exceptExceptionase:print(f"Failed to save {dist_path}: {e}")defmain():# 1. 询问文件名print("--- Markdown 公式格式化工具 ---")raw_filename=input("请输入文件名（不需要输入 .tex 后缀）: ").strip()ifnotraw_filename:print("未输入文件名，程序退出。")return# 2. 处理输入字符串，防止用户误输入 .mdifraw_filename.endswith(".md"):raw_filename=raw_filename[:-3]src_filename=f"{raw_filename}.tex"dist_filename=f"{raw_filename}_1.tex"src_path=Path(src_filename)dist_path=Path(dist_filename)# 3. 检查源文件是否存在ifnotsrc_path.exists():print(f"错误：在当前目录下找不到文件 '{src_filename}'")return# 4. 检查目标文件是否已存在ifdist_path.exists():print(f"警告：输出文件 '{dist_filename}' 已存在。")choice=input("是否覆盖？: ")ifchoice.lower()notin['y','yes']:print("操作取消。")return# 5. 执行处理process_file(src_path,dist_path)print("\n处理完成!")if__name__=="__main__":main()

处理后的文件为merged_1.tex

## 成品展示

![](https://pic1.zhimg.com/v2-c271619e3a475c736623b0a1a0ffdda0_r.jpg)

## 后记：没有银弹

诚如《人月神话》所言：“（在计算机程序设计中）没有银弹：不存在一种方法能将设计效率提高十倍。这是程序设计的固有复杂度所决定的。”

这一点在备课中也是同理。不存在一种方式能将备课效率提高十倍。这是因为备课者自己阅读、消化一遍所备内容的过程是不可或缺的。而这一部分至少占据了原先备课时间的一半。

尽管如此，我们能够发挥主观能动性，利用最新的计算机科学技术，尽可能地压缩重复劳动的时间，将备课效率提升至前人无法想象的高度。

另：本文的脚本不全是拿 qwen3.5-plus 新写的，有的是拿之前工作复用的

- 在markdown中加分割线的想法来自 Obsidian 的 presentation 插件。这一想法同样可应用于 vscode 中的 Marp 插件。
- markdown 转 beamer 插件是处理纯文本文档时就写好了的：自用 markdown slides 转 latex beamer 脚本
- 批量处理分割后文件格式的工具，原先只是批量解题工具：Deepseek 批量解答数学题实践
- 批量处理合并后文件格式的工具，原先只是翻译工具：自用批量翻译脚本

最后，本文只是提供了脚本与示例。各位读者完全可以跟据自己的需求，让 ai 写出新的脚本，优化自己的工作流。这里，仍蕴藏着无限的可能……


---

# 有什么游戏精巧地利用了数学？ 惊鸿忘江

**Author:** 惊鸿忘江  
**Bio:**   
**Avatar:** ![](https://pic1.zhimg.com/v2-b97c3769afeacb2d170ab831193cf81f_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/4eb857df075940e45dec48a683390413  
**Published:** 2026.02.26 10:12:10  
**Updated:** 2026.02.26 10:22:49  
**Question:** https://www.zhihu.com/question/349345510  
**Question Created:** 2019.10.06 10:34:59  
**Question Updated:** 2019.10.06 10:40:24  
**Votes:** 450  
**Comments:** 42  
**Type:** answer  

去年出了一个和拓扑学有一点关系的demo

《Trifolium》，逻辑解谜类，人称长颈鹿打结

如果有时间可以去steam玩下demo,或者去b站看看试玩视频

玩家操控一只脖子很长的长颈鹿，相当于3d空间里的一根绳子。脖子本身占据一格

每关的目标是穿过所有圆环，穿过所有圆环门就会打开

（其实这个游戏不是关卡制，所有内容全放在一张大地图上。常玩逻辑解谜的同学应该会预感到这种设计可以用来出跨区域联动的meta谜题）

![](https://pica.zhimg.com/v2-ad6c36e99774c74b86bc1dfe5c14d550_r.jpg?source=2c26e567)




![](https://pic1.zhimg.com/v2-3a713bfcf1fe92983d16a98d67cbf20a_r.jpg?source=2c26e567)

圆环的个数代表穿过顺序，玩家必须先穿过所有单环，再穿过所有双环……依次从小到大穿过

![](https://pica.zhimg.com/v2-206ec058a1d75afdea8fb8d2ffac19c0_r.jpg?source=2c26e567)




![](https://picx.zhimg.com/v2-5821be98d1cece920d22f76345ab2e99_r.jpg?source=2c26e567)

长颈鹿在位置高于地面时，水平方向每走一格，竖直方向就下降一格

![](https://pica.zhimg.com/v2-fd49b9bde6b1cb4a93cf14b1fd39fe31_r.jpg?source=2c26e567)




![](https://picx.zhimg.com/v2-4972cbed82594bc63325ec3ce268e914_r.jpg?source=2c26e567)

虽然只要高于地面，长颈鹿可以在任何位置下降。但是只能在特定位置（白圆）爬升固定高度

![](https://pic1.zhimg.com/v2-8a2c2f8a43c59368504c48d0665091a6_r.jpg?source=2c26e567)




![](https://picx.zhimg.com/v2-e81dd58bc3eb33be6cc817270bb5c5e4_r.jpg?source=2c26e567)




![](https://pica.zhimg.com/v2-8f7a9fec96a54bda8baefc665446e7ee_r.jpg?source=2c26e567)

这样的机制下，通关往往需要用自己的脖子垫脚

![](https://pic1.zhimg.com/v2-006ce091f9936ab1da580a33d6cab826_r.jpg?source=2c26e567)




![](https://picx.zhimg.com/v2-2cc789c761bb343b01eb728fafe6d2d4_r.jpg?source=2c26e567)




![](https://picx.zhimg.com/v2-1aeec4220e9ceed1e4e87b258797fd63_r.jpg?source=2c26e567)




![](https://pica.zhimg.com/v2-cff736b1d0f4b0339353eeb7e51d1414_r.jpg?source=2c26e567)

有时也需要留个洞让自己钻过去

![](https://picx.zhimg.com/v2-a9e105a3a1a208218824dae45c335b92_r.jpg?source=2c26e567)




![](https://picx.zhimg.com/v2-0c05aeb04558fa2576fb8a49e795b83b_r.jpg?source=2c26e567)

在demo末期，出现了两个结构几乎完全一样的关卡，玩家发现同样的走法却一个能过去，一个过不去。

![](https://picx.zhimg.com/v2-524c24b8ebcc25043c839dcbc2eb8ba7_r.jpg?source=2c26e567)




![](https://picx.zhimg.com/v2-cc6ed5d68c3e26526b15a0c48db0ec26_r.jpg?source=2c26e567)




![](https://pica.zhimg.com/v2-75f54a650309c0c39480b0d5bd10e6e2_r.jpg?source=2c26e567)




![](https://pic1.zhimg.com/v2-eb4be5edd14e13bd48f0a8247d864827_r.jpg?source=2c26e567)

这是因为两个关卡的要求不同。第一个关卡圆环是打结的，代表此处必须打结。第二个关卡圆环是不打结的（平凡结），代表此处禁止打结

![](https://pic1.zhimg.com/v2-f04097ef69a1302fb842ca8a7ed217bf_r.jpg?source=2c26e567)




![](https://picx.zhimg.com/v2-fc05e1e2bc464249b91aed1b4b7f8900_r.jpg?source=2c26e567)

虽然demo到这就结束了，但还是让人期待正式版能探索更多内容。比如打特定结，整个区域打结之类

毕竟，这个游戏的名字“trifolium”是三叶草的意思，而最简单的非平凡结就是三叶结

![](https://picx.zhimg.com/v2-2d3a6d3ace07e12a15c0a319f3bf8e76_r.jpg?source=2c26e567)


---

# 你的低成本爱好是什么？ Geek猫

**Author:** Geek猫  
**Bio:** 独立开发者  
**Avatar:** ![](https://pic1.zhimg.com/v2-d31886317089d7ae204dd4dfc2fb9618_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/3d27494bb8304f3cf75160b9ecd77294  
**Published:** 2025.08.12 15:42:09  
**Updated:** 2025.08.12 15:57:06  
**Question:** https://www.zhihu.com/question/1897959255778231029  
**Question Created:** 2025.04.22 10:25:48  
**Question Updated:** 2025.04.22 10:25:48  
**Votes:** 1876  
**Comments:** 123  
**Type:** answer  

自研产品，做开源项目，没事就肝代码，找一个能让自己安静下来的地方，在合适的地方干合适的事

苹果的airtag 大家基本上都知道吧，市面上有很多平替的，但只能绑定苹果手机上查看，安卓、PC端是查看不了物品的位置信息的，不说记录轨迹和长期当成一个轨迹记录器。其实这就是一个基于手机网关的分布式物联网络，我的想法是，如果能低成本无感记录我物品的轨迹，不受平台限制，也不用流量插卡担心平台跑路，因为可以自建。

于是去年我花了3个月时间，从硬件PCB设计打样，嵌入式固件编写，到验证固件编译和烧录，再到后端代码编写优化，web前端代码编写，前后端接口联调，全栈独立自研，借助GPT等AI工具加速开发进程，一个人独立完成了产品的方案设计、研发到验证测试，最后商业逐步落地和部分开源

目前我做的开源项目[gitee 开源地址](https://link.zhihu.com/?target=https%3A//gitee.com/zhzhzhy/NinjiaTag-backend)或[github开源地址](https://link.zhihu.com/?target=https%3A//github.com/zhzhzhy/NinjiaTag-backend)，可以借助查找网络，跨平台在web端查看历史轨迹和位置，硬件完全采用开源方案，可以自己Diy硬件，焊接起来没几个元器件也很简单。后台的服务器只需要任意一台linux服务器（云服务）甚至树莓派开发板都可以跑起来，定期从苹果服务器获取物品最新的位置信息存入服务器数据库。后端用了nodejs、python3、docker等技术栈，前端基于vue3框架开发，嵌入式硬件采用C语言编译固件烧录，采用低功耗蓝牙芯片，PCB独立设计，并且打样验证。功耗测试大概在10微安量级（5秒广播间隔），意味着一颗CR2032纽扣电池可以撑2年时间，我在原版固件基础做了很多优化，包括功耗和易用性等

前端页面展示：

![](https://picx.zhimg.com/50/v2-91aa31d3f3b30fbb7fdbbbca8a553cfd_720w.jpg?source=2c26e567)




![](https://pic1.zhimg.com/v2-7ef99093402d4cb16be0f9408932e45e_r.jpg?source=2c26e567)




![](https://picx.zhimg.com/v2-74c18e0e0f35214748101ae531ed4897_r.jpg?source=2c26e567)

硬件样品展示：

![](https://picx.zhimg.com/v2-a96e65a6f45ec1170c219332f1a53a7d_r.jpg?source=2c26e567)

烧录过程：

![](https://pic1.zhimg.com/v2-bb9c6ce245fbafebd9247ab687095469_r.jpg?source=2c26e567)

我的开源项目早在一年前已完成，后续都是优化和进行第二代产品的开发，见视频：

[【我复刻了Airtag，并让它能被容易的使用|FindMyTrack项目-哔哩哔哩】](https://link.zhihu.com/?target=https%3A//b23.tv/Wk3dbGS)

开源项目的详细介绍可以看我的文章：

[diy 一个可以长期记录轨迹的 airtag](https://zhuanlan.zhihu.com/p/1938607921039639356)

通过这套系统，至少可以帮助你回忆过去某一天，你的物品去过什么地方，物品丢失之后也能辅助找回，未来可能还会接入Deepseek或者MCP，一句话了解过去一年物品的轨迹行为，是你的私人行李箱旅程伴侣，当然还有更多的应用场景（物品防丢，请合法使用）

如果不想diy硬件烧录，我也提供一些成品，小黄鱼搜用户名 Dijkstra很贪心，我主页会不定期上架一些成品




目前项目开源地址

github 开源地址

[https://github.com/zhzhzhy/NinjiaTag-backend](https://link.zhihu.com/?target=https%3A//github.com/zhzhzhy/NinjiaTag-backend)

gitee 开源地址

[https://gitee.com/zhzhzhy/NinjiaTag-backend](https://link.zhihu.com/?target=https%3A//gitee.com/zhzhzhy/NinjiaTag-backend)


---

# 如何看待大学生逃课的行为？ 分离变量微分方程

**Author:** 分离变量微分方程  
**Bio:** 幻灵法师Tulpamancer  
**Avatar:** ![](https://pic1.zhimg.com/v2-8a16f971404efa096d24000c2bba12f2_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/dc4e31697e4806a6b939530bf036170a  
**Published:** 2025.06.01 17:32:42  
**Updated:** 2025.12.16 15:26:56  
**Question:** https://www.zhihu.com/question/576467131  
**Question Created:** 2023.01.03 11:17:27  
**Question Updated:** 2023.01.03 11:17:27  
**Votes:** 473  
**Comments:** 19  
**Type:** answer  

我们Python逃课的人极多，首先就是老师讲的可能就非常非常非常非常非常枯燥，官方文档写的都比他有意思。才怪。

他真的非常非常厉害👍👍👍👍👍学术能力顶流的。而且他非常信任我，我下课跟他唠两句他就让我这个本科生进他组了，我可不会偷摸说他坏话

而且是大晚课，六点半吃完饭无中间休息上到晚上9点40（甚至我高中都是5点半到8点大晚课，然后8点到10点晚自习，晚课到晚自习中间有休息，晚自习中间还有一次休息），而且机房都是凳子，桌子上是键盘，仰着睡觉也不说趴着睡觉也不是，简直是生理上的折磨。但是这引起了老师的警惕，当人来的少的时候能明显察觉人数不足，并且存在“多级验证”机制，有时候是学习通扫码，有时候是签字点名，但是他有时候会挨个喊“到”。因此有感而发，做了一个简单的数值模拟：

##学生规则：

1、学生会随着上课次数增加倾向于逃课，并且每个人都有倾向于学期中间课程的逃课倾向

2、学生逃课由躺平程度和警惕程度共同决定，两者分配不同的权重。并由激活函数产生最终是否逃课的决策

3、班级中如果有人逃课被抓，则全体人员警惕性增加，被抓的人警惕性大幅度增加。如果无事发生，警惕度会随时间慢慢减少

4、学生们的警惕程度和躺平程度略微有些不稳定，有随机噪声加入




##老师规则：

1、老师点不点名由信任度和班级人数共同决定。信任度直接影响到课验证登记，如果班级人数太少，老师会直接发现并且触发最高等级的验证

2、如果有同学逃课被抓，老师会降低信任度。如果无人被抓，老师信任度会慢慢回升

3、老师信任度加入了随机噪声的影响




![](https://picx.zhimg.com/v2-6abd569c136c29fede3fe9f3cb70e2b8_r.jpg?source=2c26e567)

______________________________________________

#下面是完整代码（初学者可能有些地方编写的比较笨）

之前一时兴起编的，当时也没太好好注释，导致现在好多参数的含义都不记得了

importnumpyasnpimportmatplotlib.pyplotasplt#学生个体模型classStudent:#初始化学生参数:w(躺平程度),v(警惕度),k(躺平程度增长趋势控制参数),m(旷课时间偏好),gamma_v(遗忘权重),delta_v(遗忘常量),# dv_global(被杀鸡儆猴),dv_local(自己就是被杀的鸡),state(逃课状态),caught(被没被抓)def__init__(self,student_id,w_loc=0.5,w_scale=0.2,k_loc=0.5,k_scale=0.2,v_loc=0.5,v_scale=0.2,v_max=1.2,m_loc=15,m_scale=6,gamma_v=0.7,delta_v=0.1,dv_global_loc=1,dv_global_scale=0.2,dv_local_loc=1.7,dv_local_scale=0.05,state=0,caught=0):self.id=student_idself.w=np.random.normal(w_loc,w_scale)self.v=np.random.normal(v_loc,v_scale)self.k=np.random.normal(k_loc,k_scale)self.m=np.random.normal(m_loc,m_scale)self.dv_global=np.random.normal(dv_global_loc,dv_global_scale)self.dv_local=np.random.normal(dv_local_loc,dv_local_scale)self.v_max=v_maxself.gamma_v=gamma_vself.delta_v=delta_vself.state=stateself.caught=caught#更新躺平参数和警惕度defupdate(self,time,other_caught,self_caught,last_v=0.5):self.w+=0.3183*self.k/(1+(time+1-self.m)**2)+np.random.normal(0,0.1)self.v=self.v*self.gamma_v+(1-self.gamma_v)*last_v+(1-self.dv_global/self.v_max)*other_caught+self.dv_local*(1-self.dv_global/self.v_max)+np.random.normal(0,0.05)-0.2*(self.v-(-2))#学生决策要不要翘课deftrancy(self,alpha,beta,bias):play_trunant=1/(1+np.exp(-alpha*self.w+beta*self.v-bias))ifnp.random.uniform(0,1)<=play_trunant:self.state=1else:self.state=0returnplay_trunant#老师个体classTeacher:#t(老师对学生的信任度),t_crit(信任度的转折点),p_max(最大发现概率),k_l(信任度曲线控制参数),eta_t(老师信任度恢复系数),delta_t(愤怒值增长系数)def__init__(self,t=0.5,t_crit=0.4,p_max=0.9,k_l=10,l_th=10,eta_t=0.1,delta_t=0.1):self.t_crit=t_critself.t=tself.p_max=p_maxself.k_l=k_lself.l_th=l_thself.eta_t=eta_tself.delta_t=delta_t#老师决定上课签到方式defcaught_student(self,n_truncy):verify_level=1/(1+np.exp(-self.k_l*(self.t_crit-self.t)))ifn_truncy>=self.l_th:returnself.p_maxelse:returnself.p_max*verify_level#老师参数更新defupdate(self,num_students,n_caught):self.t+=self.eta_t*(1-self.t)-self.delta_t*(10**self.t)*((100*n_caught/num_students)**0.5)+np.random.normal(0,0.3)classCourse:#生成一个班级def__init__(self,num_students,num_course,student_date,teacher_data,alpha=2,beta=8,bias=0):self.students=[Student(i+1,*student_date)foriinrange(num_students)]# 自动生成学生实例self.teacher=Teacher(*teacher_data)# 自动创建教师实例self.num_course=num_courseself.num_student=num_studentsself.alpha=alphaself.beta=betaself.bias=biasself.course_duration=0# 课程进行时间self.truncy_callback=[]self.caught_callback=[]#创建历史回调记录self.probability_callback=[]self.teacher_callback=[self.teacher.t]self.student_wcallback={student.id:[student.w]forstudentinself.students}# 学生个体回调记录字典self.student_vcallback={student.id:[student.v]forstudentinself.students}self.student_pcallback={student.id:[student.trancy(self.alpha,self.beta,self.bias)]forstudentinself.students}# 推进课程时间defprogress_course(self):progress=0whileprogress<=self.num_course:progress+=1n_truncy=0#更新学生到课状态，并添加到课状态记录forstudentinself.students:student.trancy(self.alpha,self.beta,self.bias)n_truncy+=student.stateself.truncy_callback.append(n_truncy)#老师开始上课，决定上课点不点名查人verify=self.teacher.caught_student(n_truncy)self.probability_callback.append(verify)#老师开始点名，更新同学是否被抓n_caught=0forstudentinself.students:ifstudent.state==1andnp.random.uniform(0,1)<=verify:student.caught=1n_caught+=1else:student.caught=0self.caught_callback.append(n_caught)#又有同学被抓了，老师勃然大怒/今天是平安夜，无人被抓other_caught=n_caught!=0#老师参数更新self.teacher.update(self.num_student,n_caught)self.teacher_callback.append(self.teacher.t)#同学们的参数更新forstudentinself.students:iflen(self.student_vcallback[student.id])>=1:student.update(progress,other_caught,student.caught)else:student.update(progress,other_caught,student.caught,self.student_vcallback[student.id][-2])self.student_wcallback[student.id].append(student.w)self.student_vcallback[student.id].append(student.v)self.student_pcallback[student.id].append(student.trancy(self.alpha,self.beta,self.bias))student_date=(0,0.2,2.0,0.2,0.9,0.2,2.0,10,6,0.5,0.1,1,0.2,1.7,0.05,0,0)#w_loc=0.5,w_scale=0.2,k_loc=0.5,k_scale=0.2,#v_loc=0.5,v_scale=0.2,v_max=1.2,m_loc=15,m_scale=6,#gamma_v=0.7,delta_v=0.1,dv_global_loc=1,dv_global_scale=0.2,#dv_local_loc=1.7,dv_local_scale=0.05,state=0,caught=0teacher_date=(0.5,0.4,0.9,10,10,0.1,0.05)#t=0.5,t_crit=0.4,p_max=0.9,k_l=10,l_th=10,eta_t=0.1,delta_t=0.1Course_1=Course(100,30,student_date,teacher_date,4,7,-5)Course_1.progress_course()student_varray=np.array([Course_1.student_vcallback[i+1]foriinrange(Course_1.num_student)])print(student_varray)# 创建折线图fig,((ax1,ax2),(ax3,ax4),(ax5,ax6))=plt.subplots(3,2,figsize=(10,12))# 绘制被抓人数和逃课人数ax1.plot(range(len(Course_1.caught_callback)),Course_1.caught_callback,label='caught')ax1.plot(range(len(Course_1.truncy_callback)),Course_1.truncy_callback,label='truncy')ax1.set_ylabel('Number')ax1.set_title('Classroom Status')ax1.legend()# 绘制老师信任值ax2.plot(range(len(Course_1.teacher_callback)),Course_1.teacher_callback,'g',label='trust')ax2.set_ylabel('Trust Level')ax2.set_title('Teacher\'s Trust Trend')ax2.legend()# 绘制所有学生逃课概率foriinrange(Course_1.num_student):ax3.plot(range(len(Course_1.student_pcallback[i+1])),Course_1.student_pcallback[i+1],alpha=0.4,linewidth=0.8)ax3.set_xlabel('Course Progress')ax3.set_ylabel('Truncy Probability')ax3.set_title('Students\'Truncy Probability Distribution')# 绘制逃课被抓概率ax4.plot(range(len(Course_1.probability_callback)),Course_1.probability_callback,'g',label='Caught probability')ax4.set_ylabel('Caught probability')ax4.set_title('Students\'s Caught probability')ax4.legend()#绘制学生内置参数变化foriinrange(Course_1.num_student):ax5.plot(range(len(Course_1.student_wcallback[i+1])),Course_1.student_wcallback[i+1],alpha=0.5,linewidth=0.8)ax5.set_xlabel('Course Progress')ax5.set_ylabel('Degree')ax5.set_title('Students\'degree of lying flat  ')foriinrange(Course_1.num_student):ax6.plot(range(len(Course_1.student_vcallback[i+1])),Course_1.student_vcallback[i+1],alpha=0.5,linewidth=0.8)ax6.set_xlabel('Course Progress')ax6.set_ylabel('Degree')ax6.set_title('Students\'degree of vigilance  ')plt.tight_layout()plt.show()




#以下是不同结局

![](https://pic1.zhimg.com/v2-251370b0bd30dbba4bb8e56df14d429e_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-04af8e6b68a35e3833a9661ee9615f69_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-008d2b236d71c47e7214a35895da29be_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-2badac2ec0a1e48529a4f07e10ad5a4e_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-b35fb2e93caeaeae2223949324fa93d4_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-1bdbdc70f2c1de1aba953db311f916db_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-47f8b918676db86755b32fbfc7288f95_r.jpg?source=2c26e567)













（Python老师还是很心善的了，其实抓到逃课的同学也会选择相信他们是谎话，告诉他们下次来补一个请假条就可以了。上课提问也无人搭理他，他就算很尴尬也没有选择学习通抽人提问）


---

# AI+高斯泼溅，终将革了PBR的命 DoraFX

**Author:** DoraFX  
**Bio:** 灰色的帝企鹅幼崽  
**Avatar:** ![](https://pic1.zhimg.com/v2-4d50a66afa53603803aac3a2d9793659_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/64eead4d3586eaeea1dde42294a3ecb7  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:** 72  
**Comments:** 14  
**Type:** article  

最近发布了一个 web 飞镖小游戏（[往你讨厌的人脸上扔飞镖](https://link.zhihu.com/?target=https%3A//dart.dorafx.top)），中间换了一次场景方案，这个过程让我对实时渲染的未来产生了一些新的认识。

## GLB 的困境

最初的方案是用 PBR 流程，在 Cinema 4D 编辑好模型后，压缩导出为 GLB，在 Three.js 里加载。

Cinema 4D 毕竟走的是影视流程，即使我把材质砍到只剩 6 个，预览窗口下已经简陋得不像话，结果拿到 WebGL 环境里，始终无法正确还原。

![](https://pic3.zhimg.com/v2-3efc219d8d3a79ab2578e2f8671cc9bc_r.jpg)

没办法，这种场景实在没法用，只好四处找别的方案，就这样找到了高斯泼溅。

## 不是传统高斯泼溅，是 AI 生成世界

说到这里有必要先澄清一个概念。传统 3D 高斯泼溅（3DGS）的工作方式是：拍摄大量多角度照片，然后漫长地训练，最终重建出一个场景。这套流程复杂，耗时动辄几小时。但是有了AI的加持就不一样了。

World Labs 的 Marble 走的是另一套逻辑：上传一张图片，它会生成全景视图，经过中间处理，最终输出一个完整的高斯泼溅世界。整个过程五分钟搞定。这不是用照片重建场景，而是 AI 直接生成世界，高斯泼溅只是它选择的输出格式。

![](https://pic1.zhimg.com/v2-8358ba05d584832c20d589f1b8d99b0a_r.jpg)

得益于近些年来高斯泼溅的迅速发展，开源工具层出不穷。我把生成出来的.ply文件拿到[superspl.at](https://link.zhihu.com/?target=https%3A//superspl.at/editor)里，清理了一下多余的面片，体积压缩到 27MB，随后直接接入 Three.js，引入@sparkjsdev/spark的SplatMesh，配合原有 GLB 管线做成可切换双模式。光线、氛围、空间感全部已经在里面了。


![](https://pic4.zhimg.com/v2-f773c1912436ee962cdfec78a939546f_r.jpg)

相较于原有方式，高斯泼溅不依赖任何实时光照计算，更不需要 Unity、Unreal 这类重型引擎。纯 web 就可以使用，性能占用极低。

## PBR 不会消失，但角色会变

这次开发过程让我认真想了一个问题：PBR 作为场景级视觉表达方式，会不会正在走向退位？

我个人的看法是：PBR 会从不得不使用的默认方案，变成只有在需要物理交互时才会动用的精密工具。类比一下：就像汇编语言，没有人说它死了，但今天没有人会用汇编写一个完整的应用。只有在极少数场景才需要它。

PBR 的未来可能也是这条路未来大规模场景的构建管线，可能会演变成这样的分工：

- AI 生成的视觉表示（高斯泼溅 / 神经辐射场）承担绝大多数场景的视觉呈现，真实感在生成阶段就已经烘焙进去了，不靠实时计算挤出来。
- 低面模型退化为纯功能性基础设施，只负责碰撞检测、导航网格和游戏逻辑。
- PBR 只保留在少量需要精确交互的物体上——可以被拾取的道具、可以被破坏的结构、需要骨骼动画驱动的角色。

## 更远处的想象

AI 颠覆一个行业，从来不是比谁爬山爬的快，而是直接坐电梯直达山顶。

Marble 就是这个逻辑：没有多图拍摄，也没有训练，只要上传一张图，五分钟就能拿到可部署的 3D 世界。传统 3DGS 花在采集和训练上的那些时间，在它这里根本不存在。

影视行业也一样。真正能打的 AI，没有去卷 AI 建模、AI 贴图、AI 动画、流体解算、VDB、离线渲染优化……而是直接生成视频。至于视频会闪烁的顾虑，那是两年前的事了。

顺着这条路继续走下去：只要是二进制，就没什么生成不了的。 静态图像已经验证了，视频正在验证，3D 场景是下一个。高斯泼溅本质是一堆浮点参数的集合，和图像的像素在结构上没有本质差异，生成模型完全可以学会直接输出。

那时候，游戏场景制作的门槛会低到和今天写一段 prompt 生成一张图没什么两样。传统渲染管线花了几十年建立的技术壁垒，不会在同一个维度上被突破，而是会被绕过去。


---

#  独元殇

**Author:** 独元殇  
**Bio:** www.ccgxk.com 站长（永不用AI写文章，只手打）  
**Avatar:** ![](https://pic1.zhimg.com/v2-4764145505b1580cae0589fc69cc8c7e_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/59439dff1f8f48c5c4cda11829ea5e8b  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:**   
**Comments:** 29  
**Type:** pin  

[object Object],[object Object],[object Object],[object Object],[object Object]


---

# 你发现过哪些奇奇怪怪的有趣网站？ 独元殇

**Author:** 独元殇  
**Bio:** www.ccgxk.com 站长（永不用AI写文章，只手打）  
**Avatar:** ![](https://picx.zhimg.com/v2-4764145505b1580cae0589fc69cc8c7e_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/59439dff1f8f48c5c4cda11829ea5e8b  
**Published:** 2025.10.18 00:49:37  
**Updated:** 2025.12.29 02:45:16  
**Question:** https://www.zhihu.com/question/389957213  
**Question Created:** 2020.04.23 10:51:52  
**Question Updated:** 2020.04.23 10:51:52  
**Votes:** 1132  
**Comments:** 180  
**Type:** answer  

一个秒进秒渲染的 3D 网页，是一个图书馆，里面放着 30 万本书！第一第三视角切换，跟侠盗猎车手 CS 一样。

![](https://picx.zhimg.com/v2-03c22bf8e4f071690ab499502a1c3822_r.jpg?source=2c26e567)

运行非常流畅！自由度非常高，连续蹦，就会飞起来，跟小鸟一样哈哈！

![](https://pic1.zhimg.com/v2-588e8a2bfdd52fc8669531c7e1fcd7f7_r.jpg?source=2c26e567)

![](https://pica.zhimg.com/v2-79983392b7096df689f35312a190c765_r.jpg?source=2c26e567)

可以作为一个漫步器，发呆的时候去逛逛。性能压力极小，运行很流畅！我这 17 年的烂 MACBOOK 都健步如飞！

![](https://picx.zhimg.com/v2-e84363a9899d0594bb22d3d56022adc9_r.jpg?source=2c26e567)

性能压力极小，使用的是 openworld.JS 引擎，不是 three JS 也不是 babylon.js，是原生使用 webgl 写的 。

看起来目前是个半成品，未来里面会装修的很好看吧，会放一些好玩的东西，把这 30万 的资源给占满哈哈。

目前是开发版，所有文件都是完整的源码，所有 JavaScript 代码都写满了注释结构非常的清晰，我这个前端看了十分钟就把结果大概了解了。很适合做二次开发，建造我自己心里的三维建筑，甚至我把我学校给复原起来。

![](https://pica.zhimg.com/v2-978db8203e670123e3079aad29069946_r.jpg?source=2c26e567)

[https://ow.ccgxk.com/demo/house?logicadd=1](https://link.zhihu.com/?target=https%3A//ow.ccgxk.com/demo/house%3Flogicadd%3D1)

操作方式如下：

WASD 前后左右。

鼠标左键，进入第一视角，右键，进入第三视角。

shift 疾跑，能跑的很快。当然，Q 也可以，更方便一点。（我觉得这个才符合人体工程学，小拇指按 shift 太难受了）

空格是蹦，E 也是蹦，同样的道理，我觉得 E 键更加的科学！

连续蹦就是飞了！

V 可以切换视角，远景、近景等等。

最最最关键的F，冻结在空中，可以用于看风景，或者看清书上的字了~

其他的展示没有了。

单击鼠标左键，会出来一个调整位置的对话框，目前这个是方便开发用的，因为这个页面的前身就是一个三维在线建筑设计器！

哦哦哦对了对了，差点忘了我的天！

那个墙根儿的楼梯怎么上！按 Q 键哦，按 Q 键，就加速了，物理引擎一识别，就把你送上去了！

2025年12月29日02:44:39 更新：

[「开放世界区」浏览器三维世界项目，一个临时小 demo，多建筑 LOD 机制](https://zhuanlan.zhihu.com/p/1988797427696828515)

最新的 demo ，能根据主角的位置，来切换不同的模型。


---

# 在游戏中亲手搭建自然数大厦？Boss 战居然是证明 2+2=4？来玩 Natural Number Game 吧！ wYYSZL

**Author:** wYYSZL  
**Bio:** 成分复杂。  
**Avatar:** ![](https://picx.zhimg.com/v2-948a4b41bbb931ea21bcfe38c24947ed_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/115c896355c177d806fb0153297f31e4  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:** 66  
**Comments:** 4  
**Type:** article  

你有没有想过，利用最少的元素，搭建出已有的数学大厦？

你有没有想过，用代码的方式，一步步完成数学证明？

你有没有想过，数学证明也可以像解谜游戏一样，一关一关打过去，最后成就感爆棚？

如果有，那么 Natural Number Game（NNG）就是你最好的选择！

## 什么是 NNG（Natural Number Game）？

Natural Number Game（简称NNG）是一个基于定理证明器 Lean 的交互式教程。

但别被这名字吓到，它本质上就是一个打怪升级的游戏：

- 每一关是一个待证明的数学命题。
- 你需要输入“战术”指令（比如 rw、induction）来引导系统完成证明。
- 证明成功时，屏幕会出现 “Level Completed!”，成就感拉满。

游戏从最基础的开始：给你0和一个叫succ的东西（就是“后继”，相当于“加一”）。游戏的目标超级简单：证明自然数的基本性质，比如加法结合律、乘法分配律等等。

但你可能会问：这些定理不是小学就学了吗？有什么好证明的？
——这正是游戏的精髓！它让你从皮亚诺公理（几条最基础的假设）出发，像搭积木一样，一步步构建出整个自然数算术体系。你会发现，原来那些习以为常的结论，背后隐藏着如此精巧的逻辑。

## 你刚才说到 Lean 了吧？什么是 Lean？

Lean 是交互式定理证明器，是形式化证明的工具之一。

## 为什么要用 Lean？

数学证明一定是要严谨的，但怎么才能严谨？

有人说这不简单？一步一步写下去、一步一步推公式就行了。

某种程度上说，确实。但问题是，你要“一步一步”详细到什么程度？每一步都写最基础的证明？那恐怕得累死。还是说来点“显然”“平凡”什么的？要数学证明到处是显然，恐怕出大问题。

![](https://pic2.zhimg.com/v2-edb8a51eb81474ef154b184c7be41347_r.jpg)

这样一来，自然语言定理证明总是容易不严谨或者看不懂的。

那 Lean 或者其他定理证明器就可以解决这个问题。这些语言形式化了所有定理和推理逻辑，保证每一个推导都是严谨的。而且，它还把各种已有的定理封装成可直接调用的定理库（“类型”），想用时直接“调用”，也就解决了第一个问题。

（当然这种东西写起来肯定还是很麻烦的，不过也许有一天 LLM 可以帮我们把自然语言写成 Lean 呢）

## Lean 还有啥好处？

- 提高效率：Lean3 之后的版本中，加入了 decide、simp 等“策略”，可以帮你把繁重的重复工作做完。
- Lean 是交互式的：在 Lean 中，你先告诉它要证什么，然后每写一步，它都会告诉你现在的成果是什么。

不过要知道，Lean 不是自动定理证明器。也就是说，你不能甩给它一个命题，然后坐等它自己搞定。

## 为什么值得一试？

- 游戏化学习，零门槛上手：游戏分成了好几个世界，每个世界有若干关卡。第一关教你如何用 rw（重写）策略完成证明，手把手带你入门。随着关卡推进，你会学到 induction（归纳法）、simp（简化）等证明技巧，难度曲线非常平滑。
- 体验“数学建构主义”的快感：当你第一次用归纳法证明出 add_assoc（加法结合律）时，那种“我居然从零造出了数学”的兴奋感，简直无法形容！游戏里每一行代码都会实时反馈是否正确，就像在玩编程解谜。
- 重新认识那些习以为常的符号：比如 ≤ 和 ≠，你真的理解它们背后的逻辑吗？在 NNG 中，你会遇到这些符号的定义和证明——比如证明 2 ≠ 3，或者证明 a ≤ b 意味着存在某个 c 使得 a + c = b。你会发现，原来这些日常使用的符号，在数学底层有着如此精妙的定义。
- 适合各种背景的人

- 如果你是数学系学生，想提前接触形式化证明，这是绝佳的入门材料。
- 如果你是程序员，对类型论、函数式编程感兴趣，Lean 语言本身就能让你大开眼界。
- 哪怕你只是喜欢逻辑推理的“解谜爱好者”，也能在这里找到乐趣。

5. 完全免费，网页即玩：

https://adam.math.hhu.de/#/g/leanprover-community/nng4

[Natural Number Game](https://link.zhihu.com/?target=https%3A//adam.math.hhu.de/%23/g/leanprover-community/nng4)

无需注册，打开浏览器直接开始！

## 所以，NNG，启动！

## 0.快速上手：

进入游戏后，你会看到如下界面：

![](https://pic4.zhimg.com/v2-9722206476c751f111642d3e39f500a9_r.jpg)

左边蓝色区域是教学提示，右边是命题、策略等信息。先不管细节，点击第一关！

等等，如果你不喜欢英语，可以点击右上角菜单 → Preference 修改语言。

## 1、Tutorial World（1）

点击教程世界的第一关：

![](https://picx.zhimg.com/v2-7f83ee453723922963db654947ceb697_r.jpg)

它会告诉你，“策略”是要用以证明的工具，点击“开始”。

![](https://pica.zhimg.com/v2-5f02166a62df062f079200ea26ce55c4_r.jpg)

第一关它教给你rfl策略，也就是，等号两边如果完全一样，那么我们就直接rfl完成证明，相当于一声“证毕！”。

我们敲下rfl：

![](https://pic1.zhimg.com/v2-90b077b56ea981b9ba77ec664a7fd7c4_r.jpg)

哈哈！“Level Completed!”。这时左边还会弹出一些提示。

对了，我们看到现在是交互界面的，只能修改当前编辑的代码。你还可以点击右上角的 </> 选项换成“编辑模式”的，方便修改前面的代码。如图：

![](https://pic3.zhimg.com/v2-0600462f8cdcd03ae6e1d1de73bfd5f8_r.jpg)

这样，下面就是你的当前目标和各种对象什么的。

下一关：

## 2.Tutorial World（2）

这关来学习rw策略，也就是 rewrite（重新书写）。

![](https://pic3.zhimg.com/v2-39ecea8919c6c9045eb27c9f1f26d778_r.jpg)

这时你看到，「对象」里面有一个h: y = x + 7，这称为“假设”，或者简单理解为目前已知条件。

它又告诉你一个使用rw的方法：rw [h]，就是把Goal中所有和h左边相同的部分替换为右边。

尝试：

![](https://pic1.zhimg.com/v2-1adcd2097617c2f7c229225a3dad7fa6_r.jpg)

这时我们看到，“目标”的左右两侧相同了。那么，rfl。

![](https://pica.zhimg.com/v2-74fd7367f4b32a687be07345ad9d906c_r.jpg)

Level Completed! No Goals!

有两点要说的。

第一是，如果你想查看到某一步之后的结果：

如果是交互模式，那很简单，它会直接显示：

![](https://pic2.zhimg.com/v2-a065a23afd9449e221f7127700f99a57_r.jpg)

如果是编辑模式，你可以把光标移到某个地方，它显示的就是截止光标处的结果：

![](https://picx.zhimg.com/v2-af6e692f08ef494bf8cee8fcf5d48863_r.jpg)

第二个是：右边的策略是可以具体点开的：

![](https://pic2.zhimg.com/v2-9f564efc3285ba0c552c73e25d48c071_r.jpg)

它会显示rw策略的具体的介绍以及一些变种，当然，现在有些还看不懂，别着急。

点击 Next：

## 3.Tutorial World（3）

这关来介绍数字。

![](https://pic1.zhimg.com/v2-fa3ec7c1da83ac5d2f7f5559e4f955c2_r.jpg)

它定义了0：是一个自然数。

定义了「后继」：n 是自然数，n 的后继（记作succ n）是自然数。

利用“后继”定义1、2等等。也就是：1是0的后继，2是1的后继...

很像皮亚诺公理是吧。

这关来证明2是0的后继的后继。提示说我们尝试rw [two_eq_succ_one]来破拆2。

two_eq_succ_one，看样子表示的意思是“2是1的后继”，这样rw，看起来是可以像利用策略一样利用“定理”。

我们来看看这个东西里面写得是什么，点击two_eq_succ_one：

![](https://pic4.zhimg.com/v2-826be05b685cc3795e7ab0ed369ae843_r.jpg)

啊看懂了，相当于我的“对象”里面有一个two_eq_succ_one : 2 = succ 1，rw就把目标改成succ 1 = succ (succ 0)了。

rw：

![](https://pic1.zhimg.com/v2-e07f9b0d053302e73682f57ef0923ac6_r.jpg)

我们发现还有one_eq_succ_zero，果断rw：

![](https://pic2.zhimg.com/v2-7ec8ae780bc13f52e908c81240716b43_r.jpg)

rfl。

你发现你连续rw了两次，你可以把它合并（就像提示里那样）：

![](https://pic3.zhimg.com/v2-f39b2d057cfebdf35d92bd1223367ad2_r.jpg)

你喜欢压行？可以！用;在同一行分隔两个命令：

![](https://picx.zhimg.com/v2-db437b2f1e7da9fe10de7e16ad0e279f_r.jpg)

## 4、Tutorial World（4）

教程世界还有 5 个关卡，通过四个关卡的学习，你将能够证明这一章节的 BOSS：2+2=4。

## 5、Addiction World、Implication World...

通过了教程世界，你会去探索“加法世界”“推理世界”“乘法世界”等等。

最终，当你重新认识了替换、应用、归纳的策略，证明了加法乘法运算律、2+2 不等于 5、等式的种种性质之后，你完成了 NNG 的所有关卡，并且，看到了：

![](https://pic1.zhimg.com/v2-d1acc9950f1365aa8f61afd490a9f954_r.jpg)

那么，你就重新认识了自然数，重新认识了逻辑。继而，重新认识了数学。

（当然，不要问我为什么 Power World 最后一关没有过，因为它让你证明费马大定理。考虑到这个游戏最多只能输入 1000w 个字符，地方太小，写不下。）

![](https://pic4.zhimg.com/v2-a0f57d075817c7c8b9f8091a14912585_r.jpg)


---

# 马斯克预言 2026 年底编程或将全面自动化，AI直接写二进制，如何看待这一论断？这在技术层面可行吗? 酱紫君

**Author:** 酱紫君  
**Bio:** QQ群1014125  
**Avatar:** ![](https://picx.zhimg.com/v2-8bec9d5bd4a7b338b2b91d0ce1e70ee3_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/a74574db96f2d0e717fc410bf90dd150  
**Published:** 2026.02.16 01:10:08  
**Updated:** 2026.02.16 01:10:08  
**Question:** https://www.zhihu.com/question/2006370013720897348  
**Question Created:** 2026.02.15 14:11:27  
**Question Updated:** 2026.02.15 14:11:27  
**Votes:** 342  
**Comments:** 51  
**Type:** answer  

AI 可以写汇编和 AI 可以端到端生成二进制是两码事。

写超长汇编努努力还能做到，输出可执行二进制在 Transformer 框架下是绝无可能的事情。

编译的最后一步是调用汇编器，将汇编代码文本翻译成机器码，并按照特定格式打包成 Object 文件，在Linux中以.o结尾，Windows 中以.obj结尾。

这个目标文件也不是最终的可执行文件，它只是一个中间产物，包含了编译后产生的机器码、数据以及一些元信息。

元信息包括代码段（.text），数据段（.data, .bss），符号表（Symbol Table），以及最重要的重定位表（Relocation Table）。

重定位表记录了代码中哪些地方的地址是不确定的，需要链接器在未来进行修正。

比如调用_printf，可_printf的地址是未知的，重定位表会标记call _printf指令需要被回填。

然后是链接器的工作，链接器将多个目标文件（.o）以及程序所需的库文件（libc.so等）黏合在一起，创造所谓的可执行文件。

链接器至少需要两遍扫描，第一遍收集所有符号信息和地址，第二遍根据收集到的信息进行地址回填。

这个工作方式就和 Transformer 架构八字不合。

Transformer 是一种自回归模型，生成内容的方式是线性的、单向的，逐个Token进行的。

在生成第![](https://www.zhihu.com/equation?tex=N)个Token时，它所有的决策依据都来自于它已经生成的前![](https://www.zhihu.com/equation?tex=N-1)个Token。

它对未来第![](https://www.zhihu.com/equation?tex=N%2B1)个及之后的 Token 是完全无知的。

可是二进制文件却要求前向引用与全局一致性。

一个 ELF 文件的头部必须包含指向文件后部几MB之后的节头表的精确字节偏移量。

那么如果要让 Transformer 生成一个 ELF 文件，那么当它在生成第0个字节时，它必须已经知道整个文件的完整结构，包括所有代码段和数据段的总长度，以便计算出节头表在文件末尾的准确位置。

但是，自回归机制决定了它在生成头部时，对后续内容一无所知，不可能未卜先知知道这个位置。

所以这是原理上的问题，不是算力上的问题。

然后 Tokenization 也会有问题，Transformer之所以高效，得益于它不把文本看作是单个字符的流，而是将其切分为有意义的子词（Subword），或者叫 Token。

可是面对二进制文件时，Tokenization 机制完全失效，二进制文件都是由0x00到0xFF这256个字节值组成的原始数据流。

从本质上来说，二进制就没有词的概念。

如果将每个字节视为一个 Token， 一个10MB的程序，序列长度就是1000万。

目前没有任何 Transformer 能处理如此之长的上下文窗口，计算复杂度和内存消耗会呈指数级爆炸。

要不然就是将多个字节组合成一个Token，但是如何组合呢？

按2字节、4字节？

不管怎么划分，这种机械的划分都会割裂指令和数据，产生大量无意义的 Token，彻底破坏二进制流的内部结构。

所以最后就是几个结局：

- 假装自己没说过这话。
- 宣布汇编和二进制其实没区别，最后还是用了人类手工的汇编器，链接器。
- 连汇编都没搞定，调用人类的汇编器也没用。

这还没加上调试问题，安全问题，ISA 复杂性难题。

我觉得 AI 可能最后确实不需要写高级语言，可以直出汇编，可能没 2026 那么早，但是也不会晚于 2030。

然而，现在的古老汇编面对多样的 ISA 是很无力的，x86、ARM、RISC-V、GPU、NPU，指令集各不相同，架构的抽象也和以前完全不一样了，这方面就算是 LLVM，MLIR 也已经完全落伍了。

异构计算时代需要新的异构汇编，我就参考了 SPIRV 搞了一套新的跨平台的汇编器，可以关注一下：

[https://github.com/nyar-vm/project-gaia](https://link.zhihu.com/?target=https%3A//github.com/nyar-vm/project-gaia)


---

#  rq cen

**Author:** rq cen  
**Bio:** 清华基科，巴黎综合理工硕士，专注分享知识与学习干货  
**Avatar:** ![](https://pic1.zhimg.com/v2-91f247a720149571f939d997e5404dd1_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/ee7c4d24982ed163415dd3c0f29b44f5  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:**   
**Comments:** 90  
**Type:** pin  

[object Object],[object Object]


---

# 介绍我开发的All in one学习流软件并招纳种子用户 余命数

**Author:** 余命数  
**Bio:** 学生->个人主页https://asaka.moe   
**Avatar:** ![](https://picx.zhimg.com/v2-2128f09689d37adad7f14144948c2dff_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/772aba33cdc0ea9eefb025921675491a  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:** 140  
**Comments:** 56  
**Type:** article  

![](https://pic2.zhimg.com/v2-e4a143c38efb2445b56f086966c81a5d_r.jpg)

## 最新版本

[半个月过去了，发下Yaru的第二个版本](https://zhuanlan.zhihu.com/p/2006532649729161104?share_code=MxbcwWLrEKZv&utm_psn=2006587826259660875)

## 软件介绍

开发本软件的想法起源于去年（2025年）年底，最初的想法是这样的：

> 现在的中学题库软件，比如组卷网、作业帮、小猿搜题等，大多数题目都是孤立的，而且烂题和好题以相同的方式呈现。这就催生了许多比如“组题讲义”，这种讲义的题大多是发布者的精选，题目之间有练习，能通过刷题建立对某个模块的认识。而我的想法很简单：制作题目图谱，把每个题目都纳入关系网中，比如某一道题是某道题的变式题、某两道题的组合题，等等。

但是之后，我了解到了Math Academy，觉得这是一个不错的点子，于是我打算仿照MA的点子来制作一个类似的学习软件。之后，我觉得Notion和RemNote以及Anki都挺好用，于是最终成了这个All in one的软件。

以下是软件的基本信息：

- 软件名称：Yaru（灵感来源Linux发行版Ubuntu默认主题Yaru，这也是为什么软件的主色调是橙色，同时也是日语中to do的音）
- 软件官网：https://www.yaru.io
- 软件性质：免费增值软件
- 支持中、英文
- 基于Flutter开发
- 全平台（Android、iOS、Windows、Linux和Web）

所以，目前开发了一个多月，希望能在本月底（2026年1月）发布本软件的预览版，尝试看看这套逻辑有没有人愿意用。并且吸收一些意见和建议，做一些功能和需求上的调研，再继续，免得闭门造车。

**当然，无论这款软件最后成功抑或是失败（无人问津），也能说这是我接触移动开发（从最初简单的androlua+开发的玩具应用，到最后学习Dart转Flutter开发）的第一个正式拿得出手的软件，希望能借此积累经验，也算是我的一次倾尽心血的作业吧。**

## Q&A

以下是一些常见问题：

## Q：用一句话描述你们在做什么？

A：我们在开发一款面向所有人，尤其是学习者的一站式学习工作台。

## Q：具体要做什么？

A：Yaru是一个整合碎片化学习工作流的 All-in-one 软件。目前学生需要在 PDF 阅读器、笔记应用、抽认卡（Anki）和AI之间切换。Yaru 使用 Rust 和 Flutter 构建，将这些整合到一个高性能平台中。它具备上下文AI辅助、更智能和现代的PDF学习功能、增量阅读、更友好的闪卡（包括可视化制作模板、AI辅助制作等）、题库试卷库等模块。

## Q：现在开发的团队有多少人？具体如何？

A：目前开发团队有两人。由我负责编写软件的内容（无论是学习课程、图书馆里的书籍、记忆闪卡还是其他），同时我还负责将许多公开的学习资源收集起来，转换成软件支持的格式，方便用户开箱即用。同时，我还负责Flutter开发，主要的前后端功能由我负责。

另一人主要负责处理软件内的Rust以及TypeScript后端部分。网站部分由Gemini负责开发，因此并没有专门负责网站开发的人，况且我们的网站也很简单，不需要太多的关注。

## Q：为什么要选这个想法？

A：很简单，因为我自己也是一位学生，也希望有这样一款软件，可以解决自己的需求。

并且我认为，目前甚至有一些网课班的老师，在使用Gemini来解答题目。于是我在想，如果一位学生花了几千块钱报班，最后甚至讲义和作业答疑都是Gemini和ChatGPT甚至DeepSeek来完成的。为何我们不开发一款成本更低，让更多人都更方便的学习软件呢？

同时，我自己也编写了一本关于中学数学的书籍：[中学数学之旅十一月新书稿（全五卷）](https://zhuanlan.zhihu.com/p/1977408006607114781)。因此，开发这样一款软件，我也有能力自己填充内容。

## Q：有什么新东西？

A：我认为最新的东西就是把这些功能放在一起，并且做好他们之间的联动，也就是所谓的workflow。除此之外，我们还有更现代的题库、增量阅读、闪卡集成等。

## Q：有什么竞品？

A：诚然，论做笔记，有Obsidian和Notion；论记忆，有Anki和Supermemo；论AI，直接打开Deepseek开始聊不更简单？论题库和试卷库，组卷网、作业帮有何不可？论网课，洋葱数学和各种网课平台也能平替。

我认为，之所以能让用户费心思多装一款本软件。在于，我们提到过的All in one学习工作流，简而言之就是，不需要切换软件，在一个软件内就能完成，你装多个软件才能完成的东西，而且更高效。除此之外，我们还有：

- 同样的块（Blocks）式编辑器；
- 支持本地储存库，自定义同步；
- 更友好的闪卡模块，可视化闪卡模板制作器，更便捷的闪卡分享市场，集成AI制卡、改进等功能，并与笔记和学习以及图书馆模块深度融合；
- 题目谱系，集成练习&刷题功能；
- 内容的自生产能力，尽力让学生避免再一千份质量参差不齐的资料里寻找，到处问“这份资料如何”，我们希望一份资料足矣。让学生减少查找资料的过程，本身就有价值。日后我们也会和其他人合作来进一步补充；
- 更友好的隐私政策，不需要绑定手机号、实名认证（我们会在内容审核上下功夫）；
- 原生的更友好的增量阅读功能。支持结构化课程和从图书馆选书学习两方式自选；
- 界面简洁，没有恶心人的广告，这是一个“没有短视频”的学习软件；
- 等等。

## Q：你们怎么赚钱？

A：我们采用免费增值模式，所有功能免费，用户只需要为内置AI的使用、云同步等功能付费。就连这些功能本身也有极大的免费配额（主要是为了防止滥用），且这些功能用户完全有权使用自己的AI和自己的云盘进行同步。对于那些经由合作上传的资料，用户需要为之付费。

且我们支持捐赠，希望能以“要饭”要来的资金来覆盖投入的成本。**总而言之，我们不追求盈利，但我们追求收支平衡，并避免大规模亏损。**

## Q：目前进展如何？

A：我们已经基本实现本软件设计计划的核心逻辑，即阿尔法版，或预览版，有待本月底发布，并尝试招纳种子用户使用。测试我们的设想是否合理，是否有人真的会用，还是无人问津。

目前，有赖于之前卖无水印书稿以及四处要饭的收入，我们已经有能力为用户免费提供云同步等功能，且有很慷概的配额。同时，用户也能免费使用Gemini 3 Pro、ChatGPT 5.2等模型（在被整合进的各种模块里），所有的用于制卡等的DeepSeek、Minimax模型都是免费的，无限制使用，用户不需要一分钱。

这也是我们最初设想的，以最低的成本面向所有人，同时也就不会有人问“为什么我不直接用Deepseek？”，很简单，因为我们免费、而且更方便。这就是全部。

## 软件截图

## 首页

![](https://pic3.zhimg.com/v2-e41756545c94eaae80dcba2b28a08300_r.jpg)

![](https://picx.zhimg.com/v2-e4a9a61141ccdd64d8d890e76dc9e939_r.jpg)

![](https://pic3.zhimg.com/v2-b8efb5f1c36e64084af71aa306ed0ce8_r.jpg)

![](https://pic2.zhimg.com/v2-3d5904a076b9c4ba38e5d77735075c85_r.jpg)

## 学习模块

![](https://pica.zhimg.com/v2-fb139bab0b71ed2156c07f0506357244_r.jpg)

![](https://pic1.zhimg.com/v2-027e64774d5bd18cbe5eadeed249c8b2_r.jpg)

![](https://pic2.zhimg.com/v2-d98362d432adacf5f769a99382b068dd_r.jpg)

![](https://pic3.zhimg.com/v2-e093c81d46f5d3fe349bfc14f08c8ff0_r.jpg)

![](https://pic3.zhimg.com/v2-45e7223db8310bd3d83a80caa4a374e4_r.jpg)

![](https://picx.zhimg.com/v2-38d5a7810cce150012d8411c0e71ad8f_r.jpg)

## 记忆模块

![](https://picx.zhimg.com/v2-c05da9864f85d112197e357755403311_r.jpg)

![](https://picx.zhimg.com/v2-e535849b611bf56204ffad2e34c89ea3_r.jpg)

![](https://pic3.zhimg.com/v2-ec6ab49036db601b8ca94801117e4d0a_r.jpg)

![](https://pic1.zhimg.com/v2-4e6cc00d9cd50e96a50338eba8f3873c_r.jpg)

![](https://pic2.zhimg.com/v2-2fd1dc2399e48c0460eabd135121b637_r.jpg)

![](https://pic1.zhimg.com/v2-84f8d63d6b9e2ef1912ee809c93c6522_r.jpg)

![](https://pica.zhimg.com/v2-00f31c8876bee313aaa87c2d5a2c814c_r.jpg)

![](https://pic3.zhimg.com/v2-2b4bd6006058629dfe89f24893618b7e_r.jpg)

![](https://picx.zhimg.com/v2-e535849b611bf56204ffad2e34c89ea3_r.jpg)

## 图书馆

![](https://picx.zhimg.com/v2-407db0675e8821bb63e7aa0c9d03f05f_r.jpg)

![](https://pica.zhimg.com/v2-133949b4c6347a23d0b4210721456704_r.jpg)

![](https://picx.zhimg.com/v2-313934b4551da7fdd77818e66129e729_r.jpg)

## 工作室

![](https://pic4.zhimg.com/v2-68deae6557e9bccd78c82ef11b3a52e5_r.jpg)

## 个人中心

![](https://pic4.zhimg.com/v2-9a233b549c0f1e5bdb334acb4f7f19fb_r.jpg)

![](https://pic2.zhimg.com/v2-88efec6335370d4e34a812c364dd86fd_r.jpg)

## 笔记

![](https://pic1.zhimg.com/v2-c9cd3113756b4ee5079d522d87f596c4_r.jpg)

## 知识库

![](https://pica.zhimg.com/v2-c8d52657a04be4a8161e628045a02068_r.jpg)

## AI聊天（单独页面）

当然，目前这里还是挺简陋，以后会加更多功能，比如智能上下文和引导学习。当然更多的是更深入的整合进每个模块里，而不是单独这样聊天。不然确实不如直接开软件聊了。

![](https://pic1.zhimg.com/v2-0447d91e69d8fe0558accaede9511568_r.jpg)

![](https://pic1.zhimg.com/v2-3e1ba1b3b35b587a174a1d7802fb231a_r.jpg)

## 题库

![](https://pic2.zhimg.com/v2-d3354b3d94168adf034561ceddfb3b7b_r.jpg)

## 还有更多..

## 种子用户

种子用户指的是软件的第一批用户，他们极具探索精神，并且愿意忍受第一个版本的各种不完善的地方，愿意分享自己的看法和意见。

**目前是计划在本月底发一个预览版**，看看方向对了没，还是无人问津，以便调整方向或者是及时止损。同时，我也希望可以邀请一些用户来作本软件第一批的种子用户。

由于我自己也是个学生，我也什么东西可以回报种子用户，但种子用户可以获得一个软件内的勋章和头衔———如果你喜欢的话！还会被记录在软件的致谢名单上。

种子用户需要做：

- 帮忙抓虫，通过各种奇怪的手段让软件崩溃；
- 使用软件；
- （如果可以的话）提出意见和你的需求，以及想法；

简单来说，就是评价这个软件的方向如何，会不会有人愿意用，避免无人问津。

## 尾声

感谢阅读！

![](https://pic2.zhimg.com/v2-e4a143c38efb2445b56f086966c81a5d_r.jpg)

最后再介绍一下我们的logo和口号。logo是取Yaru的Yr两字，[]代表矩阵，即[Yr]，我们的口号是Everything you need to learn anything，代表这个软件就像一把瑞士军刀，帮助你学习任何东西！


---

# 写了一千页的书，还是想放弃了（兼发布最后一个版本） 余命数

**Author:** 余命数  
**Bio:** 学生->个人主页https://asaka.moe   
**Avatar:** ![](https://picx.zhimg.com/v2-2128f09689d37adad7f14144948c2dff_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/772aba33cdc0ea9eefb025921675491a  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:** 704  
**Comments:** 85  
**Type:** article  

## 前言

本书的起点源自我在高中三年学习数学期间使用Obsidian软件记的笔记（但是这本书是用\LaTeX 编的，不要再重复问我问题了），写这本书的初衷很简单：我觉得市面上没有一本教辅可以真正满足我。

简而言之，我观察到目前大部分教辅的形式，要不就是总结加一堆例题的形式，有些比较良心的教辅，无非就是在解析和答案上多下点功夫，多讲点思路。或许逆向工程确实是学习的最好方法之一，但是我总觉得缺点什么。直到我读了Springer出版社的《初等数学之旅》之后，我突然有感而发，为什么国内就没有一本这种能从初中一直讲到本科数学的大部头书呢？于是我写了这本书。

在《初等数学之旅》里，我感到的不是题型+例题的编排方式，而是很好体现了“例题是理论的延伸”，目前市面上很多的教辅编排例题，本质上是为了让学生记忆题型，用编程语言的话来比喻，也就是做Pattern Matching。看到一个类似的就套上去，也就是所谓的“背下这个例题的解法，考试遇到类似的就套进去。”这就导致整本书很“堆砌、套路、碎片化”。

不可否认，这种模式对于应试很有效，毕竟高考数学，说白了来来回回就考那几种题型，高考数学本质上就是一个封闭系统，而且它的模式熵还在不断降低。

也就是说，高考数学的知识边界的刚性，也就是所谓的高考数学考纲（据说现在没有了，但还是作为一种习俗性约定），就规定了高考数学本质上是一个绝对的闭环、一个有限的搜索空间。而现在许多的特级教师、机构教研员或者是做题爱好者，就是在这个封闭系统里暴力破解，一个Pattern被细分到了各种的二级结论和三级套路，高考数学的算子是有限的，组合虽然很多，但是高价值路径的算法已经基本被穷尽了。这也导致了很多的高考数学教辅，本质上都讲不出什么新东西————我也不例外。简单说，就是没活整了。

既然这套封闭系统已经被卷烂了，这就出现了算法的内卷化，当系统不再有新变量进入时，学生之间的竞争就变成了“搜索速度”和“内存占用”的竞争，谁的搜索匹配题型的速度最快，谁记住的Pattern越多。而目前大部分市面的教辅都是如此编排的。

但我很欣赏Springer出版社出的数学书里，很多大佬编排的思路，尤其是《初等数学之旅》，这个不是单纯的Pattern Matching，而是展示了清晰的路径图，这种模式意味着，解题不再是单纯的匹配，而是追踪。拥有这样模式的学生，看到一道题目，不是先去Matching这是什么题型，而是看到整道题背后的逻辑流，比如这道题是从哪个定义或者定理起点，经历了哪些逻辑分支，最后收敛到答案的。也就是很多人所称的“底层逻辑”、“看透了”，而现在很多教怎么看题目的，本质上就是在做这个工作。因为很多学生只知道像个机器人一样Pattern Matching，一听到这种方法，反而耳目一新了。

这也就是为什么我在最初的前言坚称“所有结论都要有证明，和不给没有证明的结论”，因为每一个结论都必须伴随路径，如果没有，你甚至不应该把它存进你的脑子里。

以上的理由基本解释了这本书编写的主要哲学。但是后面，随着我的书稿编写计划变得不切实际地宏大，导致很多细节我都没打磨好，实际上我很不满意。并且因为最后有很多人建议我加入更多应试技巧，也就是专题，“否则没市场”，所以这本书无论如何，都还只是个半成品，或许是我一部未完成的作品罢了。

不过，这本书稿目前也是无限期停止更新了，你现在看到的可能是最后一个版本了。有许多人一直问我，为什么懒得编一个习题册出来，原因有以下：

（一）没时间，而且不赚钱；

（二）懒；

（三）现在习题册和专题练习，网上已经有很多了。以前我还觉得习题册里的解析思路引导很重要，但是现在我渐渐改变想法了。因为我发现很多AI配合学习模式，一步步交互性思路引导，比写在纸上的答案好多了。我也就没必要浪费时间了，实际上我在高三下册的时候，我是直接把手机带进学校，然后用DeepSeek R1讲我的错题，解析册我确实很少翻。

因为很多解析不过是复制粘贴答案，还是那句话，良心的就加点字，但大部分都只是纯粹的复制粘贴，久了我也不想看了。还不如将我的思考过程-错误过程-疑问告诉DeepSeek，然后DeepSeek顺着我的思路继续走，告诉我为何错了，为何这个方法好而那个不好，提升效率。

为什么我打算无限期暂停更新这个书稿？原因以下：

> 1.没钱赚，回报太少。具体可以看我的知乎想法，也就是说“我承认可能我的策略一开始就是错误的。甚至有点作贱自己的时间。我承认用爱发电这个理想很好，但是当我细算下来，那少得可怜的回报彻底解构了，就算我再多写一页，加上自己那些所谓的认为好的东西，又有什么用呢。边际收益还是少得可怜，我每增加产出都要付出固定的时间成本，但是读者的新增却又不会带来我回报的增加，甚至随着免费分发的数增多，这个收益会最终被平均，趋近于0，简直就是负和博弈。更何况，我写这些东西，本质上不能将读者引导向其他的付费服务，比如哔哩哔哩一些网课老师会给免费的资料，引导报班，但实际上我什么都没有。”

虽然在这个领域，谈钱不是什么好事，容易让别人觉得割韭菜或者是商人只想圈钱。但实话实说，我觉得自己投入的上千小时，然后只有几百个下载量，最后也没赚到什么钱，回报太少。而哔哩哔哩上的许多讲义和教辅，虽然卖的便宜，几十页，但是销量多，几万和几十万也是有的。 没办法，我不是富二代，我大学毕业以后也要担心就业问题，担心吃不吃得上饭，能不能给亲戚家人朋友看得起，这都是很现实的问题。如果连生存都成问题，就别谈理想了。

> 2.各种酸民和贩子恶心我。这点我在知乎上也说过了，爆改我的书，一开始还傻瓜一点，就简单在书名上加几个字，然后改作者。现在更加隐蔽了，都是拆着卖，可能卖个几块钱，或者挂在自己的网盘上牟利。我和我的粉丝去声讨，还被问候全家，说“都成年人了还这么玻璃心”、“你这资料值几个钱？网上多得去。”之类的话。不多说了。

> 3.我觉得写书太枯燥了。许多大部头的书，都是退休后的教授写的，要钱有钱、要闲有闲，花上几年写个大著，纯当休闲娱乐。但是我写这本书，是花很多时间，往往一个下午和一天就基本没了，总得来说，很无聊。

> 4.我有新的事要做了。最近我在学习Flutter并且开始写软件，想要开发一款学习软件。目前我觉得这个过程比写书更有意思，毕竟写书是单向交流，而写软件能让我真实地和用户互动，并且不管能不能成，可以想象的发展空间也更大更广。

未来，我决定：

> 1.把这本书的内容全部转到我的软件上去，因为我是用\LaTeX 写的，所以转成其他格式很方便。可以的话，也翻译成其他语言，将来尝试推广给外国人。可能和我想法接近一点都就是Brilliant和Math Academy，不是多邻国，因为多邻国想学点严肃的东西，和玩具差不多；

> 2.继续开发我的软件，不管能不能成。首先也能积累一点经验，再不济也算我的作品集了。因为我很少玩游戏，所以这也是我消遣的方式；

> 3.看看还没有什么新点子，也许有哪一天，我突然灵感来了，可能就尝试写点什么。或许是把这个当成模板，或者是新写；

> 4.实现收益，改进我的财务状况，然后再谈更远的。

感谢你阅读本书。

## 我得到了什么？

也感谢这次机会，让我认识了很多的朋友。并且不可否认，尽管回报不是很多，但是作为一个大一生，我的收入不过也就是去奶茶店等打工兼职，或者是别的类似的工作了。写书获得的爱发电的收入，确实也占我收入的很大一部分，此言非虚。

- 认识了很多朋友和大佬；
- 爱发电有一点捐赠收入；
- 让我比较熟练地掌握了LaTeX和相关编辑器；
- 一本素材库；
- 给我上了一课，也就是不要用学生思维去度量商业；
- 等等...

## 下载

## 水印版：

[2026-2-8](https://link.zhihu.com/?target=https%3A//sakura10.lanzn.com/b016klf3ra)

密码:dkxh

## 无水印版

[爱发电 · 连接创作者与粉丝的会员制平台](https://link.zhihu.com/?target=https%3A//afdian.com/a/writeamathbook)

## 目录和封面

![](https://pic4.zhimg.com/v2-39664b1442ef78b5d78bb34ca89ac0b9_r.jpg)

![](https://pic4.zhimg.com/v2-9196161a1b6d2f226174006f8f007eed_r.jpg)

![](https://picx.zhimg.com/v2-b8aa4052537d029ea7409d7b83ae4539_r.jpg)

![](https://pic4.zhimg.com/v2-713963376c1721773ab7cfc5ed9fb94f_r.jpg)

![](https://pic2.zhimg.com/v2-20ef77af17035c883e11f86e0ee0fe47_r.jpg)

![](https://pica.zhimg.com/v2-28f62ff981b2f5100f8d88daf53fdc66_r.jpg)

![](https://pic4.zhimg.com/v2-241b2a5ed3f6a2cd175632e55f252d37_r.jpg)

![](https://pic1.zhimg.com/v2-4d8532772bc74f493697626c84073f8c_r.jpg)

![](https://pic3.zhimg.com/v2-1d3ba487d7fd75d2e168351a511da594_r.jpg)

![](https://pic4.zhimg.com/v2-5c8173683f843a7b19560266ddaba05d_r.jpg)

![](https://pic3.zhimg.com/v2-778fbd558e886210d8c180247934aa92_r.jpg)

## 预览

![](https://pic4.zhimg.com/v2-794184ca106ddcf54fe3713d0583bc85_r.jpg)

![](https://pic1.zhimg.com/v2-1c579da3dbd7e985ed73c8026a77d322_r.jpg)

![](https://pica.zhimg.com/v2-eb42601ff6d4d77962d5d232d74c7852_r.jpg)

[余命数 的想法](https://www.zhihu.com/pin/2003308094629905109)

end


---

# 尝试使用AI逆向某简单游戏 qaq

**Author:** qaq  
**Bio:** 规则矩形空间移动工程师  
**Avatar:** ![](https://pica.zhimg.com/v2-1941e2333b87e09a0847929261ace563_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/ce0d2b6446e7d14e3df89a4c455421d4  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:** 194  
**Comments:** 9  
**Type:** article  

现在ai发展得这么快一直都想试试能不能用ai来完成一次逆向，抽了点时间试了下。

想先尝试某个简单游戏，几年逆向过某百合游戏——乙女たちの姉妹領域：

![](https://pic1.zhimg.com/v2-434ef196bd59841192132747a43e74a4_r.jpg)

这款游戏加密很简单，就是个简单的异或，但当初要定位到逆向算法的位置，静态动态联调也花了大半天的时间：

![](https://pic3.zhimg.com/v2-bfbe85c26ea824916d94631185d5a476_r.jpg)

![](https://pic3.zhimg.com/v2-cd5d1e948edf96bd2f456df8987d23b6_r.jpg)

![](https://pic4.zhimg.com/v2-f4ce9d42c7ef47b12653d7fe43aabdfb_r.jpg)

现在想想能不能用AI来做这件事。

让ai来做这个逆向感觉可以上mcp，我个人觉得静态分析这个场景上mcp意义不大，与其让ai花一大堆时间调mcp tool，不如直接把代码全丢给ai，利用ai强大的代码搜索能力找出我们需要的代码。

所以我们需要把程序代码反编译为C然后丢给ai。

![](https://picx.zhimg.com/v2-09b0491630350867f68a876dd541b8f9_r.jpg)

本游戏的核心代码一眼就知道在libscr.dll，我们把这个dll整个反编译就可以了。

最开始想用IDA，最近IDA发布到了9了，但试了下居然很多函数不能反编译，我回退到了IDA 8才可以，tmd IDA这个Hex-Rays真是越做越烂，就想换成别的，想看看Ghidra效果怎么样。

上大学时用过Ghidra，当时感觉跟IDA比还有很大差距，最近用了下：

![](https://pic3.zhimg.com/v2-e5e34cb4fb13add0556f3150ae3e89fa_r.jpg)

出乎意料的好用，反编译效果跟IDA比感觉没啥差距，而且还开源，那IDA就是路边一条了。

使用Ghidra将整个dll导出为一个4 m的文件：

![](https://pic1.zhimg.com/v2-1f9ee6d0d3cf3c649b24dafb9382341e_r.jpg)

然后直接问cursor：

![](https://pic1.zhimg.com/v2-80bf4bdeb13b397ca387265dbd307f08_r.jpg)

![](https://pic2.zhimg.com/v2-caccd8cb847855c0ea6a599901bef0f5_r.jpg)

不得不说牛逼，感觉差不多是对的，然后让生成一个解密的python脚本：

![](https://pica.zhimg.com/v2-2326bb512548bef602495bc065061420_r.jpg)

虽然ai保守的认为可能无法正常使用，但真就一次成功：

![](https://pic4.zhimg.com/v2-860b19e86d8cc050018bc6b03b6fede7_r.jpg)

![](https://picx.zhimg.com/v2-54ce5b8967609070db460467b056912b_r.jpg)

很强啊，当初我花了大半天才解决的事，现在用ai几分钟就搞定，仅靠静态分析就写出解密代码，太强了，下次可以提高点难度。


---

#  钱嘟嘟左卫门

**Author:** 钱嘟嘟左卫门  
**Bio:** 互联网勤杂工，分享一些开源AI项目  
**Avatar:** ![](https://pica.zhimg.com/v2-70daa71f58c6551f6b1daec627901a9f_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/7a95e0833b72978bb2f56c61fb133581  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:**   
**Comments:** 14  
**Type:** pin  

[object Object],[object Object],[object Object],[object Object]


---

# 一个插件让你的 Gemini 使用体验翻倍 凪ovo

**Author:** 凪ovo  
**Bio:** RL & Robotics @ Imperial  
**Avatar:** ![](https://picx.zhimg.com/v2-c756f0284075531236b1c7bfd5b5fd52_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/2a2decbea2fbf290ec3f66512a494a12  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:** 1280  
**Comments:** 147  
**Type:** article  

> 1. 17 项目突破 1000 stars 了，感谢支持！

Gemini 确实很强，尤其是最近更新了**Gemini 3**和 Deep Research 之后，它的推理能力和多模态理解又上了一个台阶，从去年三月份推出 2.5 Pro 0325 开始我就已经把它当成主力 LLM 工具了。

**但是**，它的官方网页版体验，说实话……真的还有很大提升空间。

作为轻度用户可能感觉还好，但即使作为一个仅仅把它当成日常快速问答 / 写作助手的人，在原生支持超长 Context Window 带来的更长的对话轮数的加持下，我依然经常遇到这两个痛点：

- 左侧历史记录就是一笔烂账：所有对话全堆在一起，不重命名就全是 "New Chat"，想找两天前聊的一个代码片段简直是大海捞针。
- 长对话翻以前的内容太累：一旦对话变长（尤其是让它写代码或者长文），回看之前的某个修改点，只能疯狂滚动鼠标滚轮。

> **一旦看到了问题，就很难忍受不解决它。**

![](https://pic1.zhimg.com/v2-7b77c67d7bd6dcaa47b838af4a57d172_r.jpg)

于是，去年十月份我肝了一个浏览器插件 ——**Gemini Voyager**。主打就是一个：**把咱们习惯的 "文件管理" 和 "时间轴" 带进 Gemini。**这也不是什么硬广（作为开源项目我也不会获得什么受益），主要就是分享一下我为了解决这两个痛点做的几个功能，看看有没有也戳中你的：

![](https://pic3.zhimg.com/v2-56866b488c6cb8412c30b2b7e506067a_r.jpg)

## 1. 终于有文件夹了 (Folders)

> 这个功能也支持 AI Studio！

这应该是我最急需的功能。 原生的 Gemini 历史记录是线性的，我给它加了个**文件夹系统**。 现在你可以直接把左侧的对话拖进文件夹里。支持两级目录，把「工作」、「摸鱼」、「代码学习」分开。

最爽的是**拖拽整理**的感觉，看着乱糟糟的列表一下子清爽了，强迫症表示极度舒适。

![](https://pic3.zhimg.com/v2-0a43442643beb0de6f1b1d92c92d9dc0_r.jpg)

## 2. 长对话救星：时间轴导航 (Timeline)

这是为了解决 "滚轮手" 做的。 Gemini 的上下文很长，我们经常在一个 session 里聊很多轮。Voyager 会在右侧生成一个**可视化的时间轴**。

- 每一个节点就是一次对话。
- 鼠标放上去能预览内容。
- 点击直接跳转。再也不用疯狂刷滚轮找 "上次那个报错是哪一轮发的" 了。
- （甚至支持最基本的 Vim Mode 交互）

![](https://pic1.zhimg.com/v2-9600f961a54375b51092134d05e9d668_1440w.jpg)

## 3. 多端云同步 (Cloud Sync)

在办公室整理好的 Prompt 和文件夹，回家打开电脑发现还是乱的？ 不怕， Voyager 支持**Google Drive 云同步**。

- 你的文件夹结构、Prompt 库都能自动备份到 Google Drive。
- 无缝同步，在哪打开都是整理好的状态。
- 数据还是在你自己的网盘里，安全放心。

![](https://pic2.zhimg.com/v2-59d50aa0486d43743c235707de563db1_1440w.jpg)

## 4. 聊天记录导出 (Chat Export)

所有鸡蛋不能放在一个篮子里，重要的对话记录我通常会存一份在本地。 Voyager 提供了**多种格式的导出**：

- Markdown：最适合阅读和再次编辑，图片也会自动打包好。
- JSON：结构化数据，适合开发者二次处理。
- PDF：适合分享和存档。

而且导出的内容非常干净，会自动去除网页上的无关 UI 元素，只保留纯粹的对话内容。

![](https://pic2.zhimg.com/v2-a0a15db96e94e4fa95627a4eefb72301_r.jpg)

## 5. Deep Research 思考过程导出

Deep Research 可以说是 Gemini 的王牌功能，生成的报告很好，但是它那个长长的思考过程（Thinking Process）其实有时候也很有价值。 于是我给 Deep Research 加上了一个**一键导出**。 可以直接把它生成的报告、甚至中间的思考步骤，全部导出成 Markdown。对于做研究或者复盘 AI 思路非常有帮助。

![](https://pic2.zhimg.com/v2-2b30f470dcb7bb711f6886cca96942a3_r.jpg)

## 6. 强迫症的小功能 (NanoBanana & Latex)

顺手还做了一些让自己舒服的小功能：

- NanoBanana 水印去除：通过移植开源算法（本地运行）去除了生成图片上那个有些显眼的 watermark。

![](https://pica.zhimg.com/v2-963f391eaf845bd4e8fb019278277ba2_r.jpg)

- LaTeX 公式复制：看到漂亮的数学公式，点一下直接复制 LaTeX 源码。
- Prompt 管理：常用的 Prompt 存起来，随用随调。

![](https://pic3.zhimg.com/v2-a4a6c5a6fb2463e6bf2066ff6785cd80_r.jpg)

- 提示词管理器支持拓展到其它任何页面！

![](https://pic3.zhimg.com/v2-fbf00b1710fc336ce0355c64ef39a9e8_1440w.jpg)

- 对话宽度调整：不必多说。
- Mermaid 渲染，可以多让 Gemini 画流程图了：

![](https://picx.zhimg.com/v2-cc3a94404df09f26dcc84e63eb2894bf_r.jpg)

## 写在最后

项目的官网是：

[https://voyager.nagi.fun/](https://link.zhihu.com/?target=https%3A//voyager.nagi.fun/)

GitHub 仓库：[https://github.com/Nagi-ovo/gemini-voyager](https://link.zhihu.com/?target=https%3A//github.com/Nagi-ovo/gemini-voyager)

做这个工具的初衷完全是自己用的不爽。目前已经在 Chrome Web Store 上架了，Firefox、Edge、Opera、Safari 等等也能用。

![](https://pic1.zhimg.com/v2-64f76f09ca85d087160d5ebbc0978156_r.jpg)

整个项目是完全开源的（MIT 协议），没有任何内购服务，且所有数据处理都在**本地**，不会上传任何聊天记录，这点大家可以放心（也可以直接去 GitHub 审查代码）。

如果你也是 Gemini 重度用户，或者也被这些交互细节折磨过，欢迎试用一下**Gemini Voyager**。

如果它帮到了你，可以在 GitHub 上点个 ⭐️，欢迎随时发起 Issue 和 PR!

最最最最最重要的是觉得好用的话，欢迎多多分享给身边的朋友！


---

# 发布一下我开发的学习软件Yaru的第一个demo 余命数

**Author:** 余命数  
**Bio:** 学生->个人主页https://asaka.moe   
**Avatar:** ![](https://pic1.zhimg.com/v2-2128f09689d37adad7f14144948c2dff_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/772aba33cdc0ea9eefb025921675491a  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:** 36  
**Comments:** 17  
**Type:** article  

## 新版本

[半个月过去了，发下Yaru的第二个版本](https://zhuanlan.zhihu.com/p/2006532649729161104?share_code=MxbcwWLrEKZv&utm_psn=2006587826259660875)

软件介绍

[介绍我开发的All in one学习流软件并招纳种子用户](https://zhuanlan.zhihu.com/p/1996230099029214777?share_code=AV8ry9RyyKDZ&utm_psn=1996374366468977448)

## 软件下载

Android：[https://sakura10.lanzn.com/iuvQJ3hgsdxg](https://link.zhihu.com/?target=https%3A//sakura10.lanzn.com/iuvQJ3hgsdxg)密码:6y9z

Windows：[https://sakura10.lanzn.com/iD3sv3hgr3tg](https://link.zhihu.com/?target=https%3A//sakura10.lanzn.com/iD3sv3hgr3tg)密码:gfrt

macOS/iOS/Linux：暂无打包

## 介绍

这个软件是我和我的开发朋友在学习Flutter和Rust的过程中开发出来的软件，并且由于历时较短，还不太成熟。目前的版本是贯彻一开始软件设计理念的尝试。

这是软件的第一个版本，**目的是为了展示软件开发的进度和目前的情况**，即意味着：

- 内容缺失，基本没有什么内容。因为暂且还没有时间去填充内容；
- 存在大量的漏洞、或者导致软件崩溃的情况；
- 由于这是一个跨平台软件，所以会有类似于在设置界面，移动端没有顶栏等显示的奇怪问题，日后会兼容修复；
- 请暂时不要使用扩展里的所有功能，因为还没有实现！
- 推荐使用第三方OAuth登录软件，即使用Google和Github。或者注册非邮箱账户登录；
- 等等..

![](https://picx.zhimg.com/v2-ea2a4a055b833a6d2b230986f48b85ad_r.jpg)

## 软件截图

![](https://pic3.zhimg.com/v2-0157b310848a19578ee800d72d44dce4_r.jpg)

![](https://pic1.zhimg.com/v2-2788de417354527e75c8e3378994ac7c_r.jpg)

![](https://pic3.zhimg.com/v2-06318eb3d29b81af68150ff4814db04a_r.jpg)

## 已知问题

- 国际化翻译的问题，因为软件的国际化方案经历过多次变更，直到最近才统一到Slang，所以目前问题比较多；
- 语言选择器和个人资料编辑器里的国家与地区出现“null”的情况，且国旗渲染有问题；
- 数学公式渲染问题（题库模块详情、学习模块交互式学习器和图书馆阅读器等）
- 笔记模块的AI助手和索引功能暂不完全；
- 等等。

## 版本更新日志：

- 0.0.1-alpha：第一个版本


---

#  余命数

**Author:** 余命数  
**Bio:** 学生->个人主页https://asaka.moe   
**Avatar:** ![](https://picx.zhimg.com/v2-2128f09689d37adad7f14144948c2dff_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/772aba33cdc0ea9eefb025921675491a  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:**   
**Comments:** 19  
**Type:** pin  

[object Object],[object Object],[object Object]


---

# 我 Vibe Coding 一周，做了个桌面 Agent 艾逗笔

**Author:** 艾逗笔  
**Bio:** 公众号@艾逗笔 
有逻辑的脑子万里挑一。  
**Avatar:** ![](https://picx.zhimg.com/v2-4af4207f82dbec3a5cb0cc1ce3756eca_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/97ee0bcdba71e0e78e468953a4c1219e  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:** 174  
**Comments:** 27  
**Type:** article  

复盘一下我vibe coding 一周，开发 WorkAny 的过程，很有意思。😂

## 开发过程

- 上周三在香港办卡，临时起意想做个桌面 Agent 项目，对标 cowork，晚上回到广州开始写代码
- 初期目标是快速发布，没时间去研究哪个 Agent 框架好用了，看很多人在用 claude agent sdk，先用这个吧

![](https://pic4.zhimg.com/v2-d6e01dbe3e6439803d631a50d0ab3d0f_r.jpg)

- 第一时间想到用 tauri，喜欢小而美，总觉得 electron 很重，不想用
- 不想自己写代码了，决定让 claude code 来写。之前的 claude 账号都被封了，用不上原版 cc，装了个 cc-switch，接上 OpenRouter 的 API 开始写
- 截了个 chatbot 的交互截图，让 cc 参考着先把基本的对话流程跑通，用 claude agent sdk，接上 OpenRouter，cc 很快写完了第一版

![](https://pic1.zhimg.com/v2-903d3be11267457fe48fad85398f1cb6_r.jpg)

- tauri 本质是用 rust 的壳子套了个前端界面，不熟悉 rust，让 cc 用 hono 写API，rust 只做壳子，不做业务功能。API 作为 sidecar 打包进 app

![](https://pic1.zhimg.com/v2-d655f8c8ea1924919f7200b0a9b7e534_r.jpg)

- 让 cc 在 API 引入 sqlite 实现本地存储，持久化任务数据，创建本地工作目录，保存任务输出文件
- 写了半天，看 OpenRouter 消耗了 110 刀，有点肉疼。买了个美国住宅 ip，付费上了原版 claude pro
- 截了个 Manus 的任务详情图，让 cc 参考写完工具调用的逻辑，中间是 chatbot 对话，右边用一个虚拟计算机的容器展示输入输出

![](https://pic3.zhimg.com/v2-d3a8b692ba603a84fd5282857b7a01b4_r.jpg)

- 让 cc 接入 shadcn/ui，把样式做得好看一点，支持切换皮肤

![](https://pic1.zhimg.com/v2-4aa5593c506945731d6795163699ed06_r.jpg)

- 又写了一天，关键时候 claude pro 限频了，很影响心情，补差价上了 claude max 顶配版
- 让 cc 把自定义模型配置，mcp、skills 调用的逻辑都实现了，跑了几个生成 PPT、Excel、Doc、 网页的 case，效果不错

![](https://pic1.zhimg.com/v2-dc994beb55361dc28e29f8537f37b132_r.jpg)

- 让 cc 把输出文件夹和中间过程的 artifacts 都在右边展示出来，写了个 artifact preview 容器，渲染各种类型的文件，可视化预览

![](https://picx.zhimg.com/v2-c40b1faac3ff3b36b184cdf81697a14d_r.jpg)

- 有些任务需要跑脚本完成，考虑到用户电脑可能没装代码运行环境，让 cc 引入 sandbox 来运行代码

![](https://pic1.zhimg.com/v2-ec0feefc73848ecacc143f8f98c5b650_r.jpg)

- 考虑到扩展性，需要支持不同类型的 Agent runtime 和 sandbox，让 cc 写了两个抽象类，统一接口调用。Agent runtime 支持 claude code、codex、deepagents，sandbox 支持 boxlite、codex-sandbox、claude-sandbox

![](https://picx.zhimg.com/v2-e2fbdcbe3c8e3f4313aa7d394399c17f_r.jpg)

- 觉得 cc 写的代码有点乱，让 cc 引入 eslint 和 prettier 做了下格式化，把逻辑太多的文件做模块化拆分。再参考 ShipAny 的目录结构，调整了一下项目结构

![](https://picx.zhimg.com/v2-c72deb24241e8282f477f26bbab0ce4b_r.jpg)

- 让 cc 写打包脚本，构建不同操作系统的安装包。把安装包发给一些朋友，开始内测了。根据内测用户的反馈，再让 cc 继续优化逻辑，解决问题，迭代功能

![](https://pic1.zhimg.com/v2-3c8c1bd03be998e28d343650e71e507a_r.jpg)

- 有些用户电脑没装 node，没有 claude code，安装软件后跑不起来，让 cc 在构建脚本支持 flag 参数，把 node 和 cc 作为 sidecar 打包进 app，让用户能够开箱即用
- Mac 用户安装 app 后提示文件损坏或有安全提示，让 cc 在构建脚本里面加上签名处理，用我的 Apple 开发者账户对打包的 Mac app 做签名
- node 和 cc 都打包进 app 的版本，安装包 100 多 m，有点重。让 cc 在构建脚本实现默认不打包，在用户启动 app 的时候引导安装 node 和 cc，精简版安装包才 20 多 m，小巧精致

![](https://pic2.zhimg.com/v2-9f6878c8e6027350c74041b2c61f96fd_r.jpg)

- app 基本功能实现得差不多了，让 cc 在 ShipAny 模板基础上写一个 WorkAny 的官网，放上演示图，部署上线

![](https://pica.zhimg.com/v2-20117f90c26ba4b57d436bcc60fc6da8_r.jpg)

- WorkAny 开源发布，MVP 版本上线，用户拉源码本地构建，配个 API 直接用

![](https://pic2.zhimg.com/v2-86ff6f3b79b9c7e76e7e41f77315a58f_r.jpg)

- 让 cc 写了个 github 构建脚本，在代码推送到 main 分支时，自动触发 github action 构建，一次性打包 Windows、Linux、Mac 三大平台的安装包，自动发布到 release，用户无需自行构建了

![](https://pic4.zhimg.com/v2-220a10dbaeaba6d7ce7075b68e23bc73_r.jpg)

- 根据用户的反馈，问题丢给 cc 去修，想到什么新功能也告诉 cc 加上，自己只做测试，不写代码，看都不看一眼。🌚

![](https://picx.zhimg.com/v2-fcd3ef363224cee84f8657930ca0cc11_r.jpg)

## 几点感悟

- 第一次尝试全自动驾驶 vibe coding 做项目，爽感非常强烈，WorkAny 的代码 100% 由 cc 老弟完成，我只负责指挥，日常开三个窗口，让三个 cc 老弟同时干活，效率拉满

![](https://pica.zhimg.com/v2-7bfd8f90c8bc46b2f7ea5d64e66dea6c_r.jpg)

- AI 时代技术平权，人人都是建筑师，理解用户需求、好的产品 sense 和审美是做出好产品的关键

![](https://picx.zhimg.com/v2-fe25caaf63df6318efb3679f70af4dc3_r.jpg)

- 技术广度和全局视野是最大的优势，可以精准提需求，指哪打哪，遇到问题能快速定位，防止 AI 走偏失控
- 以前总觉得手洗的衣服比洗衣机洗的干净，现在可以放心交给洗衣机了，又干净又快，能穿就行
- 优秀的程序员不会被 AI 淘汰，法拉利老了还是法拉利。🌝

欢迎试用 WorkAny，感谢反馈与支持。

[https://workany.ai](https://link.zhihu.com/?target=https%3A//workany.ai/)

![](https://pic1.zhimg.com/v2-a862b3f589af66c6b321c136d73b2efc_r.jpg)


---

# 2024，我追过的 AI 风口 艾逗笔

**Author:** 艾逗笔  
**Bio:** 公众号@艾逗笔 
有逻辑的脑子万里挑一。  
**Avatar:** ![](https://pica.zhimg.com/v2-4af4207f82dbec3a5cb0cc1ce3756eca_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/97ee0bcdba71e0e78e468953a4c1219e  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:** 105  
**Comments:** 14  
**Type:** article  

## 前言

随着年纪的增大，已经越来越不喜欢跟风写年终总结了。

2024 年，我做了很多项目，想想还是有必要写一篇文章来总结。

回顾过去，才能更好的展望未来。

去年写的一篇：[2023，我做过的 AI 项目](https://link.zhihu.com/?target=https%3A//idoubi.cc/posts/my-ai-projects-in-2023/)，让很多朋友认识了我。

这次打算接着去年的内容，继续写：2024，我追过的 AI 风口。

## 续写 2023

2023.10.24，[我从腾讯裸辞了](https://link.zhihu.com/?target=https%3A//idoubi.cc/posts/i-quit-from-tencent/)，带着对未来的憧憬和对自由的向往，开启了我的自由职业，独立开发之旅。

## GPTs Works - GPTs 导航站

发布时间：2023.11

项目地址：[https://gpts.works](https://link.zhihu.com/?target=https%3A//gpts.works/)

在 2023 年的年终总结中，最后一个项目，也是我的第一个出海项目，是 GPTs 导航站。

从这个项目开始，我正式开启了 AI 出海之路。一直在用 NextJS 写各种 Web 项目，也积累了一些对海外推广 / 宣传 / 获取流量的认知。

![](https://pic1.zhimg.com/v2-9e2ffa21002701d0cd321f004ab8134e_r.jpg)

在 2023.11 月，我开通了 Stripe 收款账户，终于能够全球收款了。

## AI Wallpaper - AI 壁纸生成器

发布时间：2023.12

项目地址：[https://aiwallpaper.shop](https://link.zhihu.com/?target=https%3A//aiwallpaper.shop/)

我自己有经常换桌面壁纸的习惯，每次去网上搜索 / 下载壁纸再更换挺麻烦的。

于是我就想写一个 AI 壁纸网站，调用 AI 画图接口，生成壁纸，再写个 Mac 菜单栏应用，下拉加载 AI 壁纸列表，点一下立刻更换桌面壁纸。

我接入了 OpenAI 的 DALL-E 3 接口，输入一句话描述，返回一张 AI 壁纸图片。

网站很快做完上线了，菜单栏应用也写了一个版本。但是生成的图片总觉得不够好看，当时也不懂得怎么宣传推广，所以这个项目一直不温不火，积累的用户不够多，自然也没有赚到钱。

![](https://pic2.zhimg.com/v2-f4f62d61b037433c9e378b143e94972f_r.jpg)

后来我做了一个[1024 全栈开发社群](https://link.zhihu.com/?target=https%3A//1024.is/)，想把自己掌握的全栈开发技能，教给想学全栈开发的朋友。 我拿 AI Wallpaper 这个项目，作为全栈开发的入门课程，录制了 3 节课，用了将近 8 个小时的时间，讲了如何从 0 到 1 实现一个 AI 壁纸网站。包括环境搭建 / 项目初始化 / API 与前端交互 / 数据存储 / 图片上传 / 登录注册 / 支付 / 积分扣除等完整的内容。

加入社群的朋友，有一部分靠这个项目的视频课程，初步掌握了全栈开发技巧，做出了自己的 AI 产品。

从这个角度看，AI Wallpaper 这个项目，算是非常有价值。

![](https://pic1.zhimg.com/v2-5f17e8ebd817a2eccaf835c8ad410200_r.jpg)

## 2024，我做过的 AI 项目

不完全统计，2024 年，我一共做了将近 20 个 AI 项目，其中有几个没有正式发布，一直在电脑本地，算是半成品。也许今年会捡起来继续做。

基本上保持在每个月发一个新产品的节奏，有的做的很完整，有的只是 MVP。

不管项目好坏，基本上也是熬了无数个夜肝出来的项目，写代码的时候真的很上头。

## AI Cover - 微信红包封面生成器

发布时间：2024.01

项目地址：[https://aicover.design](https://link.zhihu.com/?target=https%3A//aicover.design/)

这是一个“无心插柳”的项目。

过年前一周的某个周末，我在广州南沙一个商场的星巴克，给一个朋友演示如何用 NextJS 快速做网站。也没想好写什么，就说参考微信红包封面写个 AI 红包封面生成器吧。

花了一个小时，边讲解边写代码，很快就写完了第一个版本。发了一条即刻动态，收到了很多点赞，用户表示很有需求，期待上线。

当天晚上解析了一个域名，部署上线了。

![](https://pic2.zhimg.com/v2-147e4efa3610356491e928034002ed71_r.jpg)

在接下来的几天，因为临近过年，网站访问量很大。接通了支付，也有一些用户过来付费生成 AI 红包封面。大概赚了几千块钱。

热度持续了将近两周，过完年之后，访问量降下来了。

后面我把这个项目的代码开源了。

并且写了一篇文章进行复盘：[我写了一个 AI 红包封面生成器](https://link.zhihu.com/?target=https%3A//idoubi.cc/posts/ai-cover-generator/)

总结起来就是，微信红包封面制作的最大卡点在于微信平台的审核，仅靠 AI 生成红包封面图片，没办法闭环，所以这类项目的价值有限，很难做大。

今年微信红包封面允许售卖了，也许会有新的机会，我之前发了一个 idea，还没时间去做。感兴趣的朋友可以试试。

![](https://pica.zhimg.com/v2-a6b997b6885cc255e1e360c9deaee71a_r.jpg)

## Sora FM - Sora AI 视频展示站

发布时间：2024.02

2 月份的时候，OpenAI 放出了 Sora 模型的演示视频。引起了不小的轰动。

我看到有人开始做 Sora AI Video Generator，想着要提前占位，蹭 Sora 的热度，等 API 开放可以第一时间套壳收费。

我虽然没想明白做这种项目有什么价值，但还是跟风做了一个：Sora FM

一开始写的 tagline 是：Sora AI Video Generator.

![](https://pica.zhimg.com/v2-0c2c315cb622417c8642a2a727b8fc68_r.jpg)

上线第二天，我把代码开源了。在 Github 搜索 sora 关键词，sorafm 排在了第一位。

过了几天在视频号刷到了有人截图我这个项目，说是做了个 Sora AI 视频生成器，私信下单可以帮助生成。

我当时很生气，看不惯这种明目张胆割韭菜的行为，举报了视频。并且写了一篇文章进行控诉：

[我开源了一个 Sora AI 视频生成器模板，却被人拿去割韭菜](https://link.zhihu.com/?target=https%3A//idoubi.cc/posts/sora-ai-video-generator/)

文章发到我的公众号，两天时间有了 7w 的阅读，是我有史以来阅读量最高的一篇文章。

但是也有不少的骂声，说我是始作俑者，我先在网站上打着 Sora AI Video Generator 的口号，虚假宣传，误导用户。

想一想，觉得说的也有道理。有一种愧疚感，连夜把项目的 tagline 改成了：Sora AI Video Showcase. 并且删除了公众号上的文章。

再后来 Sora FM 这个项目的域名 sora.fm 被 ban 了，好像是因为 Sora 注册了品牌保护，这种蹭品牌词的域名，被禁止解析了。

总结起来，这个项目让我吃到了一定的流量，但是也被流量反噬了。蹭品牌热度的这种项目，还是不做为好。短期的流量，不能长久。

## ThinkAny - AI 搜索引擎

发布时间：2024.03

项目地址：[https://thinkany.ai](https://link.zhihu.com/?target=https%3A//thinkany.ai/)

三月份的一个周末，在小区楼下的咖啡馆。我突然想写一个 AI 搜索产品。

早在 2023 年 11 月，就有朋友建议我做这一类的产品。当时没有放在心上，总觉得搜索引擎这类产品会很复杂，我可能写不出来。

后来二月份，秘塔搜索出圈了，搜索完了会出一个 AI 总结，并且梳理成时间线和思维导图。创新点很多，让人眼前一亮。

也有 Lepton Search 之类的开源 AI 搜索产品，号称几百行代码就实现了一个 AI 搜索引擎。

于是我开始去研究，如何实现一个 AI 搜索引擎，看了几个开源项目的源码。

花了一个周末的时间，写完了第一个版本，在第三天的时候发布到了 ProductHunt，拿到了当天的日榜第四名，很是惊喜。

![](https://pic3.zhimg.com/v2-c2fbf6dd6a1fe4758b6b077c69fb8958_r.jpg)

随后就有了很多的自然曝光，一些海外的自媒体博主，在 Twitter / Tiktok / Facebook / Youtube 等平台，自发推荐 ThinkAny，给产品带来了不少曝光。

4 月份第一次看 Similarweb 的数据，有 59w 的访问量，以日本 / 埃及两个地区的用户为主。

5 月份的时候涨到了 64w 的访问量。这是我出海半年以来，数据最好的一个产品了。

6 月份的时候，我去了一趟上海，去了一趟北京，参加了 AI 搜索交流会，见了一些投资人 / 企业家 / 创业者。

回广州之后，写了一篇文章：[我做了一个 AI 搜索引擎](https://link.zhihu.com/?target=https%3A//idoubi.cc/posts/ai-search-engine/)，用两万字的篇幅总结了我对 AI 搜索行业的认知和做 AI 搜索产品的经验。

这篇文章在行业内有了一定的传阅，也吸引了一些投资人和从业者的关注。

6 / 7 月份频繁跟人交流，国内的投资机构，基本上都聊了一遍。

从最初的满怀期待，到慢慢认清现实。AI 搜索这个方向，需要巨大的投入，是大厂的战略重心。个人开发者 / 小团队要在这个领域做到市场领先，非常困难。

大环境下经济形势不好，投资机构出手非常谨慎，靠融资来把 ThinkAny 做大，这条路基本上走不通。

后来我也就不再跟投资机构接触。还是想按照自己的想法和节奏来，服务好一部分用户，走小而美的路线，实现营收平衡，甚至赚点小钱，成了我做 ThinkAny 的阶段性目标。

后来 8 / 9 月份，做了一些成本优化措施，控制住了支出，做到了营收平衡。也面临了用户流失和流量下降的问题。

后面几个月，我的注意力有点分散，没怎么迭代 ThinkAny 这个项目。每天有稳定的用户在使用，也有一些自然增长。从数据上看，还是有很大的潜力。

总结起来就是，2024 年的 AI 搜索风口，被我追到了。但是我没有能力，把 ThinkAny 做大，因为自身的资源不够，实力不足，不能借力起势，略感遗憾。

2025 年，我希望能继续迭代 ThinkAny，把提了很长时间的 After Search 功能做好，在产品层面有更多的创新，继续国际化，在用户规模和收入方面能更上一层楼。

## Melodisco - AI 音乐播放器

发布时间：2024.04

项目地址：[https://melodis.co](https://link.zhihu.com/?target=https%3A//melodis.co/)

4 月份的时候，AI 音乐模型厂商 Suno 发布了 v2 版本，生成的音乐质量有了质的提升。

我这么多年一直在听网易云音乐，听来听去都是一些老歌，处于歌荒的状态。

所以特别想做一个 AI 版网易云音乐，生成 AI 歌曲，创建 AI 歌单。

于是上线了 Melodisco 这个项目，从 Suno / Udio 等 AI 音乐模型平台上收集了 2w 多首 AI 歌曲，实现了一个音乐播放器，支持顺序 / 随机 / 单曲循环 AI 歌曲。

当时流行的 AI 音乐模型都没有开放 API，所以在 Melodisco 平台上，只能听歌，用户想要自己创建 AI 歌曲的需求没有得到满足。

做了差不多一个月，总觉得 AI 生成的歌曲，曲风有点单调，还达不到传统歌曲的水准。再加上没有自己的音乐模型，Suno / Udio 等音乐模型又在做自己的歌单广场。感觉 Melodisco 这个项目看不到希望，就没有继续做了。

过了一段时间，我把 Melodisco 的代码开源了。

![](https://pica.zhimg.com/v2-3f0b8cc69420d93c9ed87cacff03ad20_r.jpg)

上一次去佛山交流，听出海的朋友说，起步比 Melodisco 晚的一些项目，通过第三方 API 接入音乐生成模型，做 SEO 获客，半年时间赚了很多钱。

我用 Semrush 之类的分析工具看了下 “AI Music Generator” 之类的关键词，现在的竞争难度已经非常大了。4 月份我刚开始做的时候，难度还很低。

又一次追到了风口，起了大早，赶了晚集。

总结起来就是，我当时只想做一个好用的 AI 音乐播放器，满足自己的日常听歌需求。对 SEO 获取搜索流量，套壳第三方音乐模型变现这种套路，不理解，也不感兴趣。

还是那句老话：人赚不到认知以外的钱。

## HeyBeauty - AI 虚拟试衣

发布时间：2024.05

项目地址：[https://heybeauty.ai](https://link.zhihu.com/?target=https%3A//heybeauty.ai/)

4 月份的时候，一个做算法的老哥找到我。说他实现了一个特别好的试衣算法，效果比阿里巴巴的 outfitanyone / 开源的 idm-vton 要好很多，有非常大的领先优势。他觉得我做 web 产品效率很高，想合作做一个 AI 试衣项目，主要做出海。

我考虑了一下，觉得这个事情有技术壁垒，可以试试。

5 月份的时候，对接了他的试衣 API，上线了 HeyBeauty 这个项目，主打 AI 虚拟试衣功能。

![](https://pic3.zhimg.com/v2-e20f8cbd7a3bfba4db60df5debea8c14_r.jpg)

一开始做 ToC，发现用户会因为好奇上传照片来试衣，但是付费意愿不高。

后面又尝试做 ToB，做了一个 Shopify 的插件，面向做服装电商的商家提供试衣服务。

期间聊了几家有意向的客户，定制了一些衣服模型。客户对试衣效果很满意，但因为其他方面的一些原因，暂未有达成合作的客户。

对这个项目的最大感触是：酒香也怕巷子深。

单论试衣效果，我们的模型是绝对领先的。

![](https://pic1.zhimg.com/v2-8f6e5d2733981dd08fe8889fa5bbdd20_r.jpg)

但是 AI 试衣这个事情，到底是不是真需求，愿意为此买单的客户在哪里，我们至今还在摸索。

由于我们两都是技术背景，不太擅长营销推广，所以 HeyBeauty 这个项目，在用户增长和商业化方面，还有很大欠缺。

2025 年，希望在迭代功能的同时，做一做 SEO 流量，寻找更多的意向客户。

也希望做服装电商的老板们，可以联系我们，一起探讨下 AI 试衣这个事情的可行性，达成合作。

## AI 摘要浏览器插件

发布时间：2024.06

6 月份也有做一些自己的项目，但都是半成品状态，没有公开发布。

正好智谱的人找我，说他们开发资源紧张，想让我帮做一个 AI 摘要浏览器插件。

一般情况下，我不怎么接外包项目，但考虑到 知了阅读 也需要做一个浏览器摘要插件，做完之后刚好可以自己用。

拿别人的钱，做自己需要的产品，何乐而不为。于是接下了这个项目，花了一周时间，写了一个 AI 摘要浏览器插件，又按照他们的要求修改了小半个月，最终完成了交付，在智谱的某次发布会上线了。

这里看到的是最初的版本，功能比较简单，就一个 AI 摘要功能。后来他们在此基础上又加了很多功能，有兴趣的朋友，可以自行搜索体验。

![](https://pic2.zhimg.com/v2-44fa008c6113f5e13841ff996c10fc61_r.jpg)

## Pagen - AI 落地页生成器

发布时间：2024.08

项目地址：[https://pagen.so](https://link.zhihu.com/?target=https%3A//pagen.so/)

6 月 15，在“哥飞的朋友们”年中聚会上海场，[AITDK](https://link.zhihu.com/?target=https%3A//aitdk.com/)的作者 Blank 老哥，现场演示了使用 AITDK 最新集成的 Landing Page Generator 功能，输入一句话描述，几分钟上线一个内容完整的落地页。

当时底下的听众都觉得很 amazing，我想了一下实现原理，感觉挺简单的。无非是预置一个前端模板，再通过 AI 生成内容填充模板。

想到日常做项目，每次写 Landing Page 挺费时间的，这类产品对于我们这种经常做新产品的人来说，是个刚需。按照我做产品的原则，自己能做出来的，我都想自己做。

于是花了 2 天时间，写完了第一个版本。持续迭代了半个月，内置了 4 套精美的模板，输入产品名称和描述，30s 生成一个功能完整的落地页。做了一定的 SEO 优化，也为每一个使用 Pagen 生成的落地页绑定一个单独的子域名，方便用户直接拿去上线。

这个项目做完第一版之后就没怎么管，总觉得交互做的不够好。也一直没时间去优化。

自己拿来做了一些落地页，在获取搜索流量方面取得了一定的效果。

有段时间，快手发布了一个 AI 试衣模型，叫 “Kolors Virtual Try On”，我在 Pagen 输入关键词，上线了一个页面，很快拿到了谷歌搜索前三的排名。有一段时间，一天有 10w 的访问量，进入了 Pagen 的落地页，再给 HeyBeauty 导流，在 HeyBeauty 做付费转化。

只是来的大部分是印度用户，付费率很低，基本上试用完就走了。

虽然没有靠 Pagen 这个产品赚到钱，但至少证明了在 SEO 获取自然搜索流量方面，Pagen 是有很大潜力的。

后来有个人在 Twitter 联系我，要收购 Pagen 这个项目，问我 MRR 多少。按照惯例，是要根据 MRR 计算收购价格的。我说 MRR 为 0，因为这个项目基本上没推广，所以没什么人用，没人付费。老板还是想买，出价 1w 美金，我考虑了一下，最终还是没卖。

我想找个时间，把 Pagen 捡起来，做成一个好用的 AI Landing Page Generator。不论是帮助创作者快速制作产品宣传主页，还是帮助自己的项目获取 SEO 流量，都是有价值的。

1w 美金，也许努努力，靠自己也能赚到。

![](https://pic1.zhimg.com/v2-9871432260290678335812e0fd3267de_r.jpg)

## CroSearch - 跨语言搜索引擎

发布时间：2024.09

9 月份的时候，收购了沉浸式翻译的公司老板，来南沙找了我三次，他们想做一款跨语言搜索引擎，看中了我做 AI 搜索产品的经验。

我从 9.10 号开始写 CroSearch 这个项目，2 天上线第一个版本，又按照他们的要求优化了半个月，30 号正式上线。（CroSearch 是最开始的名称，上线的版本换了别的名称，不算我的独立开发作品，就不放网址了。）

跑了一段时间，发现留存不太行。用母语跨语言搜索全世界的优质内容，这个出发点是好的，也有很多人有此类需求。然而最大的问题是响应速度太慢了，一次搜索，需要经过翻译 / 聚合 / 重排 / 再翻译多个步骤，耗时 5s 以上，如果要替代谷歌日常使用，这个速度肯定是不达标的。

后来他们决定先不做这个方向了，我们也就没合作了。

![](https://pic3.zhimg.com/v2-4231d36f329ad8ce34950c2d2364fad8_r.jpg)

## PodLM - AI 播客生成器

发布时间：2024.10

项目地址：[https://podlm.ai](https://link.zhihu.com/?target=https%3A//podlm.ai/)

9 月份的时候，谷歌的 NotebookLM 出圈了，引爆点是把对话内容转双人播客的功能。

基于多模态的交互，给了 AI 知识库产品新的想象空间。

我本来没打算去研究这个方向，甚至在过了很长一段时间之后，我才知道原来 NotebookLM 是一个知识库对话产品，我之前一直以为它是一个 AI 播客创作工具。

国庆期间，在覔书店，看到微信群有人发了一个双人播客的 demo，说是在做 NotebookLM 类似的产品。

激起了我的好胜心。有点意思，为什么我不能做一个？

我花了一下午，搞定了双人播客脚本生成的逻辑，实现了 tts 功能。

第二天，串通了完整的流程，写了一个输入框，粘贴一个 URL 地址，一键转换成双人对话播客。

上线一个月之后，发布到了 ProductHunt，拿到了日榜第五的名次，也吸引了不少关注。

PodLM 这款产品，借助 NotebookLM 的爆火，吸引了很多用户来充值试用。在早期版本就开放了 API，也有一些客户购买了 PodLM 的 API 去做自己的 AI 播客产品。

整体而言，PodLM 的营收还算不错，比起我的其他几款产品，算是付费率比较高了。

但是这款产品，未来要朝着哪个方向做，我还没有想的很清楚，也许会围绕播客相关的需求，做播客生成 / 播客搜索 / 播客摘要 / 播客转录等功能。

也许会围绕 tts 的需求，做成一个 tts 服务供应商。

2025 年，持续迭代吧。

![](https://picx.zhimg.com/v2-521278d583e37fa6c815b19ab2683933_r.jpg)

## MCP - 2024 年最后一个 AI 风口

发布时间：2024.11

2024.11.25，Anthropic 发布了 MCP（Model Context Protocol），引发了业界热议。

自媒体一片叫好：AI 的下一个风口要来了。

我过了一遍 MCP 的官方文档，从技术的角度谈了谈我对 MCP 的理解。

![](https://pic1.zhimg.com/v2-569c26c07ba7fb387b33bcd558b06e04_r.jpg)

毫无疑问，MCP 是 AI 领域的一个里程碑，也可以说是一次革命。从协议层面约定了 AI Agents 的交互方式，开放共建，无论是 ToB，还是 ToC，都有很大的想象空间。

我第一时间上手，把 2023 年做过的 ChatSum 项目捡起来，写了一个[mcp-server-chatsum](https://link.zhihu.com/?target=https%3A//github.com/chatmcp/mcp-server-chatsum)，用来总结群聊消息，在 Claude 客户端分析微信聊天记录。用一个实际场景对 MCP 协议进行了落地：

![](https://pic1.zhimg.com/v2-71af5b465183a8684b9b386122fc9618_r.jpg)

为了收集好用的 MCP 服务，我在 2023 年开源的[gpts-works](https://link.zhihu.com/?target=https%3A//gpts.works/)项目基础上，写了一个 MCP Servers 导航站：[mcp.so](https://link.zhihu.com/?target=https%3A//mcp.so/)，通过程序化 SEO 的方式，收集了 700+ 个 MCP 服务，成为了收录量最全的 MCP 服务导航站。也拿到了谷歌搜索关键词 “MCP Servers” 排名第一的位置。

![](https://pic1.zhimg.com/v2-fccdf9e93c03ab2ce41339e30bcbd8dc_r.jpg)

我的下一步计划，是做一个[ChatMCP](https://link.zhihu.com/?target=https%3A//chatmcp.ai/)客户端。摆脱对 Claude 客户端的依赖，更加方便的安装 / 管理 MCP 服务，提供更好的 ToC 体验。

![](https://pic2.zhimg.com/v2-f4dd830e854416dd58458dd3a5b9052f_r.jpg)

有人开始预言 2025 会是 AI Agents 爆发的一年。开放互联会是一个趋势，MCP 协议的出现，给 AI Agents 的发展带来了新的想象空间。只是 MCP 生态发展起来还需要一点点时间。

MCP 未来可期，提前入局，是一个明智的选择。

## ShipAny - AI SaaS 开发脚手架

发布时间：2024.12

项目地址：[https://shipany.ai](https://link.zhihu.com/?target=https%3A//shipany.ai/)

本来以为 2024 年已经接近尾声，不会再有什么波澜。

圣诞节那一周的周一，去了一趟佛山，见了一些做出海的朋友。聊到了为什么很多人买 ShipFast 这个建站模板，是不是我也可以写一套。

周二开始写，取名 ShipAny。花了一天时间，搭好了基本架子。买了一个域名：shipany.ai

周三圣诞节，写了一个 Landing Page，上了 Pricing 功能，接通了支付。发了条动态宣告新项目 ShipAny 在圣诞节上线。2025 年前购买享 5 折优惠。

当天晚上，几十个用户下单，购买了顶配版（$299 打五折），4 小时突破 1w 美金收入。

第一次卖期货，得到了很多朋友的认可与支持。给了我非常大的信心。

在 2025 年到来前夕，写完了承诺交付的核心功能，启动了交付流程。从立项 / 预售，到交付，花了不到一周，再一次加深了大家对我开发效率高的印象。

给 2024 年画上了一个圆满的句号。也让我意识到了“厚积薄发”这个词的含义。如果没有一年十几个项目的积累，我不可能短时间内完成新项目的交付，也不可能得到这么多朋友的信任。

本质上，是“影响力变现”的一个证明，我很开心，也很幸运，在 build in public 的过程中，积累了一定的影响力。

希望 2025 年，能在 ShipAny 项目上持续迭代，持续交付，不辜负用户的期待，做好这个开箱即用，高效好用的 AI SaaS 开发框架。

![](https://pic3.zhimg.com/v2-ac68c9b86f14bc39d5d8a6b0035ec7ec_r.jpg)

## 我的年度关键词

如果要用一个关键词来总结我的 2024，会是：

![](https://pic2.zhimg.com/v2-901eb06946c6b4c418a170998476a65d_1440w.jpg)

对大部分的人和事都祛魅了。

- 对产品祛魅了。

不会再觉得 Perplexity / NotebookLM 之类的产品有多么神奇，只要自己愿意写，都是能写出来的。无非是体验的优化，以及营销推广方面的差异。

- 对资本祛魅了。

理解了投资机构的运作逻辑，意识到有些沟通是毫无意义的。不再对投资这件事抱有任何期待，打铁还需自身硬。只有做好产品，做出成绩，才能借助资本锦上添花。

- 对大佬祛魅了。

这一年认识了很多大佬，大佬身上有很多优秀的品质值得学习。对大佬保持必要的尊敬，但不会盲目崇拜。提升自己的实力，跟大佬平等沟通，才是最重要的。

> 一年过去了，我发现我越来越 i 了，下意识拒绝很多交流和合作。每天的时间有限，还有太多的事情没做好。实在没有精力去维护太多关系。
> 

## 我的工作状态

2024 年，我第一次出国。一年去了新加坡 / 日本 / 韩国三个国家。

对出国这件事也祛魅了，对我而言，无非是换个 ip 写代码。在不同地方的咖啡店写代码，感觉挺好的。

这一年的工作状态，用一个词概括叫做：

Coding Anywhere

每次背个包，找个咖啡店待一下午，也许一个新产品就做完了。

![](https://pic3.zhimg.com/v2-cacff9350b86f4988f672643a9c4dd74_r.jpg)

经常有人问我为什么当初选择裸辞，我只用一句话回答：

> 难能可贵是自由。
> 

## 我的个人 IP

2024 年，我没有刻意去做打造个人 IP 这件事情，但是 idoubi 这个 IP，慢慢被很多人熟知。

大家对这个 IP 最大的印象是：做了很多产品，效率很高，做产品很快。

后来我发布 ShipAny 的时候，短时间内得到很多用户的支持，也是吃到了这个 IP 的红利。

如果要总结做个人 IP 的经验，我觉得最重要的还是:

> Build in public, and ship more.
> 

也就是要多做，多发。作品是让用户了解你的最好方式。

- Twitter 我算是从 0 到 1 开始做的，一年时间涨了 10k 粉丝。
- 经常在即刻发产品动态和生活日常，一年涨到了 8k 粉丝。
- 公众号文章处于月更状态，一年新增 20k 关注，单篇阅读量平均在 10k 以上。
- 最近一个月，开始经常发小红书，慢慢也有一点起色了。

![](https://pic3.zhimg.com/v2-326764b9940399b8180997eae3ac12aa_r.jpg)

2025 年，还是要继续做好产品，坚持 build in public，做成一个有影响力的个人 IP。

## 我的收入情况

前面总结下来，我一年做了十几个产品。有几个都是在大的赛道，也拿到了不错的流量。按理来说，应该是赚了不少钱。

遗憾的是，我所有产品的商业化都做的不太行。之前 ThinkAny 的模型 Token 成本和服务器带宽成本比较高，付费率很低（0.03% 左右），有一段时间都是负收入状态。后面做了成本优化，才做到营收平衡，再到小规模盈利。

其他几款产品，因为没怎么推广，流量不大，所以也没什么收入。

2024.12 月，四款产品加起来，总算实现了 1k 美金的 MRR，有一定的上升趋势。

![](https://pic4.zhimg.com/v2-debcd2e18d1aaf37c5438aec6e264383_r.jpg)

2024 年最后一款产品 ShipAny，一周的收入超过了其他产品一年的收入。

2024 做了一年全栈开发社群，也给我带来了部分收入。感谢社群朋友的支持和信任。

总的来说，2024 年全年的收入，跟 2023 年上班时候的收入，还有一定的差距。但是，开心指数是上班时候的 N 倍。

> 做人最重要的是开心，赚钱很重要，开心的赚到钱更重要。
> 

2025 年，希望能持续迭代产品，在商业化方面有更多的突破，目标是把 MRR 做到 1w 美金。

## 我的产品理想

我在很多场合都讲过，我的产品理想是：

> 实现软件自由。
> 

所谓的软件自由，就是每天在用的，或者很喜欢的产品，都应该是自己写的。

这个理想建立在自身的能力边界之内。比如我不擅长算法，不懂大模型训练，这些领域的产品，我不会去做。

比如一些基础软件：PhotoShop / VS Code 之类的，虽然经常用，但是工程复杂度很高，靠一个人搞不定，我也不会去做。

其他应用层的一些软件，经常用的 Spotlight 应用，ChatBot 类的应用，是可以自己写的。

我个人认为， 90% 的应用层产品，都是没有技术壁垒的。无非是体验的优化，看谁能持续迭代，持续获客。长期主义，是产品成功的关键。第一个版本做出来很简单，能持续做下去，找到忠实的用户，很重要。

![](https://picx.zhimg.com/v2-dd103927b67eed5e1ae3958ebec1fb47_r.jpg)

## 2025 年规划

年终总结免不了要为新的一年立几个 Flag。

2025，我会把主要精力投入到做产品上面。

会把 2024 年没做好的产品，捡起来继续迭代，也会持续创建新的产品。

会更加关注市场需求和数据分析，做新产品之前，先做搜索量分析，想明白增长方式和变现途径再去做，而不是跟之前一样闭门造车，凭自己的感觉去做产品。

扩大自己的能力边界，争取有更多的代表作。

除了做产品之外，我会继续做[1024 全栈开发社群](https://link.zhihu.com/?target=https%3A//1024.is/)，坚持分享，输出自己做产品的经验和思考。

帮助更多想学全栈开发的朋友，做出自己的产品。

![](https://picx.zhimg.com/v2-c83a2048348ee77f2720d756cdfcd69d_r.jpg)

在再有精力，我会尝试做自媒体，输出更多高质量的内容，毕竟平时写的公众号文章，有人爱看。

2024 跟出版社的老师有沟通，但写书的计划被其他事情耽搁了，希望 2025 年能出版我的第一本书。

## 总结与感悟

2024 这一年，有惊喜，也有遗憾。

经历了很多事情，取得了一些成绩。

- ✅ 在多个活动现场分享，面对几百人的观众，不再紧张了。
- ✅ 写 全球收付款 的文章，首次突破 10w + 阅读
- ✅ 多个社交平台的关注粉丝，加起来应该有 5w + 了
- ✅ 靠 ShipAny 实现了“日入万刀”的梦想

有段时间特别打鸡血，每天信心满满去做新产品。

也有段时间，觉得一切毫无意义，晚上焦虑到 2 / 3 点睡不着觉，想要格式化一切。

享受 ship 新产品的过程，也会因为做太多产品导致精力分散，没有代表作而感到迷茫。

自由是把双刃剑，也许找到一个平衡，跟自己和解，才是救赎之道。

感谢所有关注我 / 支持我 / 信任我 / 帮助过我的朋友。

再有精力，我会尝试做自媒体，输出更多高质量的内容，毕竟平时写的公众号文章，有人爱看。

> 继续 All in all, 相信未来可期。 厚积薄发，Make things happen.
> 


---

# 互联网已经将绝大部分信息差抹除了，知识已经随处可以获得，为何大部分人依旧无法获得大幅突破？ 奔奔马

**Author:** 奔奔马  
**Bio:** 新疆兵团90后职工，淘宝搜“奔奔马90后养蜂人”自产蜂蜜和枣  
**Avatar:** ![](https://pica.zhimg.com/v2-4e340f36684bbae6619008a0222a2f6f_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/a5acda7d51dd796f80e1cdbe59f5c408  
**Published:** 2025.03.04 14:18:55  
**Updated:** 2026.01.08 11:10:40  
**Question:** https://www.zhihu.com/question/689452741  
**Question Created:** 2024.09.29 21:40:00  
**Question Updated:** 2024.09.29 21:40:00  
**Votes:** 21836  
**Comments:** 1388  
**Type:** answer  

2023年8月以前，在我的淘宝店铺里，一直只上架了**蜂蜜**这一类商品。

8月时，有一个买家想买两斤纯蜂蜡，我便熔化了一些平时收集的封盖蜡、赘蜡片熔化，得到块状蜂蜡后寄了过去。

由于没有熔蜡方面的经验，网上也只有熔化蜂蜡的大致方法，我忙活了半天，虽然得到了成品，但蜂蜡中总是还有捞不尽的零星杂质。

买家收到蜂蜡以后，回复我说“**寄来的确实是好蜂蜡（新蜡），但含有少量杂质，有些影响卖相了”**。

![](https://picx.zhimg.com/v2-1222d91f29e9e1c658db198cff1bc386_r.jpg?source=2c26e567)

说到蜂蜡，可能很多人并不了解，蜂蜡是蜜蜂巢的主要成分，养蜂人在割开蜜盖取蜜、清理蜂箱时都会得到很多，稍微加热就能得到粗蜂蜡，再精细过滤就能得到商品蜂蜡。

天然蜂蜡是一种**复杂的有机混合物**，在古代就是一种重要的蜂产品，即便放在今天，其用途仍很多，例如化妆品行业可以做**润唇膏、口红**，医学上做**牙模、蜡丸**，还可以用来封酒坛等。

于是，我就尝试让蜂蜡更纯净的方法，在摸索了一个星期后，摸索出用两次熬蜡、分粗细两次过滤的方法，得到了纯净的蜂蜡，倒进模具凝固后，明显的艳黄色，很是漂亮！

![](https://picx.zhimg.com/v2-45228e006e553090e9ae67a8dd358b89_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-49a6943d062f8763b45c3cb129421e92_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-3c984373e39a96a6653a5aa300fb84a9_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-7d268cfec089a3e4f962a5da28d985f1_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-d3a9c21b112db38295ae2e3d47c10abc_r.jpg?source=2c26e567)

之后，大块的蜂蜡也在店铺里开始上架了，只是销量不大。

再之后，查阅了一些资料，发现天然蜂蜡在古代是做蜡烛的高档材料，因产量有限，价格昂贵，也只有宫廷和教堂等场所才用得起。于是，我便突然有了用天然蜂蜡制作蜡烛的想法。

说干就干，我用A4纸简单卷了一个纸筒，在纸筒中拉好棉线，再将熔化的蜂蜡趁热倒入纸筒中，凝固后就做成了一根蜡烛。试着点燃，能稳定燃烧，燃烧过程中也没有异味，完全不逊于小时候停电后印象中的石蜡蜡烛。

![](https://pica.zhimg.com/v2-1fb96331a42319cb3917d6c5f4df426f_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-256e3333185677e7f051a501a42c7f4a_r.jpg?source=2c26e567)

简单验证了可行性后，我就在网上买了一批做蜡烛的专业模具，准备做出更好看的成品。

可是，用专业模具做出的蜡烛，成品总是有好有坏，比如有的表面会粘模具壁，蜡烛尾部凹陷严重，有的蜡烛会产生明显分层，有的棉线不在蜡烛中间，燃烧后“流泪”严重，有的蜡烛颜色发黑，丧失观赏价值……

接着，我又不断试验，逐渐改进方法、控制蜡液温度，如

1.用发卡固定棉线位置,棉线始终处于烛体中间；

2.将蜂蜡熔化后继续小火加热到一定温度，使成品既不发黑也不“起纹”；

3.采用2次甚至3次添加蜡液等方法，让冷却后蜡烛尾端不再凹陷等；

4.蜡烛凝固后不要急于取出，放冰箱-16℃冷冻1小时，不仅方便取出，还能保持光泽；

……

![](https://picx.zhimg.com/v2-027cf9929ccf758695d03aebb5fea6ea_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-cbd2e14ea5925bf911062aea65891cf7_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-1ff8e25e1648c4d3ee797f72f2c47031_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-ba233ac5e926a20b99d7e45d39a73f8d_r.jpg?source=2c26e567)




![](https://pic1.zhimg.com/v2-1957e11860879d3bf4ba31482762c09d_r.jpg?source=2c26e567)

总之，整个过程注意好细节，最终的成品越来越趋于完美，这才将蜂蜡蜡烛作为新上架的商品，在淘宝店进行销售，一年来仅蜡烛的销量就突破了1000。

蜂蜡作为养蜂过程中的副产品，从熬煮蜂巢、过滤蜡液，到控制蜡温、固定棉线、冰箱冷冻、完美脱模。得到以上经验，或者说细节要领，我探索了2个月时间。

而以上的内容，且不说细节层面，即便是注意事项，网上根本就没有类似的介绍，完全需要亲自试错、摸索。

![](https://pica.zhimg.com/v2-65ffac5d1a1c447102388a719f1ffae9_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-b7065599436f1d07015c07ee6176c6dc_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-7b866e2ed90917d980bfd6cdf3443859_r.jpg?source=2c26e567)

因此，互联网在今天的确方便了人们查资料，但并不是万能的！互联网上能查到的，多是一些“**初级百科”“基本概括”**之类的知识，缺乏**关键细节**，而一条条只有自己能体会的细节，才是决定事业成败的关键。

而且，对于同一个问题，不同人会有不同的见解，甚至完全相反的答案，需要结合当地情况以及个人实际，进行**甄别吸收**，并不能**全盘照搬！**

正所谓“纸上得来终觉浅，绝知此事要躬行”，互联网能做的毕竟有限。

最后，互联网上确实有很多顶级的思维、名师授课视频，可是，真正能不能学到知识，取决于坐在电脑面前的学习者，而不取决于课件本身。

这就好比减肥这件事，其精髓就是6个字：“**管住嘴、迈开腿**”，可又有几个人能做得到呢？

创作不易，想要了解更多精彩[méi yòng]的养蜂知识，您还可以看看其他回答或文章，都是本人原创作品。或到店铺挑选中意的蜂蜜、蜂蜡等产品，绝对保真保质，感谢支持！

续篇：做机械的为什么一定要下车间。

[做机械的为什么一定要下车间？](https://www.zhihu.com/answer/1992551692764454946)

[蜂蜜取走后，蜜蜂吃什么？](https://www.zhihu.com/answer/1929088051621115572)

[有哪些动物知道近亲繁殖危害大，而刻意避免近亲繁殖的？](https://www.zhihu.com/answer/1936385876239287711)

[蜜蜂为什么会心甘情愿地在人造的蜂箱中筑巢？蜂箱的形状和蜜蜂圆形的窝一点不一样啊?](https://www.zhihu.com/answer/3091538238)


---

# 如何评价b站查成分工具aicu.cc？ 陆可可

**Author:** 陆可可  
**Bio:** 数据清除中，请稍候...(25/null)  
**Avatar:** ![](https://pic1.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/d66a4262bbba052392029eaddf7ccd0f  
**Published:** 2025.12.22 06:00:46  
**Updated:** 2025.12.22 06:00:46  
**Question:** https://www.zhihu.com/question/1890926385213718537  
**Question Created:** 2025.04.03 00:39:41  
**Question Updated:** 2025.04.03 00:39:41  
**Votes:** 185  
**Comments:** 13  
**Type:** answer  

大概是b站自己员工搞的，能捞到接口还能活这么久，一般人也做不到。

虽然说你发的评论弹幕都是自愿公开的，但岁月史书谁也抗不住，毕竟人人都有年少轻狂的时候，有点赛博黑历史再正常不过了。而且有些话脱离当时的语境后就变味了，你比如说小泽刚上台你以为乌克兰已经拉倒底了不能再拉了，结果后来跟毛子打到男丁稀疏。如果把你之前的话拿到现在再说一遍肯定是幼稚可笑，而乐子人最擅长把这点无限夸大，掩盖你辩解的声音，消磨你的精力让你疲于应对，最终给你扣一顶乱七八糟的帽子。

最后给网站一个建议，使用时强制手机号登录，登录后强制绑定b站uid，留档查询记录，让被查的人知道是哪个手机号和哪个b站用户查过他，也能让乐子人下手前多一丝畏忌。当然在国内做这些需要备案等保，不然被举报容易凉


---

# 如何评价b站查成分工具aicu.cc？ Block王

**Author:** Block王  
**Bio:** 放射医学技术员  
**Avatar:** ![](https://picx.zhimg.com/v2-3e651b6e5d07a321de59ed0c1ace3663_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/3854a8826df8024d8413cd7b1fc356fe  
**Published:** 2025.12.19 17:55:46  
**Updated:** 2025.12.19 17:55:46  
**Question:** https://www.zhihu.com/question/1890926385213718537  
**Question Created:** 2025.04.03 00:39:41  
**Question Updated:** 2025.04.03 00:39:41  
**Votes:** 309  
**Comments:** 27  
**Type:** answer  

感觉应该是通过窃取某些api之类，将这个人所有的评论、弹幕汇总到一个也就是这个网页上。

以及这三个按钮可以快速定位到这个人发的那个评论或者是弹幕所在地

![](https://pic1.zhimg.com/v2-52658306f31646893e5671891effc104_r.jpg?source=2c26e567)

简单说就是比如说a在几年前某个内容下面发的一个评论，通过上述这个方式可以直接跳转到这个人的评论的那个地方，不用你费心去找。如果你跳转用的浏览器正巧已经登录了b站，那么你可以直接在下面评论。

**其中的隐患就是:**

假设碰巧被一个乐子人看到了，即使这个评论和这个乐子人想要抖乐子的内容无关，它也会强行逐字去找杠点强行咬文嚼字。

> 我觉得现在国内最奇怪的风气就是所有公众人物都会有不喜欢他的人。
> 然后这些人不会说我不关注了，而是更加关注这个公众人物，就是等有机会带波节奏，不管殃及多大范围、有没有必要都要用上一切手段不留余地地冲。
> 这个畸形点在于矛盾放在了台面上就等个口，这导致很多事情根本没法就事论事，讲不了道理，真的很烦。

如上这是一几年有个总结当时互联网乱象的一个总结评论。所以说利好的是这类人

## 其它目前已知信息

这个东西弹幕锁定只能到23年9月左右，评论内容可能会跟进显示但非实时。目前来看数据在25年9月以前。

**可能涉及隐私泄露:**

这里面的风险就是可以翻出那个人的历史用户名、常用的登录设备，尤其是后者。

比如说随便找个名字中性烂大街的做个示例

![](https://pic1.zhimg.com/v2-746f85bfcd7c7cba2c84e54bc899b240_r.jpg?source=2c26e567)

以上


---

# 【预告】我们训练的最强二次元图像迁移模型 凤洛羽

**Author:** 凤洛羽  
**Bio:** 想要成为合格的剧本家，于是被迫ai创业了（？）  
**Avatar:** ![](https://pic1.zhimg.com/v2-610de393f9ebae6baf25cdf7271f127c_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/90baa178c90f0d68d46418771ec0a42f  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:** 419  
**Comments:** 68  
**Type:** article  

![](https://pic3.zhimg.com/v2-fc818648b498e590f7280fcfb456b384_r.jpg)

目前数据是三万六千组，在H20*8卡上才训了3个epoch，基本验证模型能力没有什么问题。下一步会在数据增加到十万组时再训练一个模型。

目前来看，在二次元方面甚至些微超越了banana-pro，主要表现在立绘+背景直出CG任务的镜头精确控制以及一致性上，特别是基本能保持画风的一致（我现在就忍不住已经在用这个模型出gal和跑团素材了）。

以下为我在comfyui上进行测试的结果整理，输入素材来自互联网，并且能确保绝对没有包含在数据集中。

![](https://picx.zhimg.com/v2-5d7b298dc878901f2149317adb5bbc31_r.jpg)

![](https://pic2.zhimg.com/v2-22d7e64b1b3b155dadfb8063530bc227_r.jpg)

![](https://picx.zhimg.com/v2-54010b75b289e1e3459d22496e0d1351_r.jpg)

![](https://pic4.zhimg.com/v2-a56fd499f8a6b87c95f1ad2e41747a33_r.jpg)

![](https://picx.zhimg.com/v2-22e3573fa805643ca76102b5108941bd_r.jpg)

![](https://pic2.zhimg.com/v2-a05114c7e7534906120103394b50a759_r.jpg)

当然你也可以不用那么死板的先换发型再换服装什么的，直接一步到位，就当参考了个粗略造型，而且能完美保持画风，实现立绘自由，然后再用立绘+背景直出CG实现CG自由（这里输入的图是别人转发我测试的，到底是什么角色我也不知道，我也没玩过柚子……）

![](https://pica.zhimg.com/v2-b7e30e622263a5c59f646a472418a24a_r.jpg)

![](https://pic1.zhimg.com/v2-50d9924458f21232f693394649fbc28c_r.jpg)

![](https://pica.zhimg.com/v2-60fe23b482c1f16ac981592aca3d20dc_r.jpg)

![](https://pic2.zhimg.com/v2-b185c9d6122b9be0e4a4b09b463c82f9_r.jpg)

![](https://pic4.zhimg.com/v2-3b2313d92dd7f13fe8fbe6b3078b8d8b_r.jpg)

![](https://picx.zhimg.com/v2-13192010a5c38ec2c37fd9797028de7b_r.jpg)

![](https://pic4.zhimg.com/v2-83fcd75279d524dc74ed22f63e0887b5_r.jpg)

![](https://pic1.zhimg.com/v2-40b833c62dbc2486d77f6d82a237eb28_r.jpg)

![](https://pic4.zhimg.com/v2-70d7f2b7d80fc5fdb17ac791ce01d061_r.jpg)

下一个阶段会增加任务，同服装替换角色、表情迁移，增加功能服装参考、动作参考，数据上增加水墨、水彩、战斗等数据强化泛化性。

等模型相对比较成熟了就会开源。请期待


---

#  w0fv1.dev

**Author:** w0fv1.dev  
**Bio:** 追求客观的正确性  
**Avatar:** ![](https://pic1.zhimg.com/v2-897a5b3289baad8b67e432da97e6aae4_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/af242c0c26475eb1f58647eb7a8cc7d7  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:**   
**Comments:** 1  
**Type:** pin  

[object Object],[object Object]


---

# 我的独立游戏开发感悟（一） 叫我维C

**Author:** 叫我维C  
**Bio:** 开启人生下一阶段：独立游戏开发  
**Avatar:** ![](https://pic1.zhimg.com/94bdfbb2c4432bce20c365cc351ebb60_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/201d9dad2f494fa63d04ac698d4210ba  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:** 148  
**Comments:** 230  
**Type:** article  

这是我辞职独立游戏开发的第6个月。

今晚是我第一次感到无比的焦虑。

辗转了好久没有睡着。

凭借我10多年制作游戏的经验，我内心明白，也非常清楚再坚持做下去，我一定是可以把游戏做完的。

但是看着银行卡里面一天天减少的存款。

我真的感受到了前所未有的压力。

我也终于体会到，普通人，在没有足够资源的支持下，要做完自己游戏作品有多难。

有时候真的不是自己不想努力。

我辞职回家做，每天差不多16个小时以上的时间在制作游戏中。

每天不断完成的TODO List，让我看到了游戏每天都在进步。

真的尽了自己最大努力在制作了。

只是自己确实资源太有限了。

最近也有几家公司的hr来找，问我要不要去工作，我都是果断的拒绝掉。

我不断把自己的退路切断掉。

我一直告诉自己，缺少的资源和工作机会，还有很多生活上的琐事，这些东西，可能都是冥冥之中对我的考验。

都是试图来诱惑我，放弃自己对独立游戏的制作。

但是我相信没有人可以随随便便成功的。

以此记录，希望有一天我做出一个好玩的游戏，回过头来，感谢今天的自己在努力的克服困难。

![](https://pica.zhimg.com/v2-b7f17e47faa51cea95ad3482dd4a04f2_r.jpg)

2025-12-02更新（最新更新了）

我已经找到了自己的风格了，感谢各位给的意见。

[https://www.zhihu.com/video/1979265285245641755](https://link.zhihu.com/?target=https%3A//www.zhihu.com/video/1979265285245641755)

2025-08-22

更新：游戏现在是这样的，大家有什么建议意见，可以给我提一提，我也努力改进一下，谢谢。

[https://www.zhihu.com/video/1938687285710259234](https://link.zhihu.com/?target=https%3A//www.zhihu.com/video/1938687285710259234)


---

# 我们是国产独游《溯光行》制作组，游戏发售后的销量比较低迷，问题出在哪里？ NocturnalDomina

**Author:** NocturnalDomina  
**Bio:** 不辩经 只删评 不证伪 专拉黑  
**Avatar:** ![](https://picx.zhimg.com/v2-5206ab5aec73aef94706e79cb0d08f13_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/2aa322a98feb669e6bcc29aa44a77251  
**Published:** 2025.12.17 19:38:54  
**Updated:** 2025.12.17 19:41:59  
**Question:** https://www.zhihu.com/question/1984678445846897903  
**Question Created:** 2025.12.17 17:36:55  
**Question Updated:** 2026.01.08 22:29:54  
**Votes:** 203  
**Comments:** 17  
**Type:** answer  

![](https://picx.zhimg.com/v2-dd1fa8bba5039b11008a984725e06abe_r.jpg?source=2c26e567)

我曾经在另一个问题下写过一篇类似的回答，当时开过一个玩笑，贵游在愿望单里的时间是我steam生涯第二长的游戏，第一是TUNIC...

其实你游光探索部分做得还是可圈可点的，虽然有一些冗余设计，但在难度和主次要素分布上上至少知道一个度，解谜要素的复用性和逻辑都还算在线，就是不知道是正式版改了碰撞还是测试版我运气好没遇到，一些可移动的素材会疯狂卡墙然后抽搐，但整体来说可以给及格分的

问题的根源就在另一部分，战斗




先给结论吧，从结果上来看，溯光行和TUNIC犯下的问题的表现是几乎一样的：作为一个探索解谜为主导表现和展示的游戏，战斗部分完全拖累了整个游戏的行进节奏和玩家体验

即使是在吃这类玩法玩家的群体中，被战斗打得焦头烂额到退游的人也大有人在。 当然内核部分是完全不同的，TUNIC是在一个完整的仿魂系逆天设计逻辑链下产出的一个自恰的，就是要让玩家感受到难度和战斗节奏捉襟见肘游戏设计，但溯光行不是，我对这个游戏的战斗体验第一感受是，制作人真的只是爆了一个类似于《回溯》的概念，然后生搬硬套到当下看起来最流行的《魂系》体系中，别人有极限闪避，我们也有，别人残废血量，我们也三刀死，别人有jump scare式的偷袭地形和怪物配置，我们也弄，而且弄好几次。




于是溯光行在战斗部分犯的最大的两个问题就来了，一前一后

前面是基础战斗逻辑根本不符合常理和直觉：几乎所有的战斗动作都以提前划出回溯路线为基础，于是悖论产生了：琪一，怪物和玩家的交互动作本身就是偏随机，或者说不可控的，在这种状态下又如何稳定的产生背击机制？ 其二，玩家和怪物的直接交互是第一手信息，但玩家提前划出路线是第二手信息，在超大信息流的交互下，有多少玩家可以完整掌握当前的交互信息，做出最有利的动作？别忘了噢，一切交互的前提是玩家已经划出了一条本身就不知道正确与否的回溯线。第三是单独的问题：部分boss给出的谜题是否过于不可解了？比如立方体boss的秒射，我至今都没想到有什么正常的躲避方法。如果想要在战斗中给出高难的谜题，就不要以高速作为交互基底，反之亦然，高速战斗请以尽量简化的信息向玩家传递他需要完成的高难操作

后面是角色人物基础机能的爆炸性残废和游戏作为act战斗基础设计的残缺导致的极低容错，这部分其实没什么展开的，没事不要学魂，你们不是宫崎英高，要学也给玩家留好后路。你说你的血量很残，三刀就死，那就把血瓶给得慷慨点，如果血瓶也捉襟见肘，那就把游戏的基础立回和受身机制做好，现在这游戏的状态就是，一被打就只能原地呆着，对面进攻密集就直接被原地或者倒地抡到死，喝口血傻在原地几乎走不动，一副“快来打我啊”的状态，血量又还是老生常谈的皮包骨头，现在这个状态受身类的也没戏了，不开玩笑就是直接把总血量无脑X2X3游戏体验都能好一大截







说了那么多都是游戏内容上的建议。不过其实你我懂的都懂，在国内发售游戏，销量低的原因，那肯定在其它方面。


---

# 2025年做独立游戏还有前途吗？ 叶兰舟

**Author:** 叶兰舟  
**Bio:** 世界观架构师，独立游戏人，武斗派中年宅男  
**Avatar:** ![](https://pica.zhimg.com/v2-96382175080b8d8da21d9b1cc29c9439_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/4320fe5aa8680a01adf9c0cb3ef8d034  
**Published:** 2025.07.29 16:32:41  
**Updated:** 2025.08.05 18:19:51  
**Question:** https://www.zhihu.com/question/1905885150400721509  
**Question Created:** 2025.05.14 07:20:29  
**Question Updated:** 2025.05.14 07:20:29  
**Votes:** 134  
**Comments:** 25  
**Type:** answer  

这时候就又要把我做的这张图贴出来了：

![](https://picx.zhimg.com/v2-55b23595c0f0571b2ff864d47f19771b_r.jpg?source=2c26e567)

当然大多数独立开发者可能不会这么惨，但体感是真的差不多的。

Steam每天上架的游戏数量已经超过80款，一年下来就是近3万款游戏。但根据SteamSpy的数据，超过80%的独立游戏销量不足1000份，60%的游戏连100份都卖不到。换句话说，你做出来的游戏大概率会淹没在茫茫游戏海中，连溅起水花的机会都没有。

> 根据评论区的同学修改一下：这 80 个是包含了软件、原声集和DLC的，实际游戏本体的话每天是几款到几十款不等。不过不太影响结论……

没错，2025 年做游戏已经简单很多了，有 AI 的帮忙，有各种全新的工具和快捷的开发方式，但做游戏的核心还是你的思想和能力。

更关键的是——

**你的卖点是什么？**

**你的卖点是什么？**

**你的卖点是什么？**

重要的事情说三遍。

是玩法上有革新，美术上有独特的风格，还是文本足够优质？

独游不是手游，无法靠买量来获取大量用户，广告也非常有限，唯一获得一些流量的希望，就是你的游戏能有独特的优势，能让你的目标玩家群口耳相传，产生自发性传播。

这不是新手能做到的，甚至很多程序或者美术转型，做了很多年游戏的老游戏人都不行。之前跟独有圈子的老人沙露聊起来，就是觉得如果选题不让人觉得有趣的话，干脆不要做。

这都只是“要不要做”的部分，没到“怎么把游戏做出来”的部分，后者才是真正痛苦的部分……

到这一部分就需要制作者真的自己做过一些产品，才能很好地进行决策了。在有限的时间和资金压力下，怎么把东西做出来，能上线，这也不是新手开发者能随意做到的。

总之，这绝不是条容易的路子……这跟工具和开发的便利性无关。

想要自由地开发，就要承受自由的代价。


---

# 利用AI在独立游戏项目中大干快上 HkingAuditore

**Author:** HkingAuditore  
**Bio:** 每天都觉得自己很逊的技术美术´_&gt;`  
**Avatar:** ![](https://pic1.zhimg.com/v2-2509559673dfd585dbef9fae5e9599cb_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/89ec191d66dc649f66bb0b6f08544eb9  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:** 863  
**Comments:** 55  
**Type:** article  

![](https://pic2.zhimg.com/v2-346b0aca5d59cc79c94f9421f0c72505_r.jpg)

AIGC游戏开发研究所群：546526159。

转载、引用请告知

> - -看这篇文章的人比看游戏本体视频的人还多，引个流[【独立游戏】玩具帝国 5月更新演示_哔哩哔哩bilibili_演示](https://link.zhihu.com/?target=https%3A//www.bilibili.com/video/BV1UT411h7H9/)

## 背景

先说背景，《玩具帝国》是一个玩法决策复杂、画风独特性强的策略游戏。

![](https://pic2.zhimg.com/v2-fbb9f7a46ed75f09fc267f09fe84b2e3_r.jpg)

游戏基本玩法：[玩法](https://link.zhihu.com/?target=http%3A//toyempires.top/docs/%25E7%25AE%2580%25E4%25BB%258B)。

Demo地址：[Demo](https://link.zhihu.com/?target=https%3A//store.steampowered.com/app/2773270/_Toy_Empires/)。

## ml-agent

《玩具帝国》的人机AI采用的是Unity的ml-agent，通过强化学习训练能够进行长周期复杂决策的人机AI。原来写决策树很痛苦，现在可以直接挂机炼丹。

> **为什么选择自己开发ai**
> 没有选用调动ChatGPT之类线上接口的原因有很多，首先这是人机AI是在离线游戏模式使用的，而且对决策的实时性有要求，因此不可能接受连入一个线上的接口。而且《玩具帝国》需要兼容低配置甚至移动平台，所以对这个本地AI运行的性能也有很高的要求。

![](https://pic1.zhimg.com/v2-67ae71ea86a180ff1d29dd96493a80ae_r.jpg)

ml-agent里给的实例都算是比较简单的决策问题，一次任务的周期也很短，《玩具帝国》的就比较长，决策也很复杂，所以我们使用了“即时奖励”和“预测奖励”进行长周期决策AI的训练。因为数学模型是可调的，所以AI依然可控，只需要根据通过简单的参数调整，就可以改变AI的决策倾向。

![](https://pica.zhimg.com/v2-a34d3d3b48c7b2e56752ffb3e8c14e06_r.jpg)

推公式还是要一步步推的，希望以后有个AI帮我把这部分工作也做了。

![](https://pic1.zhimg.com/v2-c0a6ef253f8ebbd69fe1c7b0a65228e4_r.jpg)

为了让每次输入的向量等长，在观察时，场上的三条路被分成了许多块，在每一块上，统计在其上单位的平均数值或求和，最后加上单独的数值，组合得到完整的向量。

![](https://pic2.zhimg.com/v2-b869614d7b4820d1114007d8dd261111_r.jpg)

因为不同的文明玩法不一样，但是基本的规则又是一致的，所以先训练一个能掌握基本规则的底模。从教会AI基本的分配工人开始，每次增加训练一项新科目，不断迭代完善，就能得到一个掌握大致规则的底模。在这个底模的基础上做分支训练，就可以得到适用于不同文明策略的模型。

![](https://pic1.zhimg.com/v2-3ba9bdb9c4654d3b6daad2c295b11f8e_r.jpg)

为了避免过拟合，每个Episode前，都对初始条件进行一次随机，譬如不同的资源水平、不同的敌人强度，每次决策时也会对AI的可选项进行随机Dropout，总之尽可能地让AI在训练时接触到所有的可选行为。

![](https://pic3.zhimg.com/v2-e4ddd9ca9be36fa25adec3c615eba17c_r.jpg)

ml-agent里默认的决策间隔非常短，但毕竟《玩具帝国》里不需要每时每刻都进行决策，所以我人为地把间隔时间拉长了，这样也能更好地让AI把自己的决策和结果关联起来。

![](https://pic4.zhimg.com/v2-869f6a09af49a22b889654ceb681cad3_r.jpg)

最后基本上只要放着AI在场景里挂机就好了。

![](https://pic3.zhimg.com/v2-254a0abc098b778c628f150914f4f49c_r.jpg)

进阶一些的话，可以检测一些AI的精彩操作给奖励。毕竟我主要是想训练AI对战略上、宏观的把握，一些小的战术配合可以简单地引导一下，比如在前排有肉盾的时候派出远程。

经过这些调教之后，AI在战术上的表现强了不少。比如先派骑兵突击，再跟上工人采矿：

![](https://pic1.zhimg.com/v2-9ff6b364f2e3e375a3787bc600d9d638_r.jpg)

比如用近战单位保护远程单位：

![](https://pic3.zhimg.com/v2-cb7365351522fea9818a575f8224089e_1440w.gif)

比如偷袭（虽然只偷掉了我两个工人）：

![](https://picx.zhimg.com/v2-2f5c70e2f32ce6ed8b383ebda9c4f0df_1440w.gif)

在训练效果上，修改之后的明显比原生ml-agent强不少：

![](https://pica.zhimg.com/v2-47bb3e78ee966626d37ba6d426da38fa_r.jpg)

从全局战略上看，也能看出AI具有很强的倾向性：

![](https://pic4.zhimg.com/v2-48b01504bb69e09b673bc667c682300d_r.jpg)




![](https://pic4.zhimg.com/v2-343cc57ab904c199fb4baa90b85cb9d9_1440w.jpg)

由于《玩具帝国》需要在移动平台实时运行，起初我还很担心ml-agent在移动平台上跑不动，后来证明我的担心是多余的。在小米10上以最高画质运行基于ml-agent的极难AI，也能维持在45FPS左右。

![](https://picx.zhimg.com/v2-d4231743f01ad479a49a39d57df5e877_r.jpg)

## AI绘画

游戏里的科技树图标实在太多了，根本画不过来……在没有AI画画之前，我都不敢想啥时候能把这些玩意填完。

![](https://pic3.zhimg.com/v2-dd8034df62ba2b41813c36591468f666_r.jpg)


AI画画出来之后，我抱着满腔热情去试，结果发现三个严重的问题：

- 全TM在画二次元，没有适合的风格，想用到游戏里必须自己炼丹。
- 画出来的画好多都是美少女看镜头，没有叙事性，没法当icon用。
- 已有素材几乎全是中世纪大胡子男人呆呆站着，图生图不可行，训练出来的泛化性也很差。

一开始的规划是：

- 画出卡通简笔画风格。
- 资产条件：有98张人像和8张UI，且人像全是男人。
- 需要能产出带有该画风的具有一定叙事内容的图像，内容形式一定要多元。

![](https://pic3.zhimg.com/v2-7fa7733e996011fa136cde240e1c0bf0_r.jpg)

我尝试了最开始的Embedding：

![](https://pic1.zhimg.com/v2-6353d9d07b7c8f6400b2c55cebe7dbfe_r.jpg)


后来换成CKPT（画和训练集里接近的小人已经不错了，但泛化性还是不理想）：

![](https://pic4.zhimg.com/v2-061b0dc697825d005d37c3a047cce043_r.jpg)

然后是Lora（好！很接近了！）：

![](https://picx.zhimg.com/v2-ec57397561a4ba6df1682296be37837d_r.jpg)

最后是Locon：

![](https://pic2.zhimg.com/v2-e1882fc04b4facc1ac6bcee82376a8df_r.jpg)

现在这个版本画人画物画事都很完美了，甚至能从全是大胡子男人的训练集里学会画女人：

![](https://pic2.zhimg.com/v2-a05acf621299d728d682a0cb906e00bf_r.jpg)

![](https://pica.zhimg.com/v2-8b3e55a63dd375a56362107a471691ae_1440w.png)


从中世纪里摘出摩托车：

![](https://picx.zhimg.com/v2-3d61e04b521fa392428f29955d004c8b_1440w.jpg)

为了引导AI画出前景后景区分明显的画，还专门画了一组引导图。分别是只保留前景、只保留背景、全图共三张图，在Caption里打组：

![](https://pic4.zhimg.com/v2-bfcb60e086bea10bafd6bf981bd8ee93_r.jpg)

由于训练集中人物朝向太固定，此处额外做了镜像处理。

![](https://picx.zhimg.com/v2-56228e970078efcc76d6e18bbac8798f_1440w.jpg)


由于训练集缺乏建筑、风景、完整图像，为了丰富训练集，我先进行一次时间较短的训练，并用得到的模型生成与目标画风类似的建筑、风景图像，再将这些图片放回训练集。

还做了正则化：

![](https://pic4.zhimg.com/v2-3ece591f69474d8ab6241fa58b150307_r.jpg)

模型出来之后，也不是说生了图就能直接用，像一些比较复杂的图，我的方案是先去掉我的微调模型用底模生一张图，然后用ControlNet加上我的微调模型出新图。下面从左到右就是：底模+微调，底模，底模+微调+ControlNet。

![](https://pic2.zhimg.com/v2-165b0a901b4ef43d63738631021fa3b7_r.jpg)

最后效果不错：

![](https://pic1.zhimg.com/v2-36355131b06b402b71ebd79ecb9ab960_r.jpg)

而且这个模型在美术做设计参考的时候也能用：

![](https://pic3.zhimg.com/v2-e1c9672360c63371bd6cf21f08091a3c_r.jpg)

## AI代码

单独给AI从零开始写一些小功能没有任何问题，相信这类案例已经不少了，但是《玩具帝国》的情况不足以让AI从零开始，而AI还没到可以完全写出程序架构的时候。 如果让AI给我写小功能的话，我写的程序框架又比较复杂，而现在的AI还不足以把我所有的程序框架学会，所以我的解决方案是，把不方便配表而又需要撰写的代码交给AI。这种代码的特点是简单、模板化、多是调用API，只牵涉小部分的特殊逻辑。 以Buff系统为例，游戏里的Buff特别多，有些Buff带有不同的执行逻辑，不方便统一配表，撰写这些Buff的代码又非常耗时。 试了下用Cursor让它仿照我的代码写一些Buff，发现生成结果可以直接用。

![](https://picx.zhimg.com/v2-04e12386e3812b5544abd2a330a8753f_r.jpg)


不过目前Cursor生成复杂代码还需要复杂的前期调教，多开几次之后觉得很麻烦，用多了之后发现还是ChatGPT比较方便。

以下面这段代码为例，我给出的模板代码是对ProducebleCombatUnitBase单位的Attack、Defence、Speed属性进行调整：

{// This is a buff240000,()=>newUnitBuffBase(newList<UnityAction<BuffBase,BuffContainerBase>>{// When the Buff is enabled, it affects(b,c)=>{// Buffs that only work on ProducebleCombatUnitBase unitsvaru=((UnitBuffContainer)c).unitasProducebleCombatUnitBase;if(uis{}){// Scales units to 50% attacku.SetNumericalValueBuff(BuffNumericalValueType.Attack,false,.5f);// Scales units to 50% defenceu.SetNumericalValueBuff(BuffNumericalValueType.Defence,false,.5f);// Scales units to 80% speedu.SetNumericalValueBuff(BuffNumericalValueType.Speed,false,.8f);}elsethrownewBuffUnitTypeError();}},newList<UnityAction<BuffBase,BuffContainerBase>>{// When the buff is disabled, restore the effect(b,c)=>{varu=((UnitBuffContainer)c).unitasProducebleCombatUnitBase;if(uis{}){// Restores unit's attacku.SetNumericalValueBuff(BuffNumericalValueType.Attack,false,2f);// Restores unit's defenceu.SetNumericalValueBuff(BuffNumericalValueType.Defence,false,2f);// Restores unit's speedu.SetNumericalValueBuff(BuffNumericalValueType.Speed,false,1.25f);}}},false){buffID=240000,isSuperimposable=false}},

我将多段类似的代码喂给AI后，询问它是否学会了，并让他总结规律：

![](https://picx.zhimg.com/v2-4c54099f7da5bf0adf4149b0187b2c31_r.jpg)

然后，尝试让它撰写一个类似的：

> Then please write a Buff, which acts on a Musketeer, and Musketeer is a kind of unit.What it does is make its CostFood 1.5 times what it was.

{103,()=>newUnitBuffBase(newList<UnityAction<BuffBase,BuffContainerBase>>{(bb,cc)=>{varucc=ccasUnitBuffContainer;varuccu=ucc!=null?ucc.unitasMusketeer:null;if(uccuis{})uccu.SetNumericalValueBuff(BuffNumericalValueType.CostFood,false,1.5f);elsethrownewBuffUnitTypeError();}},newList<UnityAction<BuffBase,BuffContainerBase>>{(bb,cc)=>{varucc=ccasUnitBuffContainer;varuccu=ucc!=null?ucc.unitasMusketeer:null;if(uccuis{})uccu.SetNumericalValueBuff(BuffNumericalValueType.CostFood,false,1.0f/1.5f);}},false){buffID=103,isSuperimposable=false}},

教AI就像哄小孩，有正确的需要及时肯定，不过似乎AI对否定非常敏感，指出错误的时候要克制，不断完善它的经验。 现在尝试写一个复杂的Buff，作用于一个Worker，Buff生效后，Worker的生命值和速度将翻倍。 Buff失败时，如果Worker的HP不大于50，Buff的效果会恢复，否则不恢复。 这里用到了取Worker的HP的操作，所以我需要告知AI怎么取一个Unit的某个属性：

> if you want to get a certain attribute of a unit, such as Worker's HP, you can use "Worker.HP" to get it.Let's write a slightly more complicated Buff, which acts on a Worker, and Worker is a kind of Unit. When the Buff takes effect, the Worker's HP and Speed will be doubled. When the Buff fails, if the Worker's HP is not greater than 50, the effect of the Buff will be restored, otherwise it will not be restored.

{105,()=>newUnitBuffBase(newList<UnityAction<BuffBase,BuffContainerBase>>{(bb,cc)=>{varucc=ccasUnitBuffContainer;varuccu=ucc!=null?ucc.unitasWorker:null;if(uccuis{}){// Double Worker's HP and Speeduccu.SetNumericalValueBuff(BuffNumericalValueType.HP,false,2);uccu.SetNumericalValueBuff(BuffNumericalValueType.MoveSpeed,false,2);}elsethrownewBuffUnitTypeError();}},newList<UnityAction<BuffBase,BuffContainerBase>>{(bb,cc)=>{varucc=ccasUnitBuffContainer;varuccu=ucc!=null?ucc.unitasWorker:null;if(uccuis{}){// If Worker's HP is not greater than 50, restore the Buff's effectif(uccu.HP<=50){uccu.SetNumericalValueBuff(BuffNumericalValueType.HP,false,0.5f);uccu.SetNumericalValueBuff(BuffNumericalValueType.MoveSpeed,false,0.5f);}}}},false){buffID=105,isSuperimposable=false}},

完全能用…… 再进一步，让它撰写能作用于多个Unit对象的Buff：

> Write a slightly more complicated Buff, which acts on the Unit. If the Unit is a Spearman, then his Attack will be increased by two. If the Unit is an Archer, then his Defense will be increased by two.

{105,()=>newUnitBuffBase(newList<UnityAction<BuffBase,BuffContainerBase>>(){(b,c)=>{if(cisUnitBuffContainer){UnitBaseunit=(casUnitBuffContainer).unit;if(unitisSpearman){unit.SetNumericalValueBuff(BuffNumericalValueType.Attack,true,2f);}elseif(unitisArcher){unit.SetNumericalValueBuff(BuffNumericalValueType.Defense,true,2f);}}}},newList<UnityAction<BuffBase,BuffContainerBase>>(){(b,c)=>{if(cisUnitBuffContainer){UnitBaseunit=(casUnitBuffContainer).unit;if(unitisSpearman){unit.SetNumericalValueBuff(BuffNumericalValueType.Attack,true,-2f);}elseif(unitisArcher){unit.SetNumericalValueBuff(BuffNumericalValueType.Defense,true,-2f);}}}},false){buffID=105,isSuperimposable=false}},

总之，ChatGPT在应付简单的、模板化的代码时还是比较轻松的。核心的步骤是：

- 给它看你的代码模板，确认其中的注释清晰。
- 如果有新的API需要调用，需要及时告诉它。
- 说出你的需求。

## 工作流

《玩具帝国》的AI工作流如下：

![](https://pic2.zhimg.com/v2-3d0a2b61efad3b0d10a6a1577770443b_r.jpg)


总之，到目前为止，AI作为开发辅助的工具表现还不赖。能确定的是，它目前还不足以完全替代开发者进行开发，对复杂的项目也远远没到“言出法随”的境界，但作为生产力工具加速玩法验证和Demo制作已经完全没有任何问题了。**对独立开发者是一个绝对的福音。**


---

# 纯聊天，0操作，我用AI两周做出了一款P社级的复杂策略游戏 HkingAuditore

**Author:** HkingAuditore  
**Bio:** 每天都觉得自己很逊的技术美术´_&gt;`  
**Avatar:** ![](https://pic1.zhimg.com/v2-2509559673dfd585dbef9fae5e9599cb_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/89ec191d66dc649f66bb0b6f08544eb9  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:** 365  
**Comments:** 139  
**Type:** article  

![](https://pic2.zhimg.com/v2-7a26cf1aac99a5afc27284352f143291_r.jpg)

**游戏试玩链接 1： HTTPS://hkingauditore.GitHub.io/civ-game/  ，链接 2：HTTPS://toyempires.top/civ-game/**

QQ交流群：546526159

**转载、引用请告知。**

## 什么是“0 操作”？

咳咳，我得先说明白，这里的“0操作”还不至于到“只说了几句话，然后把电脑挂着就在那看AI操作”的程度，我这里说的“0操作”指的是我**彻底不参与一切和开发有关的工作**，这里的“不参与”包括：**不写一行代码，不对代码进行任何修改、不写任何成体系的策划案**——好吧，也就是Vibe。在这两周期间，我做过的事情只有：**1.把代码传到github上；2.玩这个游戏；3.和AI打嘴炮**。

在两年前，我就尝试深度接入AI开发的工作流（[利用AI在独立游戏项目中大干快上 - 知乎](https://zhuanlan.zhihu.com/p/626004957)），当时的我完全没有想到这一天这么快到来——当然今时不同往日，其实就算是现在这副模样也不是什么新鲜事了，毕竟现在各大AI应用都在用这个做卖点搞宣传了——当然，其实如果只是很简单的应用我也不至于到这么震撼，毕竟我现在隔三差五就能在小红书、B站上刷到各种“教你用AI做游戏”的视频，但必须承认在那些案例里游戏都**异常简单**，说是简单的功能拼凑甚至是随便找个开源代码下载下来改个名字也不为过；但是，但是，当这次我试图去做一个**功能极其复杂、各种系统盘根错节、数值一环扣一环、没有先例的游戏**，我居然完全地、彻彻底底地成功了——作为一个长期有技术焦虑症的游戏开发者，我一直害怕自己技术落伍或力不从心，甚至于一直会强迫自己要在完全掌握一门技术后才敢去使用它，但这次完全颠覆我十几年游戏开发生涯的经验，原来我可以在完全不掌握甚至不了解一门技术的情况下（这次AI做的是纯前端游戏，本人上次碰前端相关的东西还是六年前），用完全“灵光一闪”的只言片语就这么快地实现自己的想法，这种感觉只有我小学的时候做白日梦才敢想。

## 多年以后，面对硅基生命，我会回想起自己打开 Gemini 3 的那个下午

![](https://pic1.zhimg.com/v2-0f5267bb7017faae0d3519c871f9e58c_r.jpg)

一切的起源只是因为Gemini3更新，想试一下Canvas，就随口编了一个“放置游戏”让Gemini老师去写。结果真给Gemini老师写出来了，甚至还能分享链接出去玩。  我把 demo 丢到群里，大家的反馈还挺不错。

幻想了，又幻想了：“既然大家觉得好玩，那我是不是可以……再加一点？” 于是我开始给它加自己的想法：

- 加一点经济系统不过分吧？
- 纯挂机经济有什么意思，要加就加市场经济，来点供需、来点产业链、来点税收。
- 加一点阶层系统也合理吧？
- 都有外交系统就更像样了，那得点军事吧？
- 这不得加点事件？
- ……
- 我去，这不就是维多利亚3。

为了让群友能更方便地玩到更新（我真不明白Gemini为什么每次更新代码都要生成一个全新的链接），我做了唯一一次比较像“动手”的事：

- 把 Canvas 代码导出来
- 按 AI 的步骤部署到了Github Page

当然，这一系列流程也是AI指导我的，我只要按着他说的做就行，如果不是担心安全性问题我觉得这一步完全交给AI也不是什么问题。

## 我要做最恶劣的狗策划

接下来，我把活拆给了这三位鼎鼎大名的AI老师：

- Claude：主力，什么活都能干，基本相当于“全能开发 + 细节策划”，最大的问题是额度太少了，不然没后面两位什么事了。
- Codex（ChatGPT）：副手，什么活都能干，也能审查代码，虽然用你主要是因为Claude额度太少了。
- Gemini：先和他说我的点子，让它给一个Prompt，后来发现其实不太需要这一步，因为Claude会自动帮我想好细节。偶尔让她写写代码，大多数情况下让它锐评游戏好不好玩，因为她给的情绪价值太足了。项目刚开始还没有支持Code Assist的Gemini3，所以大多数情况下用的是Gemini2.5，体验很不好，但3 Pro支持后体验要好上不少。虽然用你主要还是因为Claude额度太少了。

而我要扮演的就是在即便是GameJam都是最恶劣的那一类策划：只负责提出空有两三句方向的点子，对细节实现一笔带过，完全没有一点成型的案子。  我做的事情就是：**不断把脑子里的想法讲出来，**如果AI做不了我就压力AI。

![](https://pic3.zhimg.com/v2-a3418a389e6756d849ff55da30dafade_1440w.jpg)

比如我会这样说（原话）：

- “现在页面顶部有“读手动挡”和“读自动挡”，太重复了没有意义，将他们合并成一个按钮，做成二级菜单。”
- “请帮我重构人口职业分配逻辑。当前逻辑每一帧都会根据优先级强制重置所有人的职业，导致“基于收益的转职”完全失效。”
- “我希望侵略性强的国家能更加主动地开战。”
- “我希望我能在外交面板看到外国当前的大致兵力，国家关系越好这个数字越准确。”
- “帮我把事件的效果放在UI上，不然我不知道发生了什么。”

然后 AI 去实现，跑出来，我去玩，玩着玩着发现不对劲，再把问题甩回去：
“这里太强了”“这里太无聊了”“这里逻辑不闭环”“这里玩家会卡死”……

当了十多年开发的我第一次体验到了当无良狗策划的快感，但不得不说这个过程我也不是完全没干一点活，**虽然不写代码，但并不是“没干活”。只是干的是另一种活——靠一点语言艺术不断抽AI牛马的鞭子。**

而且，得益于我有做游戏策划、开发、美术的经验，我可以用相对比较准确老道的语言和思路指导AI“先做什么、再做什么”，并告诉它注意处理哪方面的问题——当然也可能是我在自作多情给自己抬咖，但我确实感觉这样子Vibe出来的代码更成体系，游戏系统也更加自洽。

## AI 太好用了你知道吗

最后这个东西长成了一开始完全不敢想象的庞然大物。

![](https://pic2.zhimg.com/v2-ca49317e3a9fa0112b60564de49d75bd_r.jpg)

![](https://pic2.zhimg.com/v2-65cc3cfb5e7ab0d262b1ba066535b3c3_r.jpg)

![](https://pica.zhimg.com/v2-0fa7c7754785541f7b6140401aa48d9c_r.jpg)

![](https://pica.zhimg.com/v2-f379c654a3329f6600084a4ea536074e_r.jpg)

![](https://pic2.zhimg.com/v2-9e4549c0f4b34722b7201573da1cbf3b_r.jpg)

![](https://pic3.zhimg.com/v2-c8ba5fe6d9350764685d32d998c894da_r.jpg)

![](https://pic2.zhimg.com/v2-1bd4748ff0afe89d5d64f7d30f292fad_r.jpg)

![](https://pic2.zhimg.com/v2-f634b4e125cb9dbeab13c7f772c1af0b_r.jpg)

![](https://pica.zhimg.com/v2-188f989e7d0f08980506d153ec112358_r.jpg)

![](https://pic2.zhimg.com/v2-3d3bc9eafc6b3674deaca0f380b7dedb_r.jpg)

![](https://picx.zhimg.com/v2-61a00e8ac575437b3216098d4ef19337_r.jpg)

甚至AI还能一键帮你打好包……

![](https://pic4.zhimg.com/v2-62a9297f6d8d80dcd52c2635db1581f1_r.jpg)

如果一个问题解决不了，他甚至还会迂回。

![](https://pic4.zhimg.com/v2-dbad3eb73b6dc3ff6d733068f8c5f94f_r.jpg)

**这个系统复杂得离谱，但居然真的很好玩。**它已经有了一股很浓的“大型策略游戏”的味道，甚至于说换个皮就可以作为“手游版P社”登堂入室了，经济、阶层、外交、军事、事件……互相牵扯，形成一个庞大的策略网络。

最魔幻的一点是：玩着玩着你会忘记它是 AI 写的。
因为它不是“能跑的 demo”，而是“需要时刻思考的”的自洽的系统。

## 怎么当好一个 AI 老板

下面来复盘一下，现在的AI到底已经进化到什么程度了，他能做什么不能做什么。 这是我两周里最明确的体感结论：

- Gemini 3：皇帝的太监 虽然Ge老师这两周被吹得天花乱坠的，Canvas 确实很适合起手：它能让你从“一个想法”瞬间变成“一个能跑的东西”。  但是如果代码一长、系统一复杂，它就容易开始飘，尤其是细节容易出幻觉；更重要的是，它好像比起真的干活更注重给我提供情绪价值，尤其比起Codex和Claude的诚恳和直言不讳，它更注重于把我哄得开心，让我有时候甚至有一种它为了让我付钱续费在向我谄媚的感觉（天啊，谁家太监）……当然，他思考的能力还是很强的，如果和它强调“你是一个坚定的XXX”再去和它聊天，它还是能经常说出一些有理有据且还真的能让我反思的观点，而且用一种及其拟人和讲道理的形式与我沟通，这比起不近人情的GPT要好上不少。
- Claude：伟大的全栈 Claude 是真正的主力中的主力、牛马中的牛马。从写代码、补系统、改机制、补文案、做优化，它都能接得住。最关键的是：它很擅长把你“模糊的想法”翻译成“可执行的结构”，而且这部分“可执行的结构”非常合理，即便它不是你真的想要的东西，它也能提醒你明确自己真正想要的是什么。要不是因为额度不够，我可以把两周的工作放到三天内做完。伟大，无需多言。
- Codex：可怜的外包 如果说Claude老师是正编，那Codex就是外包。不是因为它菜，相反它也很强，只是因为Claude太好用了，而我又最先用Claude，掩盖了它的光芒。有点想说“要是Claude便宜量大就没你事了”，但是仔细一想这么说还是太伤他了。哀哉！既生Claude何生Codex！

顺手推荐一下我用的插件，Google AntiGravity和Codebuddy，非常舒服。

## 不需要我了吧……

一行代码不敲的我，自然沦为了AI的QA。 AI 在实现过程中出现幻觉，这难免。Vibe的事实就是：**你不是在和“可靠的专家”合作，而是在和“一个偶尔胡说八道的高产实习生”合作。**所以人的价值反而体现在 QA 上：要去点、去玩、去试边界；要去找“AI有没有编出来不存在的东西”“会不会崩”“会不会无限刷”“会不会出现死局”。 我最常用的一招是：**新开一个对话，让 AI 去查 AI。**把 Claude 的输出甩给 Codex，或者甩给它自己，让它做 code review / 逻辑审查 / 反例测试。——不过效果有限，大多数情况下你还是得亲自去骂它，而且可能还得不止骂一遍，最好是生成控制台记录，带上证据一起去骂他。

在数值设计上，AI受到上下文的限制对于大型的、复杂的游戏数值平衡设计有些捉襟见肘。但如果在上下文中显性地强调算法、公式的话，这一问题能有所缓解，虽然缓解的程度有限，我猜测主要是因为AI难以理解游戏的“玩法”，而缺少了对玩法的认知导致AI对游戏进程中的数值积累没有概念。

AI在美术上的表现也一言难尽，虽然它能写出有质感的css、平滑动效，但在许多基于视觉和易用性设计的UI、排版上，它们就力不从心了。另外一点，如果要考虑到更好的画面、更优的性能，我们当然得使用游戏引擎，但在引擎环境下，AI Agent还不足以让我们当甩手掌柜，尤其是考虑到还有场景、UI、材质的活，AI就更无能为力了。虽然我相信这并非AI不能，而是Agent暂时还没办法如此深度地嵌入。

同时，在遇到多格式文件的复杂处理时，AI还是捉襟见肘。众所周知Banana的绘图极其强大，而AntiGravity甚至也支持“帮你去生成图片导入到工程”，但Banana的生图都有个烦人的白底，即便是最新手的开发者都知道要切图、抠图，但AI不知道。他只会说：唉，好吧，我会帮你写好脚本，你还是得自己操作一下。

![](https://picx.zhimg.com/v2-b31f19b9e314a5c2c4e0b1e22addbebd_r.jpg)

虽然从结果上看也不是不行，但一者是扯皮的时间实在太长，二者是生图的额度实在太过于有限……

![](https://pic2.zhimg.com/v2-4f6a81212982a87111054bfe5ab6be9f_r.jpg)

又回到了老生常谈的话题——我们开发（哽咽）……以后会变成什么样子……

**人可以不具备具体技术实践能力（比如我就不会前端），但得具备这三种能力。**

- 清晰的想法：你知道你要什么体验，不然 AI 只能陪你发散
- 清晰的规划：你能把“我要一个复杂游戏”拆成阶段目标
- 对技术有概念：至少在大方向上能指导 AI（结构怎么搭、哪里该重构、哪里该收敛） 所以代码门槛降低了，但“方向感门槛”还在。一个当不了设计师的开发不是好开发。

## 怎么当好设计师

下面是我觉得最稳的一套推进方式：

- 能跑就行 目标只有一个：能玩。 先让系统跑起来，再通过后续的对话逐步修改细节。切忌追求一次完美而反复回滚。
- 每次只追加一个系统 一次加太多东西，想要多快好省必然翻车。要一个系统一个系统叠上去。
- 让AI把代码拆开，不要一个文件干完所有事 单文件内容太多不好维护，即便是对于AI来说查起来都太麻烦了，还白白浪费这么多token。一定要让AI时常拆分和重构代码，必要时可以维护一套索引文件，不仅省时也省Token。
- 拥抱AI流水线 即便是AI生图，也尽量让AI自己写调用API的程序，自己发Prompt、自己存图、自己后图像处理。要维护一套有效的AI处理流水线，方便工程复用。
- 备份，备份，备份 做一点存一点，做好版本管理，要给自己留好退路；虽然说很多AI支持回滚修改，但是万一回滚的过程中崩了那就前功尽弃了，毕竟我真试过。
- 做好提前规划 每次实施大修改前，先让AI给出修改的规划。Google Antigravity的这点设计就很好，它总是强迫AI先给出设计规划，让你核对后再实施。

## 梦想世界，在你手中

当我还是个小学生的时候，我最大的梦想就是有一个机器能把自己千奇百怪的想法直接转成能玩的游戏。正是这一点驱动我加入游戏行业，想以自己的肉身成为那个“机器”，来完成梦想中的游戏转换。 奇妙的是，当我终于**有能力成为**这样的机器的时候，我发现我甚至已经**不需要成为**这样的机器了。我想到了小时候看到66RPG论坛时候的标题词，“梦想世界，在你手中”，好像自己从来没有离这个梦想这么近过。在努力了二十年后，我发现自己又有机会回到自己最原始的状态——一个纯粹的做梦的小孩，但也挺好的不是吗。


---

# 独立游戏的成功率极低，但依然有许多开发者愿意投入数年时间去“孤注一掷”。他们为什么会做出这样的选择？ 无月白熊

**Author:** 无月白熊  
**Bio:** 我是，神龙骑士王！！  
**Avatar:** ![](https://picx.zhimg.com/v2-a9b2daac7bb1e9b339ab2c92411e2a0e_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/40af97b20fe4ae1cd3151746733a1101  
**Published:** 2025.05.01 23:36:23  
**Updated:** 2025.05.05 09:08:51  
**Question:** https://www.zhihu.com/question/1900843885778928376  
**Question Created:** 2025.04.30 09:28:18  
**Question Updated:** 2025.04.30 09:28:18  
**Votes:** 257  
**Comments:** 77  
**Type:** answer  

其实这个问题还真挺值得探讨。

《孤星猎人》玩过的人都说好的游戏，除了画面不是特别讨喜，几乎没啥缺点。Build构筑，游戏深度都相当厉害。发售至今1674条评价，好评率91%。据制作人所说，目前还没回本……

![](https://picx.zhimg.com/v2-2156645e9ad777378d811f310691f2ec_r.jpg?source=2c26e567)

昨日发售的《星之侵略者》绝对的好游戏，今天还给它发了评测，评价87个……就这个画风和惊喜程度，看来也够呛能回本了。

![](https://picx.zhimg.com/v2-c7d95a960686a343023a7aa7920b7d1a_r.jpg?source=2c26e567)

她杀，剧情非常有争议性的一款推理游戏。我在黑盒给它写的文章，阅读量都到5万了。但是每日在线数只有1~2个，发售时，大概最高有7~8个人在玩。大家很喜欢故事，但是游戏不咋买单。

事实上游戏做得是有点糙，但算得上物有所值。

![](https://picx.zhimg.com/v2-43901ec19f65b64574fa9037a0478b9e_r.jpg?source=2c26e567)

学生时代，超级耐跳王，因为自己制作自己发行，不是太会运营。所以出现了审核没过就先定档的抽象事件，游戏发售时热度相当不错，好似万众期待。实际上问了，也没回本。

游戏里一张CG，可能就价值5000元左右……做游戏是真烧钱。正式版能不能扭亏为盈，不知道。

目前看起来有点难的。

![](https://picx.zhimg.com/v2-b8369cc5cdcadd94f357178bc120a542_r.jpg?source=2c26e567)

杯杯倒满，这个应该是盈利了。但因为制作者本身是普通人，就在社交媒体上想咋说就咋说。结果有些话一旦被扩音了，就会被无限放大，游戏当时被冲了有一万条评论。

![](https://pic1.zhimg.com/v2-66e17f9e7a47a01a75c246bd0939eb50_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-bd910af2bba3d943920ec494e1d89f58_r.jpg?source=2c26e567)

做独立游戏真的是一件蛮难的事情。我想最初可能确实是为了热爱才干这一行的。

而我列举的这几款游戏，其实在独立游戏中，都已经算佼佼者了（当然和《死亡细胞》《Hades》《饥荒》《杀戮尖塔》这些没法比，这些是凤毛麟角）但处境都很堪忧。

**再更新一个游戏，看公告都蚌埠住了……**

![](https://pic1.zhimg.com/v2-665efe15383490b8b4384458b8fdae6c_r.jpg?source=2c26e567)

![](https://pica.zhimg.com/v2-aea317219e72409bd5a1b8ca2e11b88b_r.jpg?source=2c26e567)

贷款做游戏，颠沛流离2年，点赞7(有一个我刚点的)，讨论0……

一两年前关注的一款谍战多结局游戏《谍·惊蛰》，也是款讲抗日的游戏……


---

# 独立游戏的成功率极低，但依然有许多开发者愿意投入数年时间去“孤注一掷”。他们为什么会做出这样的选择？ 秦无邪OvO

**Author:** 秦无邪OvO  
**Bio:** 独立游戏制作人 |《史莱姆公主》游戏作者  
**Avatar:** ![](https://pica.zhimg.com/v2-8f4cde5e122b9b690b6ea1c2a95b383c_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/2d42be3042752978476b6a25ee420b43  
**Published:** 2025.05.05 18:01:49  
**Updated:** 2025.05.05 18:01:49  
**Question:** https://www.zhihu.com/question/1900843885778928376  
**Question Created:** 2025.04.30 09:28:18  
**Question Updated:** 2025.04.30 09:28:18  
**Votes:** 201  
**Comments:** 50  
**Type:** answer  

刚好最近把我的独立游戏《史莱姆公主》上架steam了，也算有点儿时间，所以来回答一下。

我大概在去年八月份左右，上架了免费试玩版DEMO，然后参加了新品节，积累了差不多2000愿望单不到点，我就大概知道我的游戏可能不会火了，后面我又花了8个月时间来填充更多游戏内容和打磨游戏细节，总共花了14个月的全职时间，单人独立完成了这么一款游戏，我自己是挺喜欢玩的，不过目前上架steam几天了（如下图），也确实如我所料，没火，哈哈！

![](https://pica.zhimg.com/v2-fc56e493b376e2ae28f97a107f881eee_r.jpg?source=2c26e567)

要问辛不辛苦：真的辛苦！

要问开不开心：真的开心！

就像你十月怀胎，生了个孩子，这个孩子可能不够优秀，但是你仍然满心欢喜，因为你创造了新的生命！游戏作品，就是我们每个独立游戏人的孩子。

我感觉现在的独立游戏人吧，就像一个世纪前的画家，在照相机被发明出来的情况下，还在坚持画画，当然照相机只是一种隐喻，你可以理解成任何其他能对画画行为进行讽刺的事物。

叔本华说过，人生就像钟摆，只能在痛苦和无聊之间摇摆。那么还有第三种选择吗？我觉得有的，追求幸福！米哈里在《心流》一书中说过，人这一辈子，有人擅长赚钱，有人擅长搞研究，有人擅长搞人际关系……找到那个你最擅长的事情，去做它，你很快就能进入心流状态，获得幸福。我觉得每个独立游戏人在创作游戏的过程中，其实已经很幸福了。游戏发售后，如果无人问津，从金钱的角度来看，是失败的；从心流和幸福的角度来看，是成功的。任何事物总是一体多面的。

另外，我去年看了一本书叫做《有限与无限的游戏》，有限的游戏指的是高考，电竞这类赢家通吃的游戏，而制作独立游戏本质上是在玩无限的游戏，你的博弈对象只是你自己，赢或者不赢，已经没有那么重要了。

接下来说说独立游戏的问题，独立游戏最大的问题是反馈周期太长了，比如我是个up主，做视频反馈周期大概在1周到1个月左右，我就知道我的视频播放是不是寄了，而独立游戏的反馈周期通常是以年为单位，人是一种很会根据反馈结果调节自身的动物，负反馈也是一种反馈，怕就怕没有反馈。

最后，送给大家一句无邪今年领悟到的一句话结束本条回答：

所有独立游戏人终将直面他们最终的BOSS：创意。


---

# 素问 sooon.ai Q&A q9adg

**Author:** q9adg  
**Bio:** 爱发电·同名账号有更多深度内容｜关注请看置顶  
**Avatar:** ![](https://picx.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/4938a34becf7d47b46db81ef24ea7c95  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:** 1259  
**Comments:** 172  
**Type:** article  

**素问是一项什么样的服务？**

sooon.ai是一项基于我的内容的、具有高可溯源性的人工智能服务。它能基于你的问题，通过语义匹配而不是关键词匹配，寻找到最符合你需要的相关回答，并能根据你的挑选，使用大语言模型，依据这些文献为你的问题给出参考答案。

出于合规考虑，它本身不是直接的信息发布平台，展示的内容来自对国内合法平台已经发布内容的链接转载和收录。

它本质上是一种帮助你进行信息检索、阅读、自测学习、建议、校正、整编的服务。

所有的用户交流，都会在知乎或爱发电平台的相应内容评论区里完成。







**素问的最佳使用方式有哪些？**

1）当你为某个人生问题感到痛苦和迷茫，希望得到我的意见时，因为我倾向于不重复回答相同主题的问题，直接提问往往很难很快得到回答。此时使用素问服务，你可能找到大量对你有用的现存答案。

2）当你试图找到某篇仅有模糊印象的特定答案时，素问可以提供帮助。

3）这几千篇答案是成体系的。你很可能读完其中一篇会产生“这个概念是什么意思”、“那么这样岂不是会产生一个新的问题”这样的疑问，而这些疑问的答案，往往在另一篇文献中作出了解答。把你的这些疑问提交给素问，往往可以得到有效的指引。

4）当你想要利用我的内容为亲友或陌生网友提供服务时，素问可以迅速的帮你寻找到必要的参考源和恰当的表达。

5）这些内容已经被有效证明有广泛而强烈的需求，并且根据我在这里的授权，你可以无任何限制的自由用于盈利目的。素问可以作为你进行二次创作、内容开发或构建自己的商业服务时的有力辅助工具。




**我可以把自己的素问账户分享给亲友吗？**

可以，但请注意，分享你的账户的用户可以看到你所生成的历史对话，请注意保护自己的隐私。原则上，建议各人独立购买和自行使用。

从心理感受方面，不建议仅仅将素问服务推送给向你求助的亲友作为你提供的全部帮助内容，因为这会给对方一种“我懒得理你，你看这个就足够了”的感受，在这种情况下，建议你通过素问提供的参考基础上形成自己的观点，通过与亲友交谈的方式提供帮助会更有效。在一段时间后逐渐向ta们介绍素问的使用方法，会更能帮助ta们有效的从这些内容中受益。

如果你要推荐我的内容给亲友，可以考虑从这个更温和的ai助手开始。

[素问·元宝智能体](https://link.zhihu.com/?target=https%3A//yuanbao.tencent.com/bot/app/agent/ra9ygcPiOqhE)




**为什么叫《素问》？**

1）因为这项服务的最直接目的，是为了让我堆积如山的大量提问邀请有更方便的途径迅速获得一些参考。这些问题看上去千奇百怪，但基本集中在一个区域内，都是人们平素日常就要问的问题，所以顺理成章，称为“素问”。

使用这个服务，你可以不必苦苦等待我的直接回答就可以相当有效的先查询到与你的疑问有关的十篇回答，这往往对你进一步的升华和提炼问题有现实的帮助。在理想的情况下，它甚至可以直接引导你得到问题的答案，从而可以节省下你的精力，避免重复提问。

某种意义上说，我希望你们在提问之前已经使用这个服务检查确认过并不存在足够有效的答案，以便提高自己得到回答的概率，也提高我的时间利用率。

2）很显然，这中文名是来自于《黄帝内经·素问》。素者，本也；问者，黄帝问于岐伯也。

这些问题除了是“平素常问”，同样还是一些高度本位的、**根本的元问题**，而我作为一个回答者，却只是一位“岐伯”。不好意思，水平有限，仅供参考，你们将就看。而从另一方面，这些问题是为了有助于一些心病的预防和免疫，本身也是一部“医书”。这个名字恰如其分。

3）素问的英文名SOOON，是一个“没那么soon的soon”，意思是“虽不如你想的那么快，但仍然离你不远”。而它的全称SOOON.AI，除了它作为ai服务的本质之外，还意味着“爱来得虽不如你所盼的那样快，但离你也不如你所担忧的那样远”。

而在另一个方向上，这项服务的最终目标，是消除我自己生命有限对这项公众号服务的可持续性限制。

在最理想的情况下，它也许有机会在我的生理生命消亡之前，借助ai技术的发展和我**及你们**共同创造的案例分析和语料资源，成为一个足以无法分辨的替代我无限延续的回答服务。

从而为整个人类免去笔“心灵发育税”。

而这个SOOON.AI这这个意义上，就是指这个目标不会如我们所希望的那么快——如你们所见，ai离我的距离还非常遥远——但也不会如我们所忧虑的那么迟。




**2. 它有没有发展规划？**

这个自然是有的。

围绕着它，计划做这么几件事。

1）sooon.ai的api将会开放，方便任何人自由的在自己的服务或软件中整合素问服务。这个已经在进行中，不久就会公布。具体的做法要求，会在文档中公布。

2）在适当的时候，我会放出当前sooon.ai的语料文件，并且做出开源授权。在这一授权下，任何人都有完全的自由自行构建自己的ai服务，基于这些语料资源去支持自己的服务，这将是完全免费而没有限制的。

这一点目前已经实施，任何素问用户都可以在自己的账户里建立下载任务，免费获取所有免费语料。




我所要做的，是基于这几万篇（考虑到还有几十年时间），为所有这些服务提供一个“共识基础”。这些ai的“价值观”乃至于世界观、方法论是由这些答案直接塑造的，ta们只是在基于这份你其实也可以自己读完、自己独立检验的知识为你提供效率上的辅助。而这个辅助的部分，则任由未来的才智之士去充分发挥其时代最先进的技术。

素问在这里担当的角色，有些类似于google自己开发的工程样机，一方面用于验证和指导android的开发，另一方面用于为各厂商自行开发定制提供示范和基础。




这整个项目，也是我对如何在ai技术时代选择自己的事业”的一个探索——你可以专注在任何一个领域，参考我的做法，去构建属于你自己的知识库，并基于这个知识库，为ai算法、算力等服务商提供最初的训练基础。

我选择了免费开源，但你并不见得需要。

未来的ai将不会是所谓“大一统模型”的天下，恰恰相反，我相信它会是一个新的“诸子百家”的时代。因为对于很多问题，在知识本身的构造上存在基本的“架构分歧”，存在并立而不兼容却又各自自洽、各有所长的不同知识系统。这将涉及到ai自身的立场取舍问题，强行“兼容并包”，只会导致ai失去有效性，不断提供模棱两可、含混不清甚至自相矛盾的结果，从根本上摧毁ai的效能。

而这个世界上并不存在一个至高的人类权威，以至于可以断然的宣布这些并立的理论体系谁是正统、谁是叛逆，这将只能交由市场竞争和自然选择来解决。

总的来说，素问服务并无“文成武德，一统江湖”的规划，恰恰相反，它是为了给出一个如何“群雄并起，百家争鸣”的模版，引导各位及早的参考它开始自己的积淀和经营。

更多的规划目前不够成熟，暂不公布。




**有使用问题怎么办？**

1）可以将你的疑问发到我经常发布的早安和晚间pk常规想法的评论区内寻求解决，想必有很多友好的用户会给你提供参考。如果是功能建议，也可以发出来，但是请理解，这不一定会如你所想的那么迅速解决，甚至可能不一定会得到满足。

2）使用文档会自己不定期的更新，更新后会进行公告。




祝各位使用愉快。




素问服务：

[素问](https://link.zhihu.com/?target=https%3A//sooon.ai/)


---

# 你们的初中生活是怎样的？ LinMH

**Author:** LinMH  
**Bio:** 计算机学习者  
**Avatar:** ![](https://picx.zhimg.com/v2-77bf0ee17affd341f720f4dcfc737f4c_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/4946f6b1a46c9d1a6b8b9df5e1e95fde  
**Published:** 2025.05.25 02:38:38  
**Updated:** 2026.01.12 00:33:06  
**Question:** https://www.zhihu.com/question/534384862  
**Question Created:** 2022.05.24 21:35:08  
**Question Updated:** 2022.05.24 21:35:08  
**Votes:** 729  
**Comments:** 218  
**Type:** answer  

![](https://pica.zhimg.com/v2-fa4ebea3f10e99af4d7e6e773eca0daf_r.jpg?source=2c26e567)

时间过得很快，转眼已经2026年了，距离这篇回答发布已经过去半年多的时间了。这篇回答对我影响算是比较大，这半年也经历了很多，姑且在这里总结一下了。

当时发表这篇回答，主要还是一时兴起。第二天放学之后，回家发现浏览量已经16万多了。诚然，我并没有解决题主的问题，只是说了自己的情况，那样的表达方式反而让不少人产生了共鸣，当然也有质疑，这并不是一篇好的回答，只是一段情绪的记录。现在回想，当时也确实需要记录。

我出生在小县城，平阴，你可能从来没听说过。正因如此，这里的计算机教育比较落后。我很幸运，从小接触电脑，二年级学习python（当然仅浮于表面），后来学了很多，比如 linux（四年级用arch）、docker（但是不会k8s，k8s流行起来的时候我已经没有时间学了）、前后端、建站、虚拟化、数据库、分布式系统等等。后来升入了初中，每天早晨6:20上学，晚上9:20左右到家，并且两周一休。无疑剥夺了我学习计算机的时间。但是，初中的学习内容我应对起来还是比较得心应手的。于是，我转而学习一些大学本科的课程内容，如操作系统和计组。

升入初中以后，我也认识了本校的一位比较厉害的老师。先前是大学教授，现在来这里当oi教练。我当然也来到了他的oi社团，他劝我暂且放下别的，专攻一下oi，一开始的内容还是比较得心应手的，但是往后学就感觉力不从心了。我经历了一段比较迷茫的过程，同时，我发布了这篇原回答。

这篇回答下面，我看到了很多前辈的忠告，例如不要再oi上浪费太多时间。大约是6月末，我向那位老师提出了我的想法，退出了oi的学习，但是仍旧能在社团里听课。

今年11月份，我顺利升入了高中（2+4），作息也更紧张，晚上10:00到家，留给计算机的时间也随之更少了。

现在你翻看评论，你或许回看到这一条：

![](https://pic1.zhimg.com/v2-59102b55aa14aaff0597501fa03c5e2d_r.jpg?source=2c26e567)

这条评论对我很重要，或许可以说是很大程度上影响了我。先前提到过，我在小县城。于是，我并不能找到第二个人来和我交流计算机。但是，这条评论就是转机。我和他成为了朋友。后来认识的也越来越多。如今，我们甚至凑够了一个团队（工作室？）：

![](https://pica.zhimg.com/v2-29821d63aa184f4d1e2b9063c5ea4de5_r.jpg?source=2c26e567)

感兴趣的朋友可以来看看：

[计算机团队：taten](https://link.zhihu.com/?target=https%3A//taten.xyz/)

网站使用github pages部署，访问不了的话就挂梯子。

我们13个人，每个人都对计算机充满了兴趣。实现了互帮互助，共同交流、成长。甚至能开发一些项目。

同时，我们的文化科不用担心。我本人感觉对理科比较擅长。团队里有来自汕头金山中学（丘班）、北京八一学校、南京外国语中学的大佬们，我们会平衡学业和兴趣的。

这半年里，我对计算机的看法发生了不小的变化。以前我更在意的是比较：学得是不是比同龄人快，是不是走在所谓的“正确路线”上。现在反而更在意长期是否可持续，是否真的愿意在很多年后仍然坐在电脑前，解决问题、写代码、做项目。

我依然身处小县城，资源依旧有限，这一点并没有改变。但我不再执着于我缺少什么，而是开始认真使用我已经拥有的东西：网络、时间、以及一群愿意交流的同伴。现在的我，至少不再是一个人闷头走。

如果你正在看这条回答，和当时的我处境相似，感到迷茫、焦虑，甚至怀疑自己是不是走错了路。我想说的是：你不需要现在就给自己一个标准答案。很多选择并不是对或错，而是是否适合当下的你。

现在回头想想，这一路干的也够多了。我身处山河四省，山河四省的小县城，能接触到计算机，能愿意深入探索计算机，能有一群知音，在我看来，已经很满足了。但是，我也会不断提升自己，更上一层楼。

本篇回答的评论，我全部看过。有鼓励，有建议，也有批评。我想说，如果有什么想发，也欢迎评论提出来，我会尽量改进自己。

另外，关于大家比较关心的一个问题：我的水平到底怎么样。

实话说，如果只从 OI 或竞赛角度来看，我的水平并不高，甚至可以说是一个很普通的学习者。很多内容学得不深，也有不少半途而废的地方。这一点我并不回避，也不会刻意美化。

如果你对我的学习过程或代码感兴趣，可以看看我的 github：

[我的github](https://link.zhihu.com/?target=https%3A//github.com/LINMOH)

如果关注我们团队的项目，也可以看看团队的github：

[团队的github](https://link.zhihu.com/?target=https%3A//github.com/TATENcn)

其实我也是个新人 up 主：

[-LinMH-](https://link.zhihu.com/?target=https%3A//space.bilibili.com/2126856300)

最后再说一句。

半年前写下那篇回答的时候，我其实并不知道自己要走到哪里，只是觉得应该留下些什么。现在再补充这一段，也不是为了证明什么，只是想把这段时间的变化如实记录下来。

路还很长，我也还在走。如果将来回头再看，希望自己不会后悔此刻的选择。

原回答比较简陋，请允许我稍作修改：

## 修改后的回答

现在的我，初二。
日常生活其实挺简单，大部分时间还是围着计算机转。

我会刷一些算法题，水平不高，但一直在写；也会把零散的想法和学习记录写成博客，算是给自己留个痕迹。博客在这里：


[linmohan.fun/](https://link.zhihu.com/?target=https%3A//linmohan.fun/)

平时也会看书，不过很多书都没能完整看完。回头整理了一下，发现自己的阅读经历其实挺杂的。

![](https://picx.zhimg.com/v2-578dd6ad358230e1215f12f5fcfcc569_r.jpg?source=2c26e567)

以前看的书，基本都集中在小学阶段：幼儿园和低年级时看的是故事书、科普读物；小说几乎也是小学看完的；历史类书籍同样如此。
后来开始以学业为目的看书，比如《万维》系列教辅，高中生物课本一整套，《高中生物奥赛讲义》则是老师让买的。
再后来有一段时间对语言特别痴迷，看过不少语言类书籍：我爸的韩语书、《新标准日本语》、《新概念英语》，还有柯林斯词典、韦氏小绿书，以及《旋元佑文法》。
而现在，阅读的重心基本都放在计算机相关的书上了。

系统方面，我一直在用 Linux，折腾系统、配环境本身就占了不少时间。有些平台因为 Linux 支持不太好（比如 Epic），干脆也就不用了。

![](https://picx.zhimg.com/v2-3bb97631f760dc4831da559c90a91462_r.jpg?source=2c26e567)

除了写代码和看书，我也会听歌、看番、看电影，偶尔旅游。

![](https://picx.zhimg.com/v2-12603231c31028bb082221eb69297138_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-afa8549584f721da20b2baee039bdde2_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-fe6bb2e22ee2adb3c173a87c50512e90_r.jpg?source=2c26e567)

另外，我也试过装机

![](https://picx.zhimg.com/v2-0251f5aff47a4113a9673c83a0056d07_r.jpg?source=2c26e567)

![](https://pica.zhimg.com/v2-6ae2b5f57774d14d0b2e2ac34ff620b2_r.jpg?source=2c26e567)

**------5月25日更新------**

看到大家说回答跑题了，我再来补充一下，以下都是我们县的同龄人，都是初二的。

## 学线性代数、微积分的

![](https://picx.zhimg.com/v2-1d476a9bf8419875bda5f1e81fd768b4_r.jpg?source=2c26e567)

## 玩无人机，搞摄影的

![](https://picx.zhimg.com/v2-520365f0880ee992846453702ef78c73_r.jpg?source=2c26e567)

## 纯二次元的

![](https://pic1.zhimg.com/v2-0b0b64433234512d5890a385c6b2516f_r.jpg?source=2c26e567)

## 极度信仰共产主义的红色青年

![](https://picx.zhimg.com/v2-4f021613a98980b1190bdd9900166a56_r.jpg?source=2c26e567)

## 喜欢去道馆的

![](https://pic1.zhimg.com/v2-6142ebf9435b199f3163d5eccb8309ae_r.jpg?source=2c26e567)

## 卷王

![](https://pic1.zhimg.com/v2-c8badf1dce7cd41a784815101f56e98d_r.jpg?source=2c26e567)

## 早恋的

![](https://picx.zhimg.com/v2-9a8d62b1e383377f94f4856985757bc0_r.jpg?source=2c26e567)

## 吸烟的

![](https://picx.zhimg.com/v2-f9b935e5c75bd64db863f187fded0db7_r.jpg?source=2c26e567)

## 追星的

![](https://picx.zhimg.com/v2-e010b37829a07c62e5c8aa99a809a3b4_r.jpg?source=2c26e567)

## 抽象的

![](https://picx.zhimg.com/v2-df697dcc70ef5c348d2abd2c3a8ef919_r.jpg?source=2c26e567)

## 打游戏的

![](https://picx.zhimg.com/v2-2c9d65faae7e868c667d3906bca72a81_r.jpg?source=2c26e567)

## 喝酒的（和吸烟的是一个人）

![](https://pica.zhimg.com/v2-3ca6e4a3cf66eb80f4a0d6d570870500_r.jpg?source=2c26e567)


---

# 什么促使你走上独立游戏开发者之路？ 十八爷做游戏

**Author:** 十八爷做游戏  
**Bio:** UE5动作游戏【龙精虎猛】作者  
**Avatar:** ![](https://picx.zhimg.com/v2-cdb8dc5b5fe6ead569198be53e6e4664_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/38e9615092d64eaa6a3af8f02ee6556d  
**Published:** 2020.07.10 17:33:56  
**Updated:** 2020.07.10 17:50:20  
**Question:** https://www.zhihu.com/question/21719532  
**Question Created:** 2013.09.28 12:31:33  
**Question Updated:** 2019.05.17 21:23:14  
**Votes:** 48  
**Comments:** 5  
**Type:** answer  

**不贷款 不养女人 不养小人的 油腻男子无所畏惧**




答主在Steam上发行的两个游戏均“爆卖”了300多份，朋友好奇我是不是快饿死了。

上述两个游戏的收益已为我提供了很长时间的口粮，我特别感激那些为我的游戏花了钱还没退款的人们。本人脾气很妖，谁都能怼，唯独不会去怼他们。

所以，饿死不至于，顶多吃得差些。




**我的口粮01**

[Path of Redemption on Steam](https://link.zhihu.com/?target=https%3A//store.steampowered.com/app/1221440/_/)

**我的口粮02**

[KeyBoard Guitar Master on Steam](https://link.zhihu.com/?target=https%3A//store.steampowered.com/app/831260/KeyBoard_Guitar_Master/)




生产游戏是主业，制造音乐是生活技能。

大学时期我开始学习演奏电吉他，捣鼓录音设备和数字音频软件。

毕业后，写歌录音，跟随一帮比我还穷的哥们去各地小酒吧，livehouse演出 成为了生活中最主要的部分。那年代搞乐队的人，但凡能录个自压盘，上个不知名音乐节，没有谁会想要去上班。

懒散，同时自由、快乐。

这帮懒散的哥们一天能练琴10小时，扛着很重的设备乘车去郊区地下室排练，可以为了稍微好一点的效果反复录音。

但是，这时若有个既不会做音乐，甚至也不听音乐的傻缺跑过来怼你们，说 “你们的吉他为什么要开失真”、“鼓为什么要敲那么响”、“为什么弹了那么久还不唱”，“主唱为什么不是妹子”，“为什么主唱的声音像野生动物”，“为什么你们不统一穿白衬衫配西装裤”、"为什么你们长得也像野生动物" 等等。




在国内的游戏公司讨生活，你不得不接受这样的事实：

大部分情况下，项目都被那些**一行代码都没写过**，**一个像素也没画过**，甚至也不玩游戏的策划、制作人、老板所掌控，你只能眼巴巴地看这帮外行把项目搞死，然后拍拍屁股去祸害下一个公司/投资人。

如果公司的游戏真能赚钱，大家都能因此改善生活，我们这群刺儿头又何必去较劲呢？

事实上所谓的参考市面主流游戏、研究社交和氪金、二次元老婆、日本声优、IP代言、买量甚至自冲等等，这些方法我服务过的那几个公司统统认真尝试了，唯独不去考虑游戏是否好玩的问题。然而钱在哪里？流水在哪里？还不是一样关门倒闭了？




做游戏也好，搞乐队也罢，都缘于这个初衷：

氪金的那套，我不喜欢也不擅长。

哥们儿我就是想老老实实地做点东西，朋友你喜欢就花钱买来玩玩，不喜欢扭头就可以走。

为了存活，这是我能想到的唯一办法而已。




祝大家游戏愉快。


---

# 什么促使你走上独立游戏开发者之路？ 童小饼

**Author:** 童小饼  
**Bio:** 设计师  
**Avatar:** ![](https://picx.zhimg.com/v2-18456f7f1cea3b69a18f681ae97791dc_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/a6fcf4a00698c85a49da891ce4bbb145  
**Published:** 2018.11.19 12:13:13  
**Updated:** 2018.11.28 20:55:17  
**Question:** https://www.zhihu.com/question/21719532  
**Question Created:** 2013.09.28 12:31:33  
**Question Updated:** 2019.05.17 21:23:14  
**Votes:** 70  
**Comments:** 13  
**Type:** answer  

好的！小透明终于热血沸腾的激起了回答问题的热情！不请自来。

从小我就喜欢一个人鼓秋东西，最喜欢的是画画。




![](https://picx.zhimg.com/v2-4ab104965e4ef9456e26bee238c7bee8_r.jpg?source=2c26e567)

当画家的梦想直到高考填专业的时候，才清醒了一点。

？？？我要是学纯艺的话，毕业吃什么？？？

……还是得走实用美术（这个词儿有点儿年代感）的路线，学设计去。




内个年代的专业没有什么游戏专业，就叫多媒体设计系，杂七杂八的各种专业课。本科&研究生期间什么都学了，拍片儿，做动画，做模型手工，平面设计，编程，数据库，项目管理，global markting（我得了D）……




20出头的愣头青，加了一身这么全面的技能点儿以后，当然是本科毕设做游戏！研究生毕设做游戏！我就是要做游戏！




研究生毕业以后，毕设的游戏还停留在demo阶段。老外导师说Good job,留校接着做吧。

工作签证有着落了，还能接着做游戏，美滋滋！




本来故事说到这里，好像就完事儿了……

哪儿有这么简单！




游戏还没做完，不出意料的工作室解散了，一家APP外包公司哭着喊着(?)要接手我们团队。

香港的房租你们懂得，15平米，一室一厅带卫生间，一个月4500块。

APP就APP吧，活下去比较重要，游戏放一放。




![](https://pica.zhimg.com/v2-7316fe800d0c8aea57910b8f964db86e_r.jpg?source=2c26e567)




然后就开启了长达10年的互联网圈儿打工之旅……小设计……大设计……项目负责人……设计总监，一步一步的，全球金奖也拿了，年薪也高得让我犹豫。




但就是处处不开心，当乙方不开心，给老板汇报不开心，带团队也不开心。

各种创作的欲望啊，脑子里那些精灵古怪的小点子，在甲方（老板）每天的压迫下，闪着特别耀眼且诱人的光芒。

中年危机在我30岁生日的时候早早的爆发了，吹蜡烛的时候许了个愿，我今年一定要回头做游戏。算了算存款，应该够活一年的，领完年终奖就辞职了（0 0v）。




后来的故事……有些朋友们应该都知道了。

躺在床上想玩节奏天国，发现NDS丢了。

……烦人！我自己做一个！




有朋自远方来不亦乐乎，草台班子4个人在4个城市通过网络办（dui）公（ma）。




本来计划3个月就能做完，最次6个月怎么也行了吧？！谁知道后来开发跑了，到了第8个月才又找到新开发加入。（项目管理怎么学的？！不过也是常见事故）




画画不辛苦，有个大傻子在旁边指手画脚一直BBBB很辛苦。

做曲子不辛苦，做完曲子喝酒换电脑换宿主，源文件导不出来了再改曲子很辛苦。

写代码也不辛苦，写完代码发现制作人改主意了很辛苦。

指手画脚BBBB不辛苦，光动嘴真的不辛苦。




![](https://pic1.zhimg.com/v2-e3463c539dac78f79ba37912c19f210d_r.jpg?source=2c26e567)

既然这个问题是问“什么促使你走上独立游戏开发者之路”……所以作为一个良心独立游戏制作人我也不想聊我们做了个什么游戏，省得你们说我发软文。




反正辛辛苦苦一年以后，游戏做的差不多了，兜儿里也干净了，剩一堆不仔细瞅看不出来的bug。




先上线吧，哪儿有腹死胎中的道理。付费下载，18块钱一个。卖得好了，有钱就能改改bug，卖得不好就更新个简历找找工作，攒够几万再改一波，挣钱对我来说不是啥难事儿。




后来就因为我们游戏品质太精良了，极光收了我们。

然后就有钱了，接着做下一个游戏！稳！




有几个幼稚的感受……想跟各位对独立游戏有着美好向往的同学说：




这个美好的世界对认真做事的人，太友善了！请各位抱着梦想的人一定努力！

清流taptap不收开发者的渠道费，给我们推荐，还送广告！

清流极光准备发免费版，连广告都不加是我们没想到的。

我不想加的需求，他们二话都没有，说尊重开发者的意见。




既然极光准备发行免费版本，那对之前已经购买的玩家不公平，我们决定无条件退款。

Taptap上开了个退款贴，推送了全部IOS用户，求大家自己打苹果客服电话退款。

有人给我们回帖，说工作室的小可爱买可乐去吧。

后来在苹果后台查销量，当然苹果系统自动拦了一部分退款请求，不管怎么样，成功退款的人数只有两个人。（没有别的意思，退款是您的权利，随便退！撒着花儿地退！）感谢大家的支持，希望大家玩的开心！




![](https://pic1.zhimg.com/v2-cb45f075ea32468a2ce370ccc4be5484_r.jpg?source=2c26e567)




总之，独立游戏开发者之路我们满怀着感激迈出了第一步，继续努力！

这个世界不怕贼偷就怕贼惦记，有梦想，就好好干！




（本文可任意转载，请勿修改与删节）




P.S.关于我们游戏的制作之路如果有朋友感兴趣，我们另开个帖子讨论干货

[《节奏丛林》是如何出生的](https://zhuanlan.zhihu.com/p/51093132)




—————————我是一条跟正文没关系的分割线——————————

前一阵参加了个自述节目，能能的头套太好笑了o> <o 忍不住贴一个

![](https://picx.zhimg.com/v2-88ab6e6f48b3646cb999e5704ba16d2c_r.jpg?source=2c26e567)


---

# 什么促使你走上独立游戏开发者之路？ 董成良

**Author:** 董成良  
**Bio:** 律师、野生程序猿  
**Avatar:** ![](https://picx.zhimg.com/28be41db6_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/25befb980d2ee988679a623c224bb9fd  
**Published:** 2014.09.29 13:17:38  
**Updated:** 2014.09.29 13:17:38  
**Question:** https://www.zhihu.com/question/21719532  
**Question Created:** 2013.09.28 12:31:33  
**Question Updated:** 2019.05.17 21:23:14  
**Votes:** 63  
**Comments:** 11  
**Type:** answer  

讲讲我的App开发经历。




这是我在AppStore中的app：[iTunes 的 App Store 中的“看法  中国法律数据库”](https://link.zhihu.com/?target=https%3A//itunes.apple.com/cn/app/id699464314)，上线一年了，反响还不错。




我不是专业的码农，开发带有玩票性质。写这个App一方面源自多年来对计算机、编程的爱好，另一方面也是为了满足自己工作中的需要。




大学时上的是法律系，但很喜欢计算机科学和编程，自己看了许多的书，也写过一些小程序（俄罗斯方块、Life Game什么的，还画过Mandelbrot的宝葫芦）。工作后一有闲空，也还是忍不住再琢磨琢磨计算机和编程，琢磨懂一些东西后，心里由衷的高兴（记得看The Practice of Programming，理解了被誉为“计算机科学的一项伟大发明”的Hash后的那种感觉，还有理解了递归并感受到它的魔力后的那种感觉）。学习了正则表达式之后，更加体会到计算机的威力，发现计算机在文本处理方面可以有这么大的作为，后来我的编程兴趣就主要集中在计算机文本处理上。我学习了各种技巧，从正则表达式到更高级的Parser，还有NLP中的一些技术，并且不停的寻找现实中的一些问题操练这些技术（有段时间我常干的事就是从网上找一些书的垃圾txt文件，写程序进行清理、生成目录、添加脚注等加工，然后生成latex文件、编译成漂亮的pdf放在电纸书上看）。文本处理的活干的多了，终于想到，为什么不对工作中常常要遇到的文本——法律文本下手呢？




我是做律师的，工作中经常要进行法律检索，甚至需要**随时随地**进行法律检索。在和客户谈话的过程中，或者身边没有电脑的时候，都可能会有问题需要立刻解答，需要做一个快速的法律研究，查阅核实一些法规和资料。在还没有iPhone和android的年代，能做的就是把自己常用的法规和资料的txt文件分类整理成一个多层的文件夹，放在windows手机(CE系统)里，需要的时候翻出来看。但这本质上只是个电子书，主要是用来阅读的，远不能满足法律检索的需要。法律检索需要能按关键词搜索、快速在所有已有的数据中返回有意义的想要的结果，这需要的是一个数据库系统，甚至一个垂直搜索引擎。但当时电脑上的法律数据库系统尚且不太完美（法律数据库国内做的最好的是北大法宝，我印象中直到2011年时，在它们的数据库中进行全文检索都需要等待三四十秒才能出现结果），而且智能手机还没有兴起（印象中2006、07年的时候，用个多普达的windows手机就已经很科技潮人了；iPhone和Android真正在中国流行起来也是在2010年以后），想要在手机上满足这类需求，肯定是个奢望了。




2010年智能手机开始普及后，我发现市场上出现了一些法律信息类的app，但都差强人意（如同iPod出现以前的MP3播放器市场一样）：有的实际上还只是电子书，只能浏览，不能检索；有的也提供了检索功能，但几乎不可实用（提交一个检索词，等待了三十秒以后返回一堆无关的结果）；许多app一看就是不了解法律的人做的，不知道哪些法规和资料是重要的、法律职业用户最需要的，收集的不全，还有许多过期失效的数据（对于认真的使用者来说，这是很要命的）；更重要的一点，即使一些认真去做的，也只是把电脑版的内容直接搬到了手机狭小的屏幕上，而没有考虑过法律文本与普通的文本不同，有很好的结构性，把这种结构分析出来、利用起来以后，在手机的小屏幕上恰恰可以做到非常好的显示效果和体验（当在手机的方寸屏幕上翻滚着一篇几万字的法规要找到后面某章里的一段时，damned，就不能有个目录吗）。我发现，即使是一些专业做法律数据库的公司，app也做的比较差劲，差强人意。2012年开始用iPhone之后，忍不住想，damned，难道自己不能写一个真正好用、让自己满意的法律检索app吗？能扩展自己手头设备的功能，而不仅仅是被动的使用，这不是一个hacker极大的乐趣么？于是就开始动手，一有闲工夫就一块一块的添砖加瓦实现。




实现这样一个法律检索app，需要有：被检索的数据；检索系统；交互界面。




被检索的数据。这个实际上在我写iOS App前就已经基本具备了。很早以前，我就有自己建立一个法律检索系统的想法，为此我用python写了一个爬虫（后来改为用scrapy来定制了），从众多可能出现法规的“热点”网站爬取可能是法规资料的网页。我还训练了一个classifier，可以基本上自动的检测一篇文本的内容是否可能是法规或法律资料，这样用这个classifier就可以把无用的内容剔除出去。找到这些资料后，进行提炼，把多篇不同来源的可能是同一法规的文本进行diff和similarity分析，这样基本能实现自动的校对（说“基本”是因为我留了一些人工介入的接口，机器对一些不易判断的内容可以“询问”人的意见），一定程度上确保法规文本的准确性。自动化的好处是，这个数据库的新数据添加和维护需要很少的人力，要不然作为一个业余的个人开发者肯定是没时间来手工维护这个数据库的。

为了更好的展示这些数据，我还写了一个parser，来解析这些文本中的格式和结构。




数据有了，我又用sphinx搭建了一个检索系统。




然后是iOS App的开发。我有C语言的基础，但是对Objective-C和iOS编程环境完全不了解，看了两本入门的教材后，主要就看Apple的开发文档和示例程序，慢慢的也就熟了。因为是业余开发，时间不多，断断续续连学习带设计、开发到最后完成，将近用了一年的时间。最后经过苹果AppStore的几番审查，终于上线了。因为是玩票，也没有做什么推广。令我高兴的是，也许是“自己做自己吃”（Eat your own dogfood）的原因，能真正满足像我这样的用户的需要，在一些专业用户的小圈子里竟然有了一些名气，口口相传的也有了不少下载量和好评。




然后就是一些android的用户催促也开发一个android版的。我对android的编程环境又是完全不熟，但好在还有点Java的基础。又经过同样的近一年的学习、折腾，把android版也完成了，前一段时间也上线了。




在App里我做了In App Purchase，所以也产生了一些经济收益；更开心的是收到用户好评和赞扬的时候；同时自己在工作中也可以使用自己一手打造的工具来解决问题了，那种感觉非常棒。

更重要的是，实践了多年来纯粹基于兴趣和爱好而掌握的技术，真正做出了有实际用户的作品，满足了他们的需求；同时这次试水也让我看到了把计算机技术更广更深的应用在法律领域的可能。


---

# 什么促使你走上独立游戏开发者之路？ Larry

**Author:** Larry  
**Bio:** 码力全开工作室创始人，公众号：force_code  
**Avatar:** ![](https://picx.zhimg.com/v2-ab05a6a6de4d6ccf8a7115e6dedbd05a_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/f5308ed5c59d983d762f7760d10ba6b8  
**Published:** 2017.11.06 13:34:12  
**Updated:** 2017.11.06 13:34:13  
**Question:** https://www.zhihu.com/question/21719532  
**Question Created:** 2013.09.28 12:31:33  
**Question Updated:** 2019.05.17 21:23:14  
**Votes:** 97  
**Comments:** 31  
**Type:** answer  

之前在外包公司做过一段时间的移动端开发，每天都在不停的赶项目，一年做了将近10个App，粗糙的UI和奇葩的功能需求让我欲哭无泪，可以说从那个时候有了独立开发者的想法，无法接受通过自己技术实现的产品像一坨屎一样，所以那个时候就开始接触UI设计、产品相关的一些知识，长期不断的学习和积累，现在我拥有了6款个人作品，目前对自己作品还算满意，其中一个作品壹日程最好的排名付费榜23名。

另外近期我整理了一套课程，[有温度的Coder](https://zhuanlan.zhihu.com/p/30692301)

![](https://pica.zhimg.com/v2-eeaeabc3eeaaf4056fe83cf97f979a6a_r.jpg?source=2c26e567)


---

# 什么促使你走上独立游戏开发者之路？ 刘美工

**Author:** 刘美工  
**Bio:** 类银河城游戏《HAAK》制作人  
**Avatar:** ![](https://picx.zhimg.com/a542a9d4a_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/29dbe04d8ad530f418942e8367bf11cc  
**Published:** 2015.08.30 22:26:04  
**Updated:** 2016.06.22 22:05:43  
**Question:** https://www.zhihu.com/question/21719532  
**Question Created:** 2013.09.28 12:31:33  
**Question Updated:** 2019.05.17 21:23:14  
**Votes:** 244  
**Comments:** 47  
**Type:** answer  

------------------------------------------------------------


2016年update

一年过去了，我的新感受：


[做了两年多的独立游戏没有积蓄前途渺茫，我该不该放弃？ - 刘美工的回答](https://www.zhihu.com/question/42819189/answer/107283944?group_id=729018179472343040#comment-144524228)


----------------------------------------------------------


说下我的感受吧，昨天写给自己30岁生日的文章。


《我为何走上独立开发者之路》




“我们那个年代的人有一种追求：一不重复别人，二不重复自己，每部片子都要创新。”

——钱伟达，《天书奇谭》导演




![](https://pica.zhimg.com/f6ab19ad4a3338550c0196ee5a4b2aa7_r.jpg?source=2c26e567)




不 用掐指一算，我也知道这是我进入游戏行业第六年，时间一直让我很有紧迫感，处女座强迫型人格在不停地逼迫我去回顾，反思过去走过的路，然而即便再怎么回顾总结，再怎么谨慎选择，也依然无法远离失败——过去的一年里我又连续做挂了两个项目，这让我的六年职业生涯已经累计了五款失败产品，真是个糟糕的成绩单，然而跟我经历相同的人大有人在，在中国做游戏可能是最糟糕的从业感受之一，那是一种沙漠掘井式的体验，井喷固然让人高潮，但渴死在半路的是大多数。
然而又无法死透。
每每觉得自己在苟延残喘快要熬不下去又不想放弃的时候，脑袋里冒出的是同一个问题：我曾经热血沸腾为之倾注心力的游戏事业为何如今让我痛苦不已？







![](https://picx.zhimg.com/8cc210d80185ed885d9fae13dce1f461_r.jpg?source=2c26e567)







**选择**
为何做游戏？大多数人都会先想起小时候玩过的游戏，回溯到上古的DOS时代，感动与欢乐，是啊，说到这些大家都会眉飞色舞侃侃而谈起来，不论是林月如的玉陨还是QUAKE初代里的火箭跳都足以给一个孩子带来巨大心灵冲击，初心也就在那一刻被种下，多少人都是怀揣着“我也要做个好玩的游戏”的梦想在完成学业后选择了游戏行业，但我的选择多少有些被动性，也许少年时代我也曾幻想做游戏，但后来很长一段时间里这种想法却被无情的学业负担所稀释，人生的目标似乎只剩下了高考，职业规划那是什么？不懂，我成长在那样一个闭塞的贫困山城，并没有像城市孩子一样对自己的未来有概念和定位，以至于毕业找工作也只是漫无目的地海投了包括游戏美术在内的各种设计职位，而最终眷顾我的是一家游戏公司，突然我意识到，我不就应该做这个吗？




**成长**

刚工作的最初几个月，可能是我近十年来最轻松没压力的一段时间了——没有学业负担，没有情感负担，有了一份工作可以自己养活自己，上级也认可工作成绩，来到一座新城市充满未知惊喜，总之一切如愿，这个时候“但是”就会登场——但是慢慢地，游戏行业的各种状况开始一次次折腾我，项目总是做了又做，挂了又挂，团队聚了又聚，散了又散，饼是画了又画，心是碎了又碎，经历多了，发现每一次失败背后都有着几乎同样的境况——上级好高骛远对产品不切实际过分理想化的定位，团队没磨合好就动辄要做3A，上下不同心，核心无聚力，不重视玩法体验只关心深挖坑广撒网，贪多求全，东抄西凑没主心...即便意识到这些问题可能导致失败的结果，但下一次经历同样的境况我也依然无能为力，因为主导权在别人手里，永远只能等着被宰割。

是时候改变一下了，不是吗？







![](https://picx.zhimg.com/7b206bc020646a000d5c5c5a222f043e_r.jpg?source=2c26e567)







**改变**

三个月前我离职了，那是一家我呆过最大的公司，它有着相对更成熟的团队，更好的研发环境，更成功的决策者，但依然没能如我所愿做出一款哪怕能面世的产品，是的，能上市已经是我最奢侈的目标了。在那之后我接触了深圳大大小小的团队和个人，但没能找到我想要的，如果要问过往的坎坷经历教会了我什么，变得越发审慎会是其中之一，我越来越难以决定下一步该怎么走。

为何不自己做游戏呢？既然不甘心命运被他人左右，那怎么不自己来掌控？这样的想法时不时冒出来，但这一次最为强烈，于是我想起去年就小有了解的Gamemaker，作为一个准专业引擎，较低的学习门槛很适合我这样程序0基础的设计师，于是在steam上买了专业版，买了SVN，翻墙看youtube视频教程，看论坛，开始正儿八经学习起来。




![](https://pic1.zhimg.com/5ad6ada4239429d9bf5dc841d1b7cb8b_r.jpg?source=2c26e567)




*一些不太正经的早期练习作品*

![](https://picx.zhimg.com/c4da626ffb4a7ba33c9f92155c549f51_r.jpg?source=2c26e567)




* 第一个相对正经的项目 Camala 的早期画面*




一开始很多人对我的举动并不很理解，认为我不务正业的，认为我应该专注在美术上的，认为一个年介30的美术去学程序是很困难的，认为一个人搞独立游戏太不现实的，总之各种声音，但好在还有GF支持我，不光对我的决定毫不质疑还慢慢关注起原本一无所知的游戏行业的信息跟我谈论业内问题（她是做外贸的），在我整天研究代码而忙得焦头烂额时，她包揽了家里所有内务：洗衣，做饭，打扫，甚至在我为BUG问题想得头晕脑胀时，还特意去网上学了按摩帮我舒缓神经，我只能说，在深圳这个物欲横流的城市，如果一个女生面对的是：男人不去外面拼命赚钱，却在家整天没日没夜的研究自己的东西，没收入，吃老本，经常要省吃俭用，衣服也不能给子买，还常常被忽略到她自己感受——即便这样还能尽量控制自己情绪和心情，没什么怨言，这很可贵，所以即便是艰难险阻和饱受非议，我也能毅然坚定自己的路，因为至少有一个人支持我。







![](https://pica.zhimg.com/3346403a946c2b90424327fea8da113f_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/8ee8ea2be58fdb97082d030dfc9071f7_r.jpg?source=2c26e567)




*Camala 最近迭代后的画面*




接下来两个月的时间里，我从一开始必须跟着教程一步步做甚至需要复制别人的代码，到慢慢地发现并解决人生第一个BUG，再到后来可以脱离教程独立设计一些简单功能，每天工作十几个小时，远比可以摸鱼的加班生活还累，但却十分充实，上一次如此投入地去学习一项技能大概是大学时研究单反的光学和色彩，这种久违的奋发感让我重新找到了学习的激情和乐趣，看着自己画的小人跟自己敲的代码结合在一起演变成可以互动操作的游戏时是一种莫大的满足感，我甚至开始要学着做动画，虽然大学时学过运动规律知识但早就丢得差不多，然后是学习声效控制，环境音跟场景氛围的契合，打击音效的音律节奏是否跟动画特效的节奏匹配，这些都是要去揣摩的点，粒子特效也是逃不过的，未来还有shader，物理引擎，2D光照都可以去研究……似乎我更多关注的还是感官的呈现上，这可能是美术学程序的惯性吧。




![](https://picx.zhimg.com/85d342957200a8ac14e2760454e0db9a_r.jpg?source=2c26e567)

*Camala 在steam workshop上可以试玩*

8月30号是我三十岁生日，我曾幻想过自己的三十岁的N种过法，但应该都没想到会是以今天这样一个姿态来迎接。回想十五年前那个少年时代的我在无趣的政治课上写下“为中华游戏之崛起而读书”的字样，心底一笑，2000年后中国的游戏产业是搞得风生水起，媒体和厂商们都追捧着流水过亿的神话高潮不已，产业是壮大了，但是产品的灵魂呢？如果陈星汉，Wong Ken回到中国还能做出《Journey》和《纪念碑谷》吗？
太远的事我不会去想，至少在我穷得不得不去上班之前。以独立开发者的姿态迎接我的三十岁，我也满足了，这些年多有亏欠自己，很对不起，没能早点做回自己。

独立开发那是比沙漠掘井还要更艰苦的废土之旅，一身黑皮衣，一把BB枪，还有一条dog meat就上路了。




[Camala—在线播放—优酷网，视频高清在线观看http://v.youku.com/v_show/id_XMTMyMjI2OTMyMA==.html](https://link.zhihu.com/?target=http%3A//v.youku.com/v_show/id_XMTMyMjI2OTMyMA%3D%3D.html)


---

# 做了两年多的独立游戏没有积蓄前途渺茫，我该不该放弃？ 刘美工

**Author:** 刘美工  
**Bio:** 类银河城游戏《HAAK》制作人  
**Avatar:** ![](https://pic1.zhimg.com/a542a9d4a_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/29dbe04d8ad530f418942e8367bf11cc  
**Published:** 2016.06.22 18:23:56  
**Updated:** 2016.06.22 18:32:52  
**Question:** https://www.zhihu.com/question/42819189  
**Question Created:** 2016.04.11 17:30:36  
**Question Updated:** 2016.04.14 20:35:12  
**Votes:** 451  
**Comments:** 159  
**Type:** answer  

我来说一下我做独立游戏第一年的故事




**题记**

——我希望从三十岁开始保持每年写一篇文章的习惯，这样六十岁退休的时候就能凑够一本书的字数了。




——去年心潮澎湃地写了第一篇《我为何走上独立游戏之路》（[什么促使你走上独立开发者之路？ - 刘美工的回答](https://www.zhihu.com/question/21719532/answer/61556518?from=profile_answer_card)），写得有些煽情，有些人觉得很感动，有些人觉得是软文，今年我要写一篇更煽情的软文。




——这篇文章从5月中开始写，有很多想表达的，但是我读书少写作很慢，结果断断续续写了一个多月，大概8千字，是目前为止我写过最长的作文，曾经语文考试800字作文对我来说都是噩梦。




——这篇文章赶在《镜界》上架AppStore的前一天写完，《镜界》是我职业生涯的第一款独立游戏，我希望在跟别人谈论起我的事业时能有一款拿得出手的游戏来替我说话。




**合作**

去年自学gamemaker三个月做出一个不怎么像游戏的玩意之后，我决定不再折磨自己年迈的脑子，于是拉拢了以前的程序同事Kuovane（后简称KV）来合伙做游戏。最初我们花了一周时间做了一个俄罗斯方块丢在WP上，大概每人赚到了200来块钱，这么做下去肯定没意思，正巧深圳另一家小有名气的柠檬酱工作室正在谋求跟其他工作室合作开发游戏，我跟KV有多年网游研发的经验，柠檬酱则在ios 轻度游戏这块闯出一片天地（传说中一年做了十几款游戏，有七款被苹果爸爸推荐过），他们熟悉苹果的套路与商业化运作，我们优势互补，于是双方一拍即合。看起来这是一次聪明合作，我们有明确的目标，计划着2-3个月就可以拿下，嗯，是不是听着很耳熟呢？……




![](https://pica.zhimg.com/2377141bc19ebfcc7d0b9080cee6cdc6_r.jpg?source=2c26e567)

*其实原本我打算叫“大宝剑工作室”，但我觉得做人还是低调点好*




**立项**

2015年8月的一天，在深圳久负盛名的吸血大楼科兴，我们两家工作室在一家咖啡馆里进行第二次面基。游戏类型之前已经定下来是动作平台类（action platformer），但题材还没敲定，有人提议一江之隔的香港，大家都觉是个不错的选择，而香港的套路无非就是警匪/功夫/僵尸/麦兜......但能不能更有逼格些呢？我想起押井守的《攻壳机动队》，里面的新港不就是以HK作为创作蓝本么？赛博朋克(cyberpunk)跟亚洲大都会总是很暧昧——鳞次栉比的高楼像男根一样直插云霄，霓虹闪烁的方块字招牌抻在逼仄的街巷上空，行人穿梭如织，夜雨凄厉如针，积水成洼的道路如镜子一般映照着城市的魅影。但这种风格的游戏多见于3A大作，比如Dues EX系列还有万众瞩目的Cyberpunk 2077，那么一款赛博朋克的2D平台动作呢？好像有点意思，于是一杯茶过后，我们确定了项目《镜界》的大方向。




**赛博朋克**

没什么太多仪式，我的初创项目就这样展开了。我跟KV各自在家工作，平时就靠网络联系，隔段时间我们跟柠檬酱碰一次，讨论进度和设计方案，然而一开始的进度不尽人意。我跟KV都是在网游公司工作多年，习惯了至上而下的流水线式的工作流，而柠檬酱的伙伴则习惯了自由开放的模式，两方在工作衔接上出现了诸多卡点。KV脱离了需求文档就变得很被动，常跟我说不知道该做什么，而我没了束缚则像脱缰的野马，想法大爆炸，前期花了大量时间去预研，想要做出逼格来。

先得弄明白的是“赛博朋克是什么？”，这就必须提到雷德利大爷的《银翼杀手》。虽然小时候就看过这部神作，但以我当时的心智与学识，除了记得有些香艳又吓人的镜头之外，并不知道这个晦涩的电影在讲些什么鬼。上初中时在《科幻世界》读到一篇文章说《银翼杀手》被美国人民评为史上最伟大的科幻片之一，对此还颇感惊讶，适逢当年《银翼杀手》的PC版AVG出了（研发商居然是西木头），院子里一哥们邮了一套4CD的正版跟我分享（没错，当年很多小地方的玩家买游戏只能找《大软》之类的杂志来邮购），说起来当年我也是玩过挺多AVG的：《无声狂啸》、《猴岛小英雄》、《凯兰迪亚传奇》等等......但这款游戏给我的感觉甚至比《无声狂啸》还要强烈，印象最深的是有一次我让主角站在公寓阳台上看着黑压压的钢筋丛林与穿梭其间的飞行警车，耳边响起萨克斯的电影原声，一阵空怅惘袭来，那一刻我竟放下了鼠标默默地感受了许久，一种神往又畏惧感，让人上瘾。

2001年黑客帝国的横空出世让硬科幻圈又集体高潮了，但更触动我的其实是他的动画版Animatrix，十个短篇故事相互呼应共同完善了Matrix的世界观:人类面对青出于蓝的AI时那些嫉妒、挫败、恐慌、愤恨……人格的真实虚妄与存在的哲学之辩，以及把赛博朋克带向极致与后启示录世界的无缝连接，一次对经典的反刍与延伸。

赛博朋克有毒。

但着迷不等同于掌握，就好像吃货不一定能做出好菜一样，当你需要进行基于某种亚文化的创作时，除了大量的体验，还需要更多提炼，而对于赛博朋克也好，香港文化也罢，其实我都缺少这样的积累，我甚至还没去过香港（作为一个在深圳混了7年的人），赛博朋克与香港的人文风貌能否在我的手里呈现出令人信服的效果，还是个未知数。

《镜界》作为我这样一个处女座的处女作，必然是一个承载了野心的，这些年来屡屡受挫的项目经历让我憋了一肚子火气，这一次主动权在手，命运在握，我想表达的东西太多，然而过分野心和理想化对于独立开发者是很危险的，因为很容易就耗尽团队的精力并最终导致项目流产……在苦苦摸索了半个多月，看了大量电影纪录片图文资料玩了各种相关游戏之后，我意识到这样的积累不可能在短时间内完成，我也无力构架出那么深刻的世界，我需要的是立马投入到实际创作中去而不是陷入无止境的求索，因为吾生有涯而知无涯，以有涯追无涯，吾狗带。

![](https://picx.zhimg.com/0263f5bf47a53026baff0d2d0150c47e_r.jpg?source=2c26e567)

“All those moments will be lost in time, like tears...in...rain, time to die.”







**美术风格**

现在我需要尽快确立美术风格。我预估到了这样一款动作游戏的美术量是巨大的，我已经在世界观上耗费太多精力，不应在美术上花更多时间去探索与创新，用自己最擅长的手法才是此时最明智的选择。近年来的我画风都是平涂大色块、硬边明暗关系加上勾线，接近于美式漫画风格，这种风格形体概括，结构清晰，色彩干净不油腻，处女座表示很舒服，加上绘制效率高易于修改，于是也就成了我这次最理想的选择。

我还需要一些实例参考来巩固思路。Klei是近来我很喜欢的一家独立工作室，从早期的Eets到这两年红得发烫的饥荒系列，他们做了一系列成功的美式卡通画风的2D游戏，其中《忍者印记》是一款略带赛博朋克元素的情景式平台游戏（cinematic platformer），我太喜欢这个游戏了，我把它打通了，自然而然也就成了我这次最好的参考，事实上从当初立项时，我的脑海中第一时间形成的就是类似《忍印》那样的画面感。

也许有人说情景式平台会是一种挑战，但这其实因人而异，我们都知道做项目应该根据团队成员自身特长来做迎合与规避。我们团队中都没有谁在平台游戏的关卡设计上有经验与心得，《马里奥》那样的强调关卡设计的传统平台类也许就不是我们的方向，而情景式平台游戏偏向表现和代入感，注重气氛渲染，这是我兴趣与能力所在。

所以《镜界》不会是一款机制上创新的游戏，这在一开始就定调了，它的核心竞争力定位在体验与包装上，我想呈现一种世故的画风来确保这点。

![](https://pica.zhimg.com/e097e3256275825047b770ed365aa764_r.jpg?source=2c26e567)

*第一张概念设计*







**地图关卡**

摆在我们面前的是两个地图模式选择：砖块（tile-based）和所谓的艺术风（art-based），两者各有优劣，但砖块地图显然是更多人的选择，相对容易上手，现成的实例、工具和理论都很完善，而艺术风地图有着更好的表现力，对于《Rayman：origin》那样的3A大作来说是一种实力象征，但这也离不开UbiArt Framework那样强大的编辑器的支持，这种地图模式对于我们这样的独立小团队具有太多不确定性，如前面所说，我们不需要更多的探索——能做完一个像样的平台类型已经足够探索的了。综合考虑之下，我们选择了传统砖块地图，但制作方法和工作流是摆在我们面前的新难题，这是《镜界》整个研发过程中遇到的第一道坎。

一开始KV尝试在cocostudio上拼出我在PS里画出的关卡图，然后再导入到Tiled Map中添加相应对象元素，这看着就不像是正确的打开方式，Tiled Map本身就是一个比较成熟2D砖块地图编辑器，完全可以独自胜任创建关卡；有些上手门槛，但熟悉之后就可以高效直观地搭建出包含所有互动元素的可运行的关卡，一站式地解决了关卡的制作问题，但是现在工作流还不够明朗，谁来设计？谁来搭建？

此时距离九月十五号正式开工已经过去近两个月，如果记得没错的话，我们计划中的整个开发周期就是两三个月而已，

关卡尚未进入可量产的阶段，很多相关的系统和设计也进展缓慢，大家开始有些焦躁不安。柠檬酱的小伙伴尝试着分担部分关卡制作，但这个方案没有产出理想的结果：

首先整个流程变得很复杂：出图，设计，制作，配置牵扯到多个人，环节太多导致沟通成本太大，太繁杂的沟通是我们这样的soho独立开发者应该尽量避免的。

其次由于人多，想法各异，关卡没有统一的思路与整体规划，彼此间无甚关联，体验会很破碎。

最重要一点是因为地图结构确实很复杂。当初我的目标就是要贴近《忍印》那样情景式的地图，比较合理而写实的场景，我要的不是砖块可以悬浮在空中，很刻意地告诉玩家：“嘿，哥们快跳上来，这是一块平台！”……这也就导致地图层次不可能像《马里奥》那样直白明了——我设计的视差地图分为三大层：前、中、后景，每一大层又细分成更多层次，其中中景最为复杂：路面、室内、室外、墙面、装饰、栏杆、招牌、灯光等等……这就导致大概除了我，没有谁能完整拼出一张最佳效果的地图，但也因为这一点，KV和柠檬酱的小伙伴其实都持质疑甚至反对意见，认为这种复杂化会拖长开发周期，这也是事实，但我认为是值得的，我相信我的坚持在最后会论证是有意义的。

考虑再三，最终决定由我独自一人来完成所有关卡的搭建，这是一个巨大的工作量，导致我不得不抽额外时间来顾及美术制作部分，会搞得自己十分劳累，但综上所述已别无他法，谁叫我头皮硬。







![](https://picx.zhimg.com/79417a73596f9cc06cb26708ee446ed7_r.jpg?source=2c26e567)

*第一张用tiled拼的游戏地图，当初想把怀旧感和赛博朋克结合在一起，并且希望场景有一定的转面透视，后来都放弃了*







**角色和动作**

在《通关！游戏设计之道》这本书中主角被认作一个度量单位存在，尤其是砖块类的平台游戏里这点尤为明显，主角的设计控制着整个游戏的流动方式，其优先级应该高于场景，但我却在地图风格确定之后才着手主角的设计，这源自我还没脱离一个场景原画的思维，老实说这不专业，一名独立游戏开发者与商业游戏公司开发者的区别在于，前者的职责边界很模糊，能力不一定要很精但要很全面，“不会写代码的策划不是好美术”就是说的独立开发者，在没有专门的designer配置的情况下，很多事情都得靠自己主动去分析，只管自己画得是否好看或者代码写得是否漂亮而不从更大的格局去分析，妥妥早晚要栽坑。

我把角色设计成与场景比例相匹配的半写实五头身比例，就像《忍印》那样，看上去自然是比《马里奥》世故很多（抱歉我一再拿马大叔作比较），这其实是给自己刨了一个大坑。根据恐怖谷理论，越接近真实的角色越容易让人觉察到动作表情的不自然，越会导致不舒服斯基，我们的角色已经足够写实到让人们大幅提高审视标准。我知道Klei的FLASH动画师就有十多个（这真的是一家独立游戏公司么？），他们的2D动作能做到几乎无可挑剔，而我虽然号称动画专业毕业，动画理论和感知力尚在，实际操作经验在毕业后几乎是零（一直做原画），但谁叫我头皮硬啊偏向虎山行。KV建议用骨骼动画，于是我又折腾好几天把spine学会了，然后在《忍印》和《闪客2》里截取各种动作，一帧帧照着摆，也是没谁了，好歹终于做出几个主角动作当时还是蛮沾沾自喜的，但人啊就是这样，如果努力做了一个不怎么擅长的事就容易自嗨，自己完全看不出好坏，直到我不断收到外界各方负面反馈时，我才意识到我还是得找一个专业动作来帮忙。




![](https://picx.zhimg.com/c200d7151c16493d0272b998dc739c04_r.jpg?source=2c26e567)

*敌人设定*







之后我接触了一些动作外包，叫价有高有低，沟通起来总觉得很累很烦，并且不靠谱，因为自己也曾做过许多外包，我也是坑过甲方的（当然这是甲方观点）。后来接连又找了一些熟人朋友帮忙，也是草草收场没能做出如意的效果，我开始反思，很多的独立游戏都选择Q版像素风格可能是动作比较好做，像素帧动画有很多讨巧办法做出有节奏感和动态的动作，用spine做骨骼动画要达到同样效果很不容易。

最终我在一个spine群里搜到一个深圳本地的动作师傅，能力在我之前接触过的人中是最好的，最重要的是他住在白石洲离我很近，我们可以面对面沟通避免一些问题。在我俩紧密配合之下，游戏里的角色动作都有了较高的提升，虽然后来测试的普遍反映还是有生硬感让一些人感到不爽，其实我自己而言是满意了的，但一些玩家的评判标准不会因为你是2个人还是20个人的制作团队而改变，他们只要结果，这有时候会让独立开发者的我们感到一丝委屈。







**特效和UI**

现在许多游戏都喜欢靠堆砌特效来掩饰自身不足同时营造一种大作的幻觉，尤其是网游，简直是特效播放器，但这种媚俗浮夸显然不是我的追求，《镜界》压根儿就不是一个炫酷的游戏，也不是纯ACT游戏，在国内的游戏分类中平台游戏（platformer）时常跟横版卷轴动作游戏（side-scrolling action）混为一谈，这不严谨，我收到了许反馈诸如“看着像跑酷”、“为什么招式那么少？怎么没有大招？不能翻滚闪避突刺？”让我哭笑不得，如何消减玩家对游戏定位的理解偏差是个问题，我目前能做的是在特效和UI的风格上表明自己态度。

最初的版本里我用到的是粒子特效，对于很多独立游戏来说粒子特效简单又出效果，十足indie感，但对于我们这样的游戏画风来说，似乎又有些廉价感，于是我再次请出了《忍印》和《闪客2》，对里面的手绘特效进行模仿，没有比手绘特效更适合我们这样漫画风格的游戏了。

相较于几乎从未涉足过的动作和特效，UI还算是我有些许经验的。我选择了比较简约的sci-fi风格，如你所料，依然是参考Klei（看得出我有多推崇这家公司的美术了吧）），这次是《隐形公司》，简单的线条组合，没有花哨的技巧，其实自始至终我希望传达的理念那就是随意，干净，沉稳，从最初的场景设计开始，我就秉持这一理念，用我国著名独立游戏人小棉花的话来说就是要“糙”——初听都觉得很扯但回味一下也是有些意味的，独立游戏确实无需掩饰自身缺陷，不应走向与大团队拼精细度的不归路。







**量产**

时间过去了三个多月，此时已临近2016春节，原计划中的“两三个月拿下这个项目”早已是彼此心照不宣的笑话，但欣慰的是我们已经有了流程基本完整的版本，各种规范标准都已定下，接下来是关卡铺量，压力集中在我身上，这个年关让我倍感沉重。

2015年中辞职后，来自家里的“质询”就一直没断过。我没办法说清我到底在做什么，想要做什么，能做到什么样，尤其在家里老人看来，没上班=没有工作=虚度年华——“三十岁正是奋斗的时候呢……”“还有钱花吗？要不要给你打一点？”听到这些我只能苦笑。原以为2016年一月份就可以交上一份答卷，让我紧绷了半年的神经能缓一缓，但现在手头却还有大量工作压着，我甚至想过今年不回家过年……

“要不是你妹过年结婚，我还真不一定会回去过年……”搭高铁回家前几天，我对Queenie姐这样说。




![](https://picx.zhimg.com/846f6b5c545323a4e3982c1c19c981b4_r.jpg?source=2c26e567)

*关卡设计的草图*







回到老家后我马不停蹄地开始了关卡的量产化工作，我认真地分析iOS上的竞品《Sword of Xolan》和《Goblin Sword》的关卡设计，总结出他们的思路并做好笔记，慢慢地摸出了一些套路来。一张完整的地图包含基本的通关路径逻辑，隐藏解谜要素的嵌入，基本的敌对元素的排布，在视觉上跟前后关卡有承接感，又保证一定差异性。熟练之后我需要3天来完成一张，这样算下来还需要很多时间才能铺完所有关卡，算上后续优化调整的时间，整个游戏的开发周期有点拉的过长——不能如期完成这很正常，但太多项目都是被漫长的修改变动而拖死的，我很警惕这点。那段时间我们的程序哥KV告诉我他耗不了太久，再这么拖下去只能先去上班糊口，我可不希望我们也变成“游戏还有一个月上线，程序却离职了”的情况，于是整个春节除了年三十休息了一天，其余时间我都在奋力拼关卡。

正月里外婆突然病倒了，在医院我看到她被病痛折磨的样子，让我思考了很多关于个人追求的问题，我对我现在奋力追求的东西有了动摇，我质疑这样的人生选择是否值得我为之奋斗到老，苦逼的游戏行业还要挣扎多久？自从入了这行，我就越来越难以享受当年作为玩家时的游戏乐趣了，每天做着需求，时不时翻看下媒体公众号的行业新闻，惯性地下载一个新游戏玩上两分钟分析它的美术和玩法后就没有然后了，也不知是真的喜欢这样生活还是职业病习惯而已。

半个月后外婆的身体渐渐好转，我也准备返回深圳，关卡此时已经完成了大半，压力不再那么大，但心情依然是灰色的，接下来要准备公开测试了。

![](https://picx.zhimg.com/df8d103118f201be54cac22b8a31697e_r.jpg?source=2c26e567)

*过场动画收到普遍赞誉，超过游戏本身，这要归功于柠檬酱JACK的妹妹高超的视频剪辑技艺*







**测试与打磨**

三月份的版本已经相对完整，柠檬酱的小伙伴也逐步发力，开始接触苹果和游戏媒体，同时也迎来了第一次公开测试，终于要见光了，忐忑是肯定的。测试反馈出的问题集中在手感欠缺，动作僵硬，枪的定位不明确等几点，大多也是意料之中，总的来说玩家评价还是正面的，至少没有谁骂“辣鸡游戏”。随着BOSS关卡的相继完成，关卡数量也基本满足了上线需求，我开始了最后一波美术迭代工作，但动作僵硬这个老大难问题还是没能找到突破口，我从这一点上吸取到的教训尤为深刻，如果是下一个项目，要么不要做动作类的，要做也不要用太正经的风格。

关卡体验其实是我一直很担心的，因为测试版的限制，玩家不一定能发现关卡的问题，但我自己心里是有数的。虽说我也花了不少精力在关卡上面，但比起其他竞品来说，打磨时间远不够。柠檬酱的JACK负责了后期关卡体验的调整，从数值上和怪物排布上进行了大胆的修改，我则更多是配合测试和给出反馈意见，几经磨合之后关卡体验已较之前改善许多，耐玩度提升了，难度曲线也更加合理。手感方面则从状态的优先度着手优化，去掉了连招导致的硬直锁死时间，一定程度上增强了角色的灵活性。

老实说，后期的打磨过程比我想象的要顺利并迅速，一方面可能大家经过半个年也有了一定磨合度，效率比一开始要高，另一方面也因为大家都秉持“不改设计，不加需求，只优化调整”的正确方针才得以在较短时间内完成这项工作。我曾参与过至少三款因为不明确的方向和无止境的修改而夭折的项目，回过头再看这次的《镜界》，同样充满了未知与不稳定因素，中途放弃的危机不是不存在。

“能坚持下来，做完这个游戏，已经比很多夭折的游戏要幸运了。”我跟所有人都这样说。




![](https://pica.zhimg.com/99dba1363598dfdee76e8a0a143b46c1_r.jpg?source=2c26e567)

*上线前邀请了一波深圳本土独立开发者来帮忙测试，十分感谢你们*







**交卷**

在写这篇作文的过程中，游戏提交了苹果并很快通过了审核，再一次比我想象中的要顺利，先前耳闻中的“被苹果打回不断回炉修改”的情况并没有出现，我肩上的最后一个担子放了下来。

家里人也从最初的质疑转变为后来的关切，现在问我更多的是“你那个搞得怎么样了？什么时候上市？”，我告诉外婆，24号游戏上线那天请在老家为我放一挂鞭炮。

Queenie姐说她这几天很紧张，做梦都是游戏上线后的事情，她问我紧不紧张，如果我回答不紧张，肯定有人说我装逼，但要说紧张又不是我内心真实境况，曾经游戏第一次要面对玩家时我是紧张的，因为紧张来自于未知，我害怕有人说“辣鸡游戏”，我脆弱的自尊心受不了这样的刺激，而现在不再紧张是因为我能预估大家的反应：不会太糟也不至于上天，有过一些云烟但终究会飘过眼，如果一定要说出我现在的心情，那就是焦虑，因为独立游戏这条路要怎么继续走下去，对我来说还是未知的。

————2016年6月22日 16:07分


---

# 什么促使你走上独立游戏开发者之路？ 小棉花

**Author:** 小棉花  
**Bio:** 游戏制作者  
**Avatar:** ![](https://picx.zhimg.com/v2-04b9e82325d38c56568ab47fb115ffe5_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/baf0e0d70b840cb234c925f7c03b5273  
**Published:** 2020.07.10 22:04:47  
**Updated:** 2020.07.10 22:04:47  
**Question:** https://www.zhihu.com/question/21719532  
**Question Created:** 2013.09.28 12:31:33  
**Question Updated:** 2019.05.17 21:23:14  
**Votes:** 149  
**Comments:** 18  
**Type:** answer  

我一直觉得，这个问题最简单的回答，就是“命运”，

但是后来，我发现我错了。

——————————————————————————
很多年前，我去某地参加一个和游戏开发相关的会议。

打车前往。

途中，由于无聊，就和出租车司机开始闲聊起来。

司机是一个长相颇为沧桑的30多岁的男人，他漫不经心的表情目光和沉着嗓音让人看到了他荣辱不惊的人生阅历。

所以当他得知我是一个游戏制作者并开始询问我开发过什么游戏的时候，我开始恶作剧起来。

我说：“我是开发王者荣耀的。”

司机当场就惊叫起来：“真的啊！”。

他握着方向盘的双手甚至有点微微颤抖。

我接着又缓缓地说到：“我开玩笑的。”

司机瞥了我一眼，发亮的眼睛慢慢暗淡了下去。

我接着补充：“不过，阴阳师是我开发的。”

又一次，他语无伦次激动地叫到：“真的啊！”

我又说：“假的。”

他显然有点恼怒了，转过头，恶狠狠地看着我说：“你别开玩笑了。”

这时候，我说：

“抱歉，师傅，刚才是开玩笑的，我们真正开发的游戏名字叫做《南瓜先生大冒险》。”

![](https://pica.zhimg.com/50/v2-8b258ec394b70d227fbe3466037e5379_720w.jpg?source=2c26e567)

司机摇了摇头，说：“没听说过。”

我说：“这个游戏很出名的，大作。不亚于王者荣耀。”

他显得有点尴尬，连忙解释道：“啊呀，我们司机哪有什么时间玩游戏啊，忙着挣钱啦。”

**我一脸得意。**

不过，下车的时候，司机可能有点反应过来了，知道我最后一句话也是骗他的，

所以，当我结账付钱的时候，他探出头来，对着我恶狠狠地说：“你这小子尽说假话。”

那时候，我虽然已经开始做游戏，虽然已经因为游戏拿过一些业内奖项，虽然也参加过大大小小无数的游戏活动，甚至在一些场合发表过诸多的开发分享和演讲。

但是，我仍然对游戏的影响力抱有怀疑态度。

甚至很讨厌很多人在公开场合发表诸如游戏是第9艺术，游戏文化比肩电影文化，游戏制作人就是新时代的巨星等等言论。

再甚至，作为开发者，我还有点精神洁癖，对游戏消费市场甚为轻视和不屑。觉得不过是一些死宅拓展自己虚拟人生的聚居地。

这就是为什么我会拿一些最出名游戏开涮的原因。




那之后的一个月，我和朋友去参观一个大型游戏展。

作为观众，走在熙熙攘攘的人群中，眼花缭乱。

这时候，有人突然冲到我面前，对着我说：“你好，你是南瓜先生的开发者吗？”

我说是啊。

他说：“好棒，我可以喜欢你的游戏了，我们能合张影吗？”

我有点诧异，这么不知名的一款游戏还有人能知道，甚至能认出作为开发者的我。

实在有点让自己小小满足了一把。




而后，某次在餐馆吃饭，宴请从外地来的游戏同行。

席间，我们隔壁座的某陌生人突然对我说：“你是开发南瓜先生的那位小棉花吗？”

这一次更是让我震惊到了无以复加的地步。

我已经这么出名了吗？随便街头的一个陌生人都认识我了？

这也太巧了吧。

为此，外地朋友嘲笑我，太假了吧，第一天来上海玩就能在餐馆碰上你粉丝？

我只能费心地给朋友解释，这个人绝对不是我派来假装表演我在上海游戏圈具有知名度的托。

**他就是真的认识我，是粉丝！**

我后来慢慢意识到，我们的游戏真的有粉丝。




后来的后来，这几年，我们陆续做了很多游戏，自然也就有了更多的粉丝。

有还在读初中的小朋友，

有已经工作数年的城市白领，

有远在某边远小镇的小镇青年，

当然，还有远在俄罗斯的粉丝，

他写信给我们想要免费帮我们做俄语本地化的工作，原因只是因为他儿子喜欢我们的游戏。

还有很多很多...

这些都是不一样的年龄不一样的人。

但是因为喜爱我们的游戏，他们有了相似的属性。

**那就是胖布丁游戏的爱好者。**




今年愚人节的时候，我又开始恶作剧，写了篇文章。

文章标题是：《迷失岛还会有续作吗？制作人：“不会了...”》

其中一段是：

"在持续制作《迷失岛》系列的过程中，我们已经意识到，点触解谜游戏并不是一个热门的游戏类型，也很难吸引更多的玩家购买。这不怪任何人，也不怪这个行业。虽然我相信，我们有热情有爱有想象力，但是，也许我们做得还不够更好，没有获得更多的认同。就目前产品取得的市场结果而言，远不足以支撑我和我的小伙伴们继续走下去。
所以，我不想说，但是不得不说:《迷失岛》系列，在《迷失岛前传海边游乐园》之后，就此完结。

未来，我们将不再继续制作《迷失岛》后续游戏，希望大家理解。“

文章发出来之前，我并没有去细想玩家的感受，只是觉得某些粉丝会有些许的失望吧。

但我万万没有想到的是，

短短几个小时，几百条粉丝留言中，

非常多的人都说当他们看到这部分消息的时候，感觉自己就要哭了或者已经哭了。

还有一条我印象很深，她说：

“都是已经当妈的人了，看到这个消息的时候还是忍不住哭了。”

![](https://picx.zhimg.com/v2-ce588634b68ffe4e8dbb02fc22ee77d3_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-2fecd3f2dac7cb6d586bda4ccb14822a_r.jpg?source=2c26e567)

![](https://pica.zhimg.com/v2-7fd9273faff1c4c338b32372ee9a4a8d_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-becdedb35023e12c469c2d81464797d4_r.jpg?source=2c26e567)

![](https://pica.zhimg.com/v2-80fe59619c081c0ce600c165efa3c022_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/50/v2-889e1c8d5b8c7e07cc7a1efe02feddee_720w.jpg?source=2c26e567)


我特别想一一回复这些玩家：

“别哭，你们哭搞得我也想哭了！”

这句话是我的真心话。

前几天，

我写了一篇关于我为什么要开发《迷失岛前传海边游乐园》的文章，

其中提及了现实生活中的一个游乐园，正是因为它激发了我的灵感，才有了这一部前传。

![](https://pic1.zhimg.com/50/v2-10220ad271db83d8ea68a3836dac2ac8_720w.jpg?source=2c26e567)


没多久，我收到了一个玩家的留言，

他说：“海边游乐园的原型地在哪里呀，有机会的话想去看看。”

![](https://picx.zhimg.com/v2-00a2716e11fd20862c58c06ee4c548fd_r.jpg?source=2c26e567)


说老实话，这句话很平淡，可能也不能代表什么，玩家也许就随口一说。

但是，我一直想着这句话，一直觉得，会有人，因为喜欢我们的游戏，因为知道我们的游戏的灵感来源，愿意去找到这些偏僻的不为人知的地点，去旅游，去打卡。

真的很让人感动！

所以，我现在知道，游戏，不仅仅是别人的一些大作，甚至包括我们自己做的一些小作品，也在影响着很多玩家。

这些玩家的喜悦快乐包括伤心和眼泪，都让我强烈地想要做更多，

哪怕这些更多的更多，永远不可能像某些大作一样，成为全民热点，社会现象。

但是，我已经明白，只要我愿意去做，就有玩家愿意去玩，

也有玩家愿意为此去体会感受和感动。

我在用自己的游戏改变这些玩家的生活，

而反过来，这些玩家的热爱，也让我对游戏的想法发生了改变。

所以，我想，

其实是**玩家的爱促使我真正走上了独立游戏开发者之路。**

而最终，这些带有爱的游戏，改变了你们和我以及我们，

也就是改变了这个平淡无奇的世界。


---

# 什么促使你走上独立游戏开发者之路？ 穆飞

**Author:** 穆飞  
**Bio:** @火箭拳科技 创始人，硬核机甲制作人 追求高质量单机游戏  
**Avatar:** ![](https://picx.zhimg.com/30d58b699_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/e61f71a5290b88788b3f3c92fd2ef5c5  
**Published:** 2020.07.10 13:36:55  
**Updated:** 2020.07.10 13:36:55  
**Question:** https://www.zhihu.com/question/21719532  
**Question Created:** 2013.09.28 12:31:33  
**Question Updated:** 2019.05.17 21:23:14  
**Votes:** 927  
**Comments:** 84  
**Type:** answer  

我叫穆飞，从小热爱主机游戏。

现在租的40平的独居小房子中有个陈列架，上面摆满了从小到大给我带来快乐的游戏机们。我休息的时候经常会在这个角落里观赏，复古和情怀能不断让我再次体会儿时的快乐，非常治愈。

![](https://pic1.zhimg.com/v2-437cdc73929b2c0b6598a11d747038fc_r.jpg?source=2c26e567)

还像平时的晚上一样，回到家中。拆开快递盒子拿出了一张普通的国行PS4光盘。这款游戏本来我已经打通了好几遍了，本打算新出国行版后买来作为纪念，放在我的游戏机藏品架上。但是心血来潮决定再打一遍回味一下。

我立刻打开光盘，插入游戏机，熟练地通了一遍。看着制作名单，房间内回荡着片尾曲《Step into lights》。让我感慨万分。

这款游戏就是《硬核机甲》，而我就是这款游戏的制作人。

![](https://pic1.zhimg.com/v2-367c91e00248bb26c9adaad4e6f970bc_r.jpg?source=2c26e567)

转眼间，《硬核机甲》发售一周年了。

这个40平的出租屋，便是一切开始的地方。在2016年初，这个游戏的名字还叫做《代号：硬核》，后来因为一些奇葩原因在海外无法注册商标（和《死或生2：硬核》名字冲突，因为都有"冒号硬核"。我：？？？），后改名为《硬核机甲》。起了这么一个朴实名字，也是为了好养活。在我们团队内部还给了他一个很萌的外号，叫"哈妹"（Hardcore Mecha两个单词的首发音Ha Me）

在4年前，《硬核机甲》还只是个脑中的概念。它已经作为一款完整的游戏刻录在光盘里，可以被更多的玩家体验到了。

## 一年

《硬核机甲》发售后的这一年，对我们火箭拳的每个人来说，都是命运的转折点。我们不仅做完了一个完完整整的主机游戏。还获得了很多梦想中的荣耀。发售之后，日区首月下载量第一，Fami通33/40黄金殿堂，IGN8.8/10的Great评价，各国媒体和玩家的好评，等等等等。

![](https://picx.zhimg.com/v2-4258df39572e773e514081052fc999df_r.jpg?source=2c26e567)

国内的主机开发产业几乎为零，我们每个人都没有制作主机游戏的经验。"哈妹"给我们带来了数不清的人生第一次的宝贵经历。

我们体验了顶级歌手影山浩宣的录歌现场。

![](https://pic1.zhimg.com/v2-d23318dd86e5d604de5e9a99958895b9_r.jpg?source=2c26e567)

体验了给游戏配音的苦难。

体验了游戏上线的各种腥风血雨。

![](https://pica.zhimg.com/v2-472b51beb8251777292e7672222ec6a8_r.jpg?source=2c26e567)

体验了自己作品的角色被立体化的兴奋。

![](https://pica.zhimg.com/v2-a43da4d038baa0b809685c033d9f0dc6_r.jpg?source=2c26e567)

体验了购买自己作品周边的快乐

![](https://pic1.zhimg.com/v2-e8e024df41c38c3c390273c30da0a9da_r.jpg?source=2c26e567)

体验了和各大主机大佬、儿时的偶像同台领奖，平等交流。

![](https://picx.zhimg.com/v2-c261006f448061b03a82275615e0fa2c_r.jpg?source=2c26e567)

体验了作品给各国玩家带来欢乐的瞬间

![](https://picx.zhimg.com/v2-4a1c2140619bfce127a51306cb164ec0_r.jpg?source=2c26e567)

体验了实体店里铺满自己作品的自豪感

![](https://picx.zhimg.com/v2-bda1a7dc548f2b255b4df168ceadeccd_r.jpg?source=2c26e567)

并且除了光盘，还带回来了玩具、限定版、同捆主机、各种奖牌……这些就都是几年前我们几个人在这里的美好梦想，甚至想都不敢想的事情。而现在，都实现了。

![](https://pic1.zhimg.com/v2-34339720fd320e332b745f8be49c4bf2_r.jpg?source=2c26e567)

能够走上游戏开发的这条职业道路，真是太好了，太幸福了。




## 姥姥带我吸的“电子海洛因”

至今我都认为我很幸运，我的游戏人生刷到了SSR的初始。从我小学2年级时，我姥姥就疯狂安利我一种叫做“游戏机”的东西。一开始我是懵逼的，这是有个机器手丢手绢在我身后？还是它当老鹰我当小鸡？但看过姥姥演示完打鸭子后，我整个人就惊呆了。电视机的画面居然可以互动，这太赛博朋克2077了。从那之后便一发不可收拾，堕落至今。

![](https://picx.zhimg.com/v2-8a7d0c7e39c73c58631330b89ae13854_r.jpg?source=2c26e567)

想玩主机就只能在姥姥家玩，姥姥也会经常会瞒着我父母“走私”给我一些最新型的游戏卡。也是在这段期间疯狂的喜欢上了马里奥系列。马里奥系列是我从小就痴迷的品牌，鲜艳明快的色彩，脑洞大开的场景和角色。作为卡通形象，没有米老鼠那样主旋律小动物“伟光正”，也没有那种只要是男孩就一定喜欢机甲的恶俗感。马里奥在那个时代我的周围并没有那么热门，甚至没有周边，是我这种不愿入大溜的小学生的逼格佳选。

## 倒戈到机甲

前几句话我说到了很不符合我人设的话。但是没有错，我小时候很讨厌机甲。身边的男孩天天都在追捧高达、变形金刚、战神金刚、福音战士啥的。太硬，太俗，有啥好的。我估计我这辈子都不会碰这些玩意的。

但人生永远逃不过真香定理。转折发生在初二（中二）。我和一个同学交换GB卡玩，把里面的游戏反复玩到腻后，百无聊赖的打开了最不想碰的一个《第二次超级机器人大战G》。那时候最不喜欢机甲和战棋，只是抱着随便看看的态度试试。结果没想到，玩了第一章，我就入坑了。

![](https://pica.zhimg.com/v2-763eb0dac70e690d9ac1f485fccf796d_r.jpg?source=2c26e567)

虽然战斗画面只是几张图片的位移，但那种能够挡下各种伤害的厚重装甲、能够躲开光束子弹的机动性的感觉，让我欲罢不能。从此就直接变成了一个成长率A的萝卜控。疯狂看动画，补游戏。

嗯，模型还是买不太起的。

## 迟到的游戏开发人生

游戏玩的多了，逐渐也会管不住这双手，也想有样学样的做点什么来释放一下内心。但其实在大学之前大部分只能靠创作马里奥同人漫画来满足需求，并没有真正制作游戏的机会。

![](https://pica.zhimg.com/v2-d36320c07aa96bc96764e1ad73174b4e_r.jpg?source=2c26e567)

最能接近游戏设计的创作，是初二时根据《口袋妖怪》初代改的一套冒险棋。做这个游戏的初衷，是看校门口卖山寨的口袋妖怪对战硬币，很多不玩游戏的同学都在买。我看到了“市场”，但实在看不过这套山寨硬币粗制滥造的样子，而官方的口袋妖怪卡片门槛又太高，一气之下自己做了一个出来。60种可抓的怪，100种可对战的怪和超还原的冒险地图，有道馆、有火箭队、有四天王。两个玩家碰到一起还会强制对战。两个玩家互相竞技看谁通关时间需要3个午休，中途可以存档。现在想想最有趣的是当时调整的整套数值还非常平衡，通关难度刚刚好。而且那个时候并不知道世界上还存在龙与地下城这种东西。

![](https://picx.zhimg.com/v2-9a31e4222d750988a68517c2996fd754_r.jpg?source=2c26e567)

其实小时候从未想过自己以后能以游戏开发为职业，直到到了高三得知家附近有个叫做北京电影学院的地方里面还有游戏设计专业，才临时转变了自己的职业规划。这才是我毕生应该追求的梦想！（觉醒的太晚了点儿……）

在大学钻研动画技法时，第一次对机战的元件动画做了尝试，把BB战士模型拆开后给每个零件拍摄了多个角度，然后在FLASH中拼接，嘿还真像那么回事。虽然当时只是无心之举的技术学习，但也正是从那个时候奠定了现在的技术基础，让事情变得更可行了。

![](https://picx.zhimg.com/v2-533db20e32e178a4cfe8354d2ca01b82_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/50/v2-8658cb72eca19123a24b83dca96d76c1_720w.gif?source=2c26e567)

![](https://pic1.zhimg.com/50/v2-28b6dc8b3330ec4e46bb607026a242c9_720w.gif?source=2c26e567)




还没毕业进入游戏开发行业，做过独立游戏也做过商业游戏，但非常惭愧的是，努力了将近10年，总是因为种种原因，一款上线产品也没做出来。当时很失意、很迷茫，没有上线项目的经验也让我的履历有很多的绊脚石（直到哈妹上线之前，也有很多资方因此认为我是做不出上线项目的）。但也许命中注定只能自己干了，无论如何，做一款自己认可的游戏是势在必行的事情。

## 硬核梦想“火箭拳”

其实说来奇怪，在一开始计划创业的时候并没打算想做机甲游戏。机缘巧合2015年的春节，我在陕西爷爷家的窑洞中，那里没有网络没有电脑没有手机信号，是最适合创作的地方。我突然脑洞大开，决定要创作一个2D动作版机战，实现我一直以来的梦想。一个通宵下来，硬核机甲的雏形设计定下来了。当时定了几个贯彻始终的核心概念：

- 各种战斗方式差异化巨大的机甲
- 驾驶员要能够脱出并放大驾驶员战斗的比重
- 操作要自由，还原动画片中驾驶员的操作感受

![](https://pic1.zhimg.com/v2-25a7d05b4dc8390562d307c2ab6afbac_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-b014844744845131c04d4cceecda2b05_r.jpg?source=2c26e567)

在初期给公司起名的时候。甚至还想过叫"灯泡"、"新蜂（NewBee）"这样比较小巧可爱的名字。直到看了电影《超能陆战队》，里面大量致敬了魔神Z和火箭拳。我就下定了决心，选用了这个不仅能够纪念我们的第一款作品，也有着能够打破一切阻碍的寓意的名字。再小巧可爱的低调下去，会憋坏我那躁动的心。火箭拳，就这样诞生了。

![](https://pic1.zhimg.com/v2-b887ef144b4f3245425c11d86d8f9bb5_r.jpg?source=2c26e567)

![](https://pica.zhimg.com/v2-384fd78be570fd81a872926df5db641d_r.jpg?source=2c26e567)

早期，火箭拳只有三个人，就这样挤在一个40平不到的出租屋里，进行着最早期的创作。概念视频、原型demo也就是那会儿做出来的。

![](https://picx.zhimg.com/v2-292f7c02633d313a5ef29f06e8df4f8e_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-474f7fd01136f5d8be94bae1d9821065_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-3cb442729968d73ebaf03765784be1a4_r.jpg?source=2c26e567)

在demo做出来之前，游戏的玩法还只停留在脑内。市面上也没有类似的游戏玩法被验证过。这时的我是非常紧张的：如果游戏不好玩，我们的钱根本不够活到再做出一个新玩法。直到demo做出来上手玩过后，才真正感受到这个业可创。

[](https://www.zhihu.com/zvideo/1264725738433527808)

▲第一个原型机，实现了最核心的玩法，DASH以及射击


## 钢之魂的情怀

"机甲"是一个让众多开发者而却步的领域。机甲玩家们的要求很高：造型帅气，设计合理，情节扎实，表现过硬。想要做一款能满足核心玩家的作品，要跨过非常高的门槛其实。开始做机甲游戏以后，我一直在想，也许机甲游戏这么少，也跟这份不妥协的硬核有脱不开的关系。但对于我来说，"机甲"，是爱，是梦想，是不管有多难也要去实现的东西。作为担负着“做自己认可的游戏”的大负担的第一款游戏，我需要去实现别人虽然憧憬但不敢尝试的东西。灌注了情怀和责任，事情做起来才有意义，才爽嘛。

《硬核机甲》的第一追求，就是要能够自由操作，像动画中的主角一样控制机体。我玩过很多机甲游戏，像一些3D带自动锁定的对战游戏，虽然全部自动化玩着省心，但因为镜头也一并锁定，必杀技也都是一键连招，很多时候玩家对决就变成了两个人原地转圈，看谁先出手，不同玩家间的视觉效果比较不易做出差异化。

![](https://pic1.zhimg.com/50/v2-8910b82d8592e17d887cb8b9349e4d5d_720w.gif?source=2c26e567)

我很喜欢玩这些游戏，但心中一直想玩到的一种感受，是这些前辈游戏一致没有实现的：

而看动画片中，驾驶员们都会通过各种机体中的机动功能组合出独创的技能令对手惊讶“居然还有这样的招式？！”。这种帅不在于特效，而在于驾驶员的能力。

![](https://pica.zhimg.com/50/v2-c7eef63680d3933aee3eb585e3aa918f_720w.gif?source=2c26e567)

![](https://picx.zhimg.com/50/v2-ab02c1e2560d925575a3acb9203cb4bc_720w.gif?source=2c26e567)

这是一种自由，不被自动化和各种辅助所约束的自由。划出优美的轨迹，做出假动作，使用火力压制，高速影分身，走位欺骗，临时躲藏，这些战术都不是一键呼出的预制动作，而是要靠驾驶员自己。我想要去实现现有的机甲游戏中无法实现的、这种动画片里才有的帅气感。

我们在设计的时候，随时要确保每个技能尽量的简单、直观，不能过于复杂。攻击技能只有4个，每台机体按键配置都一样，要符合玩家的直观统一性。绝对不能搓招，甚至连《任天堂大乱斗》的组合键对我们来说都是复杂的。按键和招式一一对应，上手尽量简单，才能确保高玩能将最大化将精力用在自己的表演上。只有这样才能理解战场上使用"全弹发射"是多么的废手，TRANSAM发动后对驾驶员的负担有多大，王牌机师的帅气连击是多么的不容易。

这个设计的想法我觉得还算是成功。因为上手门槛低，在线下活动的时候，各种年龄段各种性别的人都能玩的欢乐。我希望这款游戏既能成为休闲娱乐的游戏，同时也能给网络上高手对局充足的炫技空间，成为一款有竞技深度的游戏。

![](https://picx.zhimg.com/v2-87182a02aff168e1b7a5aaf66e7db171_r.jpg?source=2c26e567)

我们深知，我们的核心玩家看的不仅是游戏好不好玩，画面绚不绚，还看重其中的细节设计。我们在剧本设计时为了让合理性的战争和戏剧性能够融合，花费了很多精力来推敲。让场景、故事、设定，甚至敌人的出现方式都是有据可循，合情合理。当然也留出了玩家对幕后的猜测空间。（果然看到已经有玩家推测出幕后的动机了，为了不剧透，就不在此展示了）

![](https://pica.zhimg.com/v2-4567cec5c4bb611ee8c235e797091f08_r.jpg?source=2c26e567)

当看到各国的主播玩到母舰关的尖叫，潜入关大逃脱时的兴奋，合体机时的开心大笑时，我们就知道我们做到了，这个正统机甲的目标达到了。

这款游戏的第二追求，就是2D。2D有很多吃力不讨好的地方，技术门槛高、空间表现力难以发挥、容易被国人先入为主扣上4399廉价小游戏的帽子。也许一个成熟的游戏公司，就不会去追求这样的情怀。但是玩了这么多年机战的我认为，只有2D，才能将机甲的力量发挥到淋漓尽致的唯一手段。或许是被一直坚持2D极致的眼镜厂所感染，或许是感觉趁着年轻还有最后的机会再浪一把，对"发扬光大2D动作游戏"的挑战，就这样自作主张的接下了。

2D和3D不同，在制作大范围动作的时候将会有着巨大的工作量。每增加一个元件的角度，就得增加一张图，还得搭建复杂的动画结构。而我们为了实现各个动作中的平滑切换，使得这任务变得数倍艰巨（从事过2D骨骼动画的专业人士应该都知道，动作游戏中实现随意平滑衔接有多费劲）。为了实现这些，我们会将动画每一帧反复研究、反复打磨，让每一个换图的瞬间都掩藏起来，让玩家察觉不到，仿佛在操作一个高帧数的传统手绘动画一样。虽然很累很费时间，但这些在创作中融入技术思考的挑战感，比单纯的做动画还要有趣。

![](https://pic1.zhimg.com/v2-a9d34915af478e7d5fffa612ff6cc354_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-20017dfd7c3b98530c567e32b83acd28_r.jpg?source=2c26e567)




《硬核机甲》的第三追求，是要达到“虽然是2D游戏，但要五脏俱全有一个完整的演出效果”。这是以前玩《使命召唤4》带给我的震撼，创作一款像在玩电影的游戏，是我今生无论如何也要追求的梦想。

我不希望2D横版游戏就一定要做成银河战士恶魔城那样站桩对话的效果，我想要尝试2D游戏对于演出的表达手法的极限。但作为一个2D游戏，也会令演出受到巨大的限制，想做复杂动作和运镜的话，消耗的时间精力成本就会远超3D。所以《硬核机甲》所有的过场动画都限制在一个平面上，就像编导一个舞台剧一样。这意味着我失去了整整一个维度的表现空间，没法做POV特写、转镜头等镜头语言。

这种做法没有参考学习对象，甚至连是否足够完整做完一部剧本都不知道。原本在电影学院学到的知识，只能用上一半，剩下的就得冥思苦想反复试验。总结出几个比较重要的思路：

- 设计角色动作时要随时考虑到重复使用已有的切片、尽量少或尽量不增加切片。

- 在原本需要描写大幅度旋转的动作时，通过切碎镜头、局部特写、慢动作等方式，让观众产	生“无中生有”的错觉。同时对打斗节奏进行控制。

- 挑10%左右的镜头，投入成本做完整的大幅度动作，并平均分配在影片中，让观众不要过长时间持续观看碎镜头。

- 让特写所拍摄的肢体、动作方向、角色比例的排列组合均不相同，以减少机位不变带来的重复感。

如果大家有兴趣，以后可以单写一个专门分析的文章。

[](https://www.zhihu.com/zvideo/1264734316887883776)

▲各国玩家都好评的双人肉搏桥段分镜，虽然是机甲游戏但却花了最高的成本来描绘人的战斗。




中途有好几次想要找做动画的朋友来外援，但就是因为大部分的问题都无法用传统动画思路去设计，连我都不知该如何总结其中的方法论，就更没法交出去了。很多时候就只能白天处理其他部门开发问题，傍晚处理公司经营工作，晚上回家熬夜设计动画和处理脚本问题。恐慌贯彻了始终，不知哪天可能就创意枯竭走投无路了，或者是害怕做出枯燥的内容。尤其是花了好几天想出来的一套镜头因为成本问题而整个砍掉重做时，压力就会更大。

然而“运气”不负有心人，还是完整符合预期的设计出来了所有的镜头。并且将制作成本控制在了合理的范围内（动画组还能留下半条命的范围内）。

## 创业维艰

虽然核心的动力在于要做一款自己喜欢的游戏，但现实中并不是只有做个游戏那么简单。公司的经营是占据整整一半精力的事情。如上所述，每天的18个小时都是非常谨慎的使用，哪怕浪费一点，都有可能造成后患。招聘、文化建设、团队士气、找钱，做预算，找办公地点，维护公司日常设施……各种各样的事情都和游戏开发相差甚远，但又是必须要面对且要做好的事情。

经营公司和制作游戏两个重担要扛，公司越在早期越难以招到足够的人手，时间就那么一点，很多时候只能是压榨自己，要么拆东墙补西墙的高机动方式来应对突发情况。整个这三年下来，就像在玩Game&Watch的MANHOLE，纵览过去，能让公司顺利的活到现在真实个奇迹。也得感谢每个同事在遇到各种困难时的坚持，帮我一起把没撑住要塌的墙给撑住了。

![](https://pic1.zhimg.com/v2-61bdcb3e992c446c3e4e555b418965b2_r.jpg?source=2c26e567)

## 挫折

而热血的追梦游戏公司永远不会风平浪静，在这次为期三年的航程上也会时不时遇到令人绝望的暴风雨。

在第一年的时候，没有钱也没有投资，当时走投无路管家里借的卖房的50万块钱。在好一段时间中没有资本愿意投一个主机项目。我们在做出了一个多人对战的原型机后，开始了众筹之旅。在那之前这个众筹基本上就是一次"最终幻想"了，"如果做出来的游戏没人喜欢， 被证明不好玩，那我们就卷铺盖走人，之后好好打工给家里还债。"当时是怀着这样的心情踏上了这条路。不过也幸运的是最后成功筹集到了钱，也顺势找到了投资。《硬核机甲》在各大展会的试玩反响非常好，这样一款形式新颖的游戏被广大玩家所接受了，各国都充斥着好评。这也是我们第一次感受到，我们给广大玩家们带来了新的快乐，这些可能比钱要更加带给我们动力和力量。

[](https://www.zhihu.com/zvideo/1264737274123677696)

▲Kickstarter众筹达到100人的幸福瞬间

随后2018年初，我们拿着已经经过打磨的单人关卡（序章和第一章）和多人模式关卡拿去给很多海外的发行商看，希望能找到海外有经验的主机发行商。可是结果并不好。很多发行商认为虽然demo看起来很好，但一家没什么经验的中国公司是绝对没有能力能按照Demo的质量做完这款游戏的。要么就是投机取巧后面混混样子，无法保证品质同意，要么就是直接烂尾。这些仿佛是商量过的一致论调不禁令人心寒和气愤。跌跌撞撞的"哈妹"又因此背上一个沉重的使命：我们一定要把游戏做完做好！不能让国外的行业再继续对中国游戏抱有刻板印象了。


## 虽然坎坷，但是完成了。

就这么一鼓作气的将游戏做了三年，一个故事模式和一个单人模式，是无论从设计层面还是技术层面都是完全不同的两套游戏，这是一套非常庞大艰巨的任务。

作为一个小团队的第一款产品，我们没有人力和时间把游戏做到完美无缺，游戏开发中最重要的一点就是要有舍有得。唯一要保证的，就是游戏的完成，并且要保证前后质量的统一性。游戏可以无限的接近完美，但时间和生命是不等人的。

虽然有不少的遗憾，可我们还是有始有终的将《硬核机甲》做完了。游戏发售后前三周一直维持日本下载量第一，在日本的社交媒体上也被关联"中国机甲游戏逆袭？"、"现象级的游戏"这样的关键字。从那之后，在国外的各个合作路感觉通顺了很多，和日本业内的人交流时也不再感觉到那份鄙夷的不自在了。看来"哈妹"完成了那个使命。

有些朋友经常会问我，现在3A大厂都不敢做多人单人捆绑销售了，为什么你们一个小独立工作室还要这么做？其实，这个问题我在过程中经常会反复问自己，这真的是个正确的决定吗？也许从商业角度来看，这不正确，过于良心的内容量不但会成倍增加成本，还会多做多错让玩家产生错误的预期。

但是，多人模式太好玩了，既然是梦想中的游戏，那就需要实现它，让我和其他喜欢这种游戏的人都能享受到快乐。一个剧情演出华丽的2D动作游戏也是我所崇尚的事情，我希望能在2D小众化的现代能再出现一个这样的产物，能够给予玩家们新的希望。最重要的，这是一款机甲游戏，在机甲游戏逐渐没人敢碰的市场当下，需要有投入精力与爱的作品出现，让各国的同行们不要灰心，这样做是有意义的。

![](https://pic1.zhimg.com/v2-b7a152ad8785e2999b0c3f2f401bd4a6_r.jpg?source=2c26e567)

如果们只做了多人模式，也不会得到这么多的媒体好评和国际奖项。如果们只做了故事模式，就不会有游戏时长好几百小时，还在每天约战上传精彩瞬间的玩家们。所以，这个抉择，我认为是正确的，我们火箭拳的每一个人都也认同这份付出所带来的回报。人终将会老，终将会没有精力，人的一生中没有几次拼搏创作的机会。《硬核机甲》也是我们火箭拳所有人的人生中，无法磨灭的一次值得骄傲的创作。

火箭拳现在也在扩招中，不断吸纳更多的人才，希望能做更多的好游戏。

我爱火箭拳，爱这个用热血创造梦想的地方，愿火箭拳能一直飞下去，飞的更远。

## 结语

![](https://pic1.zhimg.com/v2-bc7ba1ffea91fc461e02bfaa90b2d71b_r.jpg?source=2c26e567)

将光盘取出放回盒内，将其陈列起来，游戏展示架上又多了一款意义非凡的游戏。

我一直有个愿望，希望有生之年能买到一款2D表现精良，手感结实，又帅气又拟真的机甲战斗游戏。在今天，我终于买到了。虽然"购买"过程有些坎坷，这个小愿望总算是实现了。

谢谢所有支持我们的玩家，谢谢所有的合作伙伴，谢谢火箭拳的战友们。谢谢你，"哈妹"，一周年生日快乐！

![](https://pic1.zhimg.com/v2-c128cfd1a41032acc8191f9772ae96b4_r.jpg?source=2c26e567)


---

# 怎么看待樱花动漫运营者被判2年3个月? Youlink L

**Author:** Youlink L  
**Bio:** ♪~ ᕕ(ᐛ)ᕗ  
**Avatar:** ![](https://picx.zhimg.com/v2-5679abb426210f8154fdb69bd2887dfb_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/68eb90404d5451d2ca7d21efcfd94f44  
**Published:** 2025.08.05 11:30:09  
**Updated:** 2025.08.05 16:53:42  
**Question:** https://www.zhihu.com/question/1934241278582822809  
**Question Created:** 2025.07.31 13:17:37  
**Question Updated:** 2025.07.31 13:17:37  
**Votes:** 2804  
**Comments:** 183  
**Type:** answer  

通常这种问题下都会有好心大哥出现说虽然这个关了那个关了睿站也睿站了但是，欸，你大哥我给你看个好东西。

我翻了十几条答案还没有看到这样的好东西，也许这次该我成为好心大哥了。

和古早互联网爱好者不一样，我并不是很享受在邀请制论坛里顺着糟糕的排序去找番剧资源然后前排扣1下载这种体验，现在是西历2025年，距离强尼银手炸毁荒坂大楼已经过去了两年，再过四年会有一个名叫草薙素子的女人决定去死。我的意思是，在光电子奔驰，信息集约化的今天，有没有什么办法可以更优雅地当（一辈子）数字海贼呢？

有的，兄弟和姐妹，有的。

这件事要从DHT说起：电话亭、蛋花汤、杜海涛，Distributed Hash Table，分布式哈希表，一种去中心化的节点发现与资源定位机制。bittorrent客户端在查询种子信息时，会使用DHT作为中心化的tracker服务器之外的去中心化保底。这时它具体的工作原理就像是钓鱼佬交流钓点：每个钓鱼佬都只知道自己熟悉的几个钓点，但每个钓鱼佬身边同时也有其他钓鱼佬，当你想要知道某一个钓点到底在哪里时，你会向你身边离你最近的钓鱼佬提问，他也许知道答案，那么他会迫不及待地告诉你，如果他不知道，他会询问离自己最近的另一个钓鱼佬，以此类推，基于六度分割还是什么的原理，你会在数量不多的几次跳转之后找到恰好知道这个钓点的钓鱼佬。

在这个去中心化网络中，你杀死其中一个两个三个四个五个六个钓鱼佬都很难摧毁这个钓鱼佬网络本身。这时你就会想，假如有办法把所有钓鱼佬的知识聚合在一起，你得到的不就是一个庞大的种子信息库吗？

[https://bitmagnet.io](https://link.zhihu.com/?target=https%3A//bitmagnet.io)




![](https://pic1.zhimg.com/v2-a525df96d52464cceb6d144c98994cde_r.jpg?source=2c26e567)

这就是bitmagnet，它会默默爬取DHT网络中当下正在被钓鱼佬们口耳相传的磁链，查询元数据获得磁链内文件的大致信息之后尝试对其分类归档并存储在本地的postgres数据库中。经过一段时间的运行你就拥有了一个自己私有的亚历山大图书馆，海贼之路自此而始。

[https://www.autobangumi.org](https://link.zhihu.com/?target=https%3A//www.autobangumi.org)

我曾经尝试通过autobangumi订阅mikan上的番剧，autobangumi通过API控制qbittorrent客户端下载后再通过脚本触发filebot查询和规范化文件元数据并创建硬连接，再由Jellyfin自动入库的自动追番工作流。从逻辑上这一套流程已经接近闭环，而且很符合“尽量使用模组化的开源工具构建你的工具链”这样的金科玉律。

但是有没有人和我一样疑惑过为何像autobangumi这样基于RSS的自动追番工具没有发展壮大？我直到开始使用servarr（Yarr！）系列才明白，实在是因为相近生态位上已经有了一个更为发达成熟的竞争物种。

[https://github.com/Servarr/Wiki](https://link.zhihu.com/?target=https%3A//github.com/Servarr/Wiki)

![](https://picx.zhimg.com/v2-7bde543fa8d233791339b80059a38a0c_r.jpg?source=2c26e567)

首先是Sonarr，它就像是把我前面说到的autobangumi工作流打包进了一个更统一的webui里，而且更强大。它的一头连着imdb这类影视信息数据库，这样你可以在里面搜索你感兴趣的电视节目，查看简介、评分和演职人员信息并加入你的观看列表内。

![](https://pic1.zhimg.com/v2-7a31e996b73d4a5ec5c313930d13958f_r.jpg?source=2c26e567)

它的另一头连接着一开始提到的bitmagnet，它监控着你加入列表的番剧，如果在本地没有找到对应文件则会在你的bitmagnet数据库中搜索符合条件的对象，然后自动筛选出合适的磁力链发送到qbittorrent客户端下载，在下载完成后它会根据{plex}或者你自己定义的命名规范创建硬链接到你指定的硬盘目录，方便PLEX、jellyfin这类的影视库点播系统自动入库。在搭建完成之后它的自动化程度和傻瓜程度高到我可以把它介绍给我的父母让他们自己去搜索想看的节目。

同一系列中还有功能完全相同但是面向电影的Radarr，可以将公共（包括PT）种子库纳入搜索范围的Prowlarr，用于搜索书籍但是已经停止支持的Readarr以及面向Porn我没用过也不知道怎么介绍的某神秘第三方二创。

![](https://picx.zhimg.com/v2-db1bc4e5934f92432431bf6349263545_r.jpg?source=2c26e567)

通过这种方式建立的动态影视库如果面向公网设置CDN并开放PLEX、jellyfin等系统的点播，你实际上就制造出了一个可以在小圈子内使用的海贼在线播放网站，如果你能解决坐牢的问题也自然可以面向更广大公众开放。

如果你有nas想建立自己的影视库，这是最优雅的方案，如果你只是想自动追番，这同样也是最优雅的方案。它从去中心化的网络中获得资源，哪怕这个网络被摧毁你也仍然拥有本地备份，只要bt下载还能使用它就能正常工作。

我的意思是，在光电子奔驰，信息集约化的今天，我都已经当海贼了，除了无力地叫嚷几句海贼精神互联网通航自由普罗米修斯现在年轻人都不会迅雷下载了之类让人发笑的话之外，首先是不是应该多出海捞点东西让自己活得更优雅一些呢？

当然，对于不是很想折腾这些东西但是又觉得这一套工具很有趣的人来说，你应该做的是把这篇文章转到你的二次元群里，然后艾特一位喜欢在群里发github链接的死宅说“我要这个！”，最后你多半能够白嫖到群友的劳动成果。


---

# 这么多独立游戏开发者中，哪些开发者的开发状态是令你最羡慕、最有触动的？ 零一猴子

**Author:** 零一猴子  
**Bio:** 后端/前端/AI/游戏/独立开发  
**Avatar:** ![](https://pic1.zhimg.com/v2-bde9fcdf5712e8330904f3d4c67a974a_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/85fd7a5db77dca43f01e59eceb3f05f2  
**Published:** 2025.09.23 20:34:41  
**Updated:** 2025.09.23 20:36:42  
**Question:** https://www.zhihu.com/question/1953227440018163330  
**Question Created:** 2025.09.21 22:41:50  
**Question Updated:** 2025.11.05 13:17:04  
**Votes:** 1906  
**Comments:** 121  
**Type:** answer  

最让我触动的就是《动物井》 的开发者 Billy Basso，他被网友戏称为“手搓仙人”，手搓 C++ 引擎、手搓关卡编辑器、手搓动画格式、手搓阴影光照甚至手搓法线贴图。

工匠精神在他的身上体现得淋漓尽致，在游戏引擎大行其道的今天，他选择手搓一切，最终花了七年时间，创造了《动物井》这款游戏。

![](https://pica.zhimg.com/v2-6cc6af349c5250b5331e9dd10e6cd05f_r.jpg?source=2c26e567)

《动物井》是去年大卖的独立游戏，整个游戏只有 33MB。虽说是像素游戏，但玩法、色彩和视觉效果都直接拉满。

![](https://picx.zhimg.com/v2-5e9a76b5c6570b0326f1c02fa869c56a_r.jpg?source=2c26e567)

有兴趣的朋友可以去看下 Billy Basso 在 GDC 上的分享，绝对能感染到你：[【熟肉/GDC】动物井是如何制作的 | Billy Basso](https://link.zhihu.com/?target=https%3A//www.bilibili.com/video/BV1Rr5vzGEDe/)。

小黑盒上也有他的专题报道，非常值得一读：[24年神作《动物井》的幕后故事让我再一次相信天道酬勤](https://link.zhihu.com/?target=https%3A//www.xiaoheihe.cn/app/bbs/link/c5526ff64175)。

接下来，让我们一起看看 Billy Basso 是如何开发《动物井》的。

首先 Basso 没有使用任何第三方引擎，所有东西都是自己手搓的，连绘制像素图的 Aseprite 也是自己 fork 后魔改的。

![](https://pic1.zhimg.com/v2-2dc86d4b349eda1b4c602d926863c425_r.jpg?source=2c26e567)

**关卡编辑器**

Basso 自己开发了一个关卡编辑器，支持三种编辑模式，包括房间模式、世界模式和精灵图模式。

整个游戏的世界被限制在一个 16x16 的方格中，一共有 256 个房间。为什么是 256 个呢？因为作者只想用一个字节来记录所有的房间 ID，也就是 2^8（1 byte = 8 bit）。

![](https://pic1.zhimg.com/v2-388b03afcf8dcbdd5ef5d764e4238959_r.jpg?source=2c26e567)

对于精灵图，早期作者是把 UV 坐标硬编码在 C++ 文件中的，后来觉得不够优雅（太费劲），就开发了 Sprite Editor。再后来还开发了个贴图打包器。

![](https://picx.zhimg.com/v2-baf96b49ede89363f2cbb8c8ce8d1390_r.jpg?source=2c26e567)

**动画格式**

用过 Aseprite 应该知道它可以制作像素动画，并导出到其他引擎中，也可以导出为 JSON 格式。

Basso 也是用 Aseprite 制作的像素动画。但他自己设计了一种二进制的动画格式，并 fork  了 Aseprite 的源码进行魔改，来支持导出这种二进制格式。

![](https://picx.zhimg.com/v2-8d2f54aa4b360b0940e8ef2925b59a07_r.jpg?source=2c26e567)

那他为什么要这么做呢？一方面是 Basso 不期望游戏中有任何文本字符串，避免玩家反编译破解。这也让整个游戏非常的小。另一方面，如果要使用 JSON，就需要动态内存分配，这也会带来一些开销，这也是他不期望的。

![](https://picx.zhimg.com/v2-f7d91d8a3e631b4fd78c785873163142_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-a547f76d3628f6ad8dd329dad9ac5e31_r.jpg?source=2c26e567)

**视觉效果和光影**

到这里才是 Basso 最牛逼的地方，牛逼到我没怎么看懂。反正基本也是纯手搓，各种细节控制。这里直接贴原视频中关于**动态阴影**的分享，大家可以自己感受：

![](https://picx.zhimg.com/v2-52854eeea423a54e3784f7453a5abf78_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-20cb527c98ac41141676a8ef645bfdb8_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-815060e0af1219866ca4a9c6ad5431fa_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-0d0b589adedaa0f64fb9a8976dae564d_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-f4c0f3d5c5805f995ec0716dc57217a0_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-16300542858c13edb0c49a6bb151564a_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-9dd556b886dccb07af62da851a3ccc75_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-442f9374d7ac208166dc61a9f73c0351_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-6ba97e5754a6ca1cd7580be7fb1f35d6_r.jpg?source=2c26e567)

![](https://pica.zhimg.com/v2-03f4605c114b798f6d61161fd24e5204_r.jpg?source=2c26e567)

他还实现了不同图层之间投射阴影的效果，通过将不同的游戏图层渲染到单个渲染目标的不同颜色通道中，然后在渲染背景时采样前景或中景（做向量数学运算）来判断是否需要投射阴影。这样开销就非常小。

另外就是在做边缘光照的时候，手动绘制法线贴图，给光照增加方向感 。

![](https://picx.zhimg.com/v2-e5afcfa64bad566f0e08009423c9cd3e_r.jpg?source=2c26e567)

水面倒影效果的实现也很巧妙。渲染时，先正常渲染屏幕，然后进行第二次渲染，将相同的内容颠倒并扭曲（使用正弦波数学），并在底部逐渐淡化。

这样既保证了效果，也没什么性能开销。

![](https://picx.zhimg.com/v2-056231ba726afe1b57d3cfa3c0fac695_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-3f61707089387ca8aec6ce81884e251d_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-853f2758b8a9d5adc94de280c7181fbe_r.jpg?source=2c26e567)

对于流体效果，Basso 自己实现了一个复杂的 2D Navier-Stokes 流体模拟器，用于烟雾、水花等效果。他还特意提到这不是什么领先技术，去看英伟达在 2004 年出版的 《GPU Gems》第一卷就知道了。

![](https://picx.zhimg.com/v2-e986ecc65e0bc7fca3368c3101ee7457_r.jpg?source=2c26e567)

**资产管线**

Basso 提到，《动物井》的所有游戏资产在编译时都被转换为 C++ 头文件中的字节数组，并直接包含在代码中，这意味着游戏运行时不需要进行文件 I/O。

也就是说，游戏打开就启动了，不需要像很多游戏一样，加载本地资源。启动会非常快。

![](https://picx.zhimg.com/v2-d6a9ec893434ee6fe245d7013ac559cf_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-a2e61487c18b63faa61c889f720816f5_r.jpg?source=2c26e567)

另外基于这个机制，很方便对游戏资源进行加密，Basso 设计了一种非常巧妙的机制。

他使用 AES 对游戏资产进行加密，解密密钥不是静态的，而是和玩家的解谜行为有关，根据玩家的解谜进度动态生成。**相当于游戏边玩边解密**。

![](https://pica.zhimg.com/v2-1ad8725b9e44530666afefdd066c4b94_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-d30194a54a9e4bb799ecd0855778792d_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-d15c69996c03ed18edb7f27a7fda5b9e_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-d3aedbcb25ce191aa37ca5e613d767f7_r.jpg?source=2c26e567)

**游戏大小**

很多人经常会提到《动物井》只有 33MB，玩法和艺术性却秒杀很多 3A 大作。

Basso 也列举了游戏为什么只有 33MB 的原因。主要包括：

- 自研引擎，不使用第三方库
- 使用低分辨率的像素贴图
- 使用压缩后的 vorbis 文件作为音效
- 不使用文本格式，而采用二进制

![](https://pica.zhimg.com/v2-c990370490254caeaa0fb0d985852e0d_r.jpg?source=2c26e567)

Basso 甚至提到游戏中仍然有一些没有用到的资源，如果删掉，可能游戏尺寸能进一步缩减到 25 MB 左右。

看到这里，你可能和我一样，会思考一个问题。**现在网速这么快，电脑配置这么高，谁还在乎几十 MB，花七年时间去做这样一件事，值么？**

如果是一个常规的商业项目，没有人会这么做，性价比太低。但这正是独立游戏的魅力。

**只有充满对游戏的热爱，有自己独一无二的追求，不仅仅是为了赚钱而创作游戏，更多的是为了取悦自己，才能创作出触动人心的独立游戏，也才真正配得上“独立游戏开发者”的称呼。**

而 Billy Basso，正是这样的一个人。


---

# 什么促使你走上独立游戏开发者之路？ SoulframEE

**Author:** SoulframEE  
**Bio:** 影之刃/雨血游戏制作人，灵游坊创始人  
**Avatar:** ![](https://picx.zhimg.com/v2-c8b3a303710fa923ad93329c4ecfc832_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/9959e364fc3b62367c587c4697d8a8fd  
**Published:** 2014.07.29 03:38:11  
**Updated:** 2023.11.02 17:21:18  
**Question:** https://www.zhihu.com/question/21719532  
**Question Created:** 2013.09.28 12:31:33  
**Question Updated:** 2019.05.17 21:23:14  
**Votes:** 6465  
**Comments:** 323  
**Type:** answer  

多谢邀请。一不小心写了挺长，随便看看吧。

所有商业游戏的诞生，都有既定的流程——调研，论证，立项。但所有独立游戏的诞生，都多少具有偶然性——失恋，失业，晚上一梦醒来，玩到有启发的游戏，或者玩到值得吐槽的游戏想着做得更好……等等。

我很小的时候就喜欢编写故事和绘画，但是这两者都没有能做到极致，否则我现在也许会成为一个小说家或是画家。我喜欢的是自己编写一个世界观，故事框架，然后开始绘制其中的人物，场景，道具……甚至高三的时候，我还画了一整本设定集。当时这些设定和画品质参差不齐，当然当时也没有任何途径给外人看到，这些画册的观众，除了我自己，只有我母亲（我妈退休后，把它们都整理起来订装成册，收藏得很好。）

![](https://picx.zhimg.com/dce440171d21f547704a2d6580bc366a_r.jpg?source=2c26e567)

总之，从7,8岁到20多岁，我总共构思，绘制，然后不了了之的这样的“土法制造”的设定集，大概有四五十本。

![](https://picx.zhimg.com/e4cf6e2a8e5462fa6040912e57541011_r.jpg?source=2c26e567)

在2006年初的时候，我在楼上提到的66rpg上得知了rpgmaker这个软件，当然，那会儿还没有unity。总之，正在大学上大三的我，感觉终于找到了一个之前画设定集的“进阶玩法”：终于可以不只绘画，还可以让它们动起来，还可以互动了！这种创作方式碉堡了！

于是，抱着一种简单，淳朴，不知天高地厚的动机，我开始制作《雨血》。当然，在我当时的设想中，游戏做出来后，唯一的玩家也就是我自己，如同我以前的那些土制设定集一样。

![](https://pic1.zhimg.com/4387397585fbfea09731781ff3981949_r.jpg?source=2c26e567)

结果我无意中踩入了一个大坑。即使是那么小的一个“项目”，其本质仍然是软件工程。于是，在度过了前期设定，编剧的欢乐期（只有两周左右）后，我迅速地进入了无聊而漫长的煎熬期，这个期间的内容，包括看起来几乎无穷无尽的地图绘制，一帧帧都要画的动画资源，还有无休止的调整程序bug，对于我这种非计算机学生，连编程都只是选修的，更遑论软件工程的基本方法的外行来说，这绝对是一种恐怖的折磨。

制作到第三个月时，我已经完全疲软了。当时只做出来一个开头（小女孩被杀处），而我对这个游戏的热情和爱好都已经完全地消耗殆尽，每天一打开工程，都想吐。

但是现在回忆起来，我的制作态度在这个节点出现了一个微妙的转变——刚开始的时候我是因为热情，和爱好，而风风火火地开始了制作，但这个时候在大量无聊的重复性工作中，我仍然惯性地做了下去，说是被虐出了快感也好，说是我萌生了某种专业性的素养也好，说是巨蟹座如水般持久的韧性也好……总之，虽然这个本来为了让自己爽的项目已经变成了折磨，我仍然做了下去。

![](https://picx.zhimg.com/d3d81e03fff21e5912b369ea9f2ca0fc_r.jpg?source=2c26e567)

多年后的今天，我已能够清晰地看清楚游戏研发中的状态曲线：一个游戏项目无论多么有趣，但真正纯粹的快乐时光，只有研发的前10%时间而已（写企划，定方向，画草图，每天都有新想法的时候），在游戏研发的大多数时间，必须依靠持之以恒的韧性，和严格的专业素养，才能坚持下去。真正的品质，隐含在这日复一日的重复工作之中，而并非取决于某几个灵光一现。

无论如何，我当时就这么麻木，却顽固地，坚持做了下去。后来又有一位记者总结了我那时候的状态，我认为有点道理：我也许并没有失去对这个游戏的热情，只不过，我的热情由剧烈的火焰，变成了平静，但可以持久燃烧的火苗。

后来我在GDC上遇到了制作出烧脑神作Gorogoa的制作人，他也表示3年的制作历程中，至少有2年零300天是“Feel like shit”。

2007年春节前后，《雨血：死镇》完成了第一版，如我前文所说的，我做出了自己是唯一玩家的游戏。我特地两周没碰它，两周后假装成一个新人，打开游戏，从头到尾通了一遍。

当时游戏从头到尾都是bug，但是我居然还是觉得爽到了。我感觉自己做出了相当不一样的东西，通过一年的时间，带给自己两小时的纯粹乐趣。而且，这种乐趣是其它任何地方都难以得到的——自己做出来一个东西，自己玩，然后自我感觉良好，有点小得意（虽然没人知道）。

但是这两小时的快乐的代价不只是一年的枯燥研发而已。很快，在2007年下半学期，因为上一学年制作《雨血》占用了大量副科时间，我挂掉了一门课程，而这一挂不要紧，直接导致我原本保送的本系研究生资格被取消掉了。

虽然现在我可以轻松地写出此事，但在当时，我的人生差点被毁掉了一半——或者是身边人的反应让我感觉人生好像已经毁掉了一半。父母的唠叨和教训就不说了，导师提起我也是扼腕叹息觉得一个好苗子怎么因为“做游戏”这么无厘头而不务正业的原因而废掉了。总之，我绝对不能再把游戏做下去了，我必须要走回一条“正路”。

于是2007年的暑假我只好把《雨血》的工程收到了移动硬盘里，连带着收起来的还有我此前总结出来的四百多条要修改的条目文档。2007年到2008年暑假期间，我在背单词，上新东方，做模拟题中度过了。

直到2008年下半年，当我降落在了美利坚的大陆上，来到了鸟不拉屎的小镇New Haven以后。在实在太无聊的环境下，我终于又想起了藏在我硬盘中的《雨血》游戏工程。

在美国的学习其实并不轻松，但是主要是夜生活实在变得没什么内容，只能老实呆在宿舍里，这种时候，只有做游戏能够排解了。我到美国的第一周就把那400多个修改点改完了。

在美国的好处当然并不只有时间充裕，我逐渐发现了一些不一样的地方：每个人除了课程，都在做一些自己的小玩意儿。做游戏这种在国内显得很怪癖的业余爱好，似乎也没啥了不起。

直到有一天，我战战兢兢地在教室里打开了游戏，同学们“My God!”“Holy Shit！”之类的声音惊呼了小半个小时，high得不行——他们当时还看不懂那上面的对白。

我又无意间找了个机会，让我们教授看到了《雨血》，这次他没有告诫我赶紧悬崖勒马，走到正道上来，而是饶有兴趣地跟我聊了半天东方美学。

逐渐的，小半个学院都知道了我们这一届有一个Chinese guy making cool games。我其实专业课也不错，但是游戏已经成为了我最大的标签。

**老.子.T.M.D.终.于.可.以.光.明.正.大.地.不.务.正.业.了。**

那段时间里，我手铐脚铐都被拿走了，终于习惯了正常地行走，每天出门感觉空气吸进来都是正能量。我开始有意识地利用环境完善自己的知识架构。我们建筑学院四周是美术学院，戏剧学院，音乐学院，我大量地参与了这几个学院的活动，party，与各种好友交流。有趣的人总是不少，一个说着纯正京片子的戏剧学院哥们（美国人）拉着我参与了他的舞台设计项目；美术学院的台湾姐们带我逛了她的画室，目睹她爬上梯子完成一幅巨大的油画；一个半身瘫痪的老头，希望做出炫酷的布展设计，请我去他的病床前帮他完成了建模；学院里的德国教授让我成为了电影与空间课程的助教，那一年看了几十部我在国内打死也看不到（也下不到）的小众黑白电影。

**那些年杂七杂八的设计做了不少，比如给雅马哈做的概念钢琴和在百老汇做的舞台设计模型。应该说全都对游戏有巨大帮助，却不是显性的：**

![](https://picx.zhimg.com/f98e2edacf97be07046b81554080ccef_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/45c431a3e2a8281aa967237917fb5019_r.jpg?source=2c26e567)

然后不少人全部都看过了《雨血》，都提出了或天马行空，或真知灼见的意见。而这些意见，绝对不是现在渠道给你手游的一个测评报告，告诉你这里新手引导要怎么样，那里留存要怎么做那种性质。

譬如，那位瘫痪的老头问我，“你这个游戏的气氛，一直是这样忧伤的吗？我感觉有点忧伤，虽然我看不懂文字。”

我说：“没有忧伤啊，也许是画面？线条？音乐？”

他说：“那加一些幽默吧，幽默总是好的。Humor will fuck the sadness。”然后，大笑起来，以至于我感觉他似乎马上要从病榻上站起来了。

2010年，我终于感觉比较完整地完成了《雨血：死镇》，并且也做出了《雨血2：烨城》的第一章。我录制了一段《雨血2：烨城》的视频，连带着完整的《雨血：死镇》，都扔到了VeryCD上。

![](https://pic1.zhimg.com/da793f8d319bbd39578f03f951092832_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/cdeeee6170dcd78d54b7d52e5325de0d_r.jpg?source=2c26e567)

第二天资源就被下载了10多万次，被顶上了首页，资源评分也达到了9.3分，顶峰时曾达到9.6分。

最开始的时候，我还仔细地看每条评论。到了后来，已经看不过来了。再后来，连邮箱里的都看不过来了。《雨血：死镇》最终在各个平台上被下载了将近400万次，我虽然一分钱没赚，但是每天都兴奋得好像长了五个肾。

然后我趁热打铁，把《雨血：死镇》翻译成了英文，最初扔在一个不知名的小RPGmaker论坛类的网站上。后来一个哥们私信到我，说，你这个游戏很酷，我很喜欢，我也玩通了，大概了解了什么意思。但是你这个游戏的语言写得太烂了，我想免费帮你重新写一遍，请问是否可以？

我想，废话，免费的还能不可以？你随便改吧。

其实我就是那么一说，很快就把这件事情给忘了。结果他两周之后，真的发过来一个改过语言的版本。最后，我坚持给了他600刀。

随后，我把这个游戏在bigfish，gamersgate等几个网站上发售了，在发售的第一小时，那600刀就回来了。

《Rainblood:Town of Death》在各个平台上售出了两万多套，获得了不少激动人心的好评，譬如RPGfans给的评价是：“不管怎么样，这都是一个艺术品。”

![](https://picx.zhimg.com/a462b743225258fb7e4e9356ca6ba3e3_r.jpg?source=2c26e567)

这个时候，我——这个已经瞎折腾了4年的人，才第一次听说到了“独立游戏”/“Indie Game”这个词语。

大概到这里，我才能算是回答了题主的问题：[什么促使你走上独立开发者之路？](http://www.zhihu.com/question/21719532)

**PS：**后来的历程，圈内的朋友都比较熟悉了，在此不多做赘述。但是有一个问题是比较有趣的：灵游坊现在还算是独立游戏制作组吗？我的回答：是，也不是。灵游坊的制作理念保持了独立游戏的所有精神，不追逐潮流，坚持原创，风格化，做自己首先要喜欢的游戏；但是我们同时又有着“不是”的一面，这在回答[中国有哪些出色的独立游戏（Indie Game）？](http://www.zhihu.com/question/19917923/answer/23928178)问题时已经说明。不过不管是或不是，在移动时代我们一定是需要更多的独立游戏元素的。即使是中国，肯定也会出来许多优秀的独立游戏产品——而且，他们绝不会像我当年在PC上做的那样，只获得了精神上的回报。

最后，附两组后来我们《雨血前传：蜃楼》的对比图，分别是制作前的构思图，以及制作后的完成图，基本完整地执行了下来，我觉得我们的精神还算是独立的吧。

**红白娘子的概念图：**

![](https://pic1.zhimg.com/32a4c864d9bc00a0d4f50ead5dcf5145_r.jpg?source=2c26e567)

**红白娘子战前的实际游戏截屏：**

![](https://picx.zhimg.com/94d3010c3ab2fa83eea092529396c388_r.jpg?source=2c26e567)

**黑林场景的概念图：**

![](https://picx.zhimg.com/252e793ad713515f8b545986c70e303d_r.jpg?source=2c26e567)

**黑林场景的实际游戏截屏：**

![](https://picx.zhimg.com/b93452a2a6e5ac37125d2f7c831430a9_r.jpg?source=2c26e567)

（本文可任意转载，但不得修改与删节）


---

# 做独立游戏是一种怎样的体验？ 白玉京

**Author:** 白玉京  
**Bio:** 古建筑爱好者｜营造学社野生分社搬砖人  
**Avatar:** ![](https://pic1.zhimg.com/v2-d415402fae67edc240fd5740309b2149_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/7e43d793f1df33686d418d2596d0e60d  
**Published:** 2025.05.19 08:47:54  
**Updated:** 2025.10.08 20:44:07  
**Question:** https://www.zhihu.com/question/30095814  
**Question Created:** 2015.05.04 20:24:15  
**Question Updated:** 2015.05.13 11:38:23  
**Votes:** 101  
**Comments:** 65  
**Type:** answer  

## 2025年5月19日 搜教程

今天是做游戏的第一天。

其实在今天之前，已经问了好多超乐意帮助我的真的独立游戏大佬。

大佬们对我鼓励超多。

（最早上知乎，就是为了论文，自学rhino里的grasshopper插件，在知乎上记录学习过程。）

（但是也有好多做建筑师、对参数化研究和应用贼深入的建筑大佬对我友善鼓励帮助的。）

如今，还是类似的计划，学到哪儿做到哪儿。

记录在知乎上。

第一步是找到一个制作独立游戏用的软件。

在两个转行游戏领域的建筑学的大佬那里确定了一些软件范围。

（嗯，他们主要推荐的还是我根据以往个人使用各种建模软件的经验，从学会、用好blender开始。）

（毕竟听人劝、吃饱饭。）

（我决定减肥、少吃点儿，所以我选择了不用blender。）

我选择了rpgmaker，做一个2D游戏。

至于做什么，目前还没想到。

我暂时的想法是先把软件学会吧。

搜索教程的时候，感觉还是b站相对友好一些。

![](https://picx.zhimg.com/v2-49b2aa840c6eece168b2eb15bafee39b_r.jpg?source=2c26e567)

目前看着，很多教程的浏览量无比巨大。

其中的俩教程非常吸引我的注意力。

一个大佬的视频是说通宵学一晚上就能做出游戏。

![](https://pic1.zhimg.com/v2-498dd1aa90200023b852b90dcb3d7319_r.jpg?source=2c26e567)

一个大佬的视频是说学1万2000个小时做出游戏会是啥样的。

![](https://picx.zhimg.com/v2-2fe5721d27ce27c5bad65a1a0bdc2b09_r.jpg?source=2c26e567)

根据我的判断，可能这就说明了这个软件的上限和下限都很牛逼吧。

嗯。

中年人最善于的就是被割韭菜了。

不管最后能不能做出来。

咱们先直接买个软件。

![](https://picx.zhimg.com/v2-3b8b6e003354450eb6787a2691bc0ab0_r.jpg?source=2c26e567)

虽然在游戏领域毫无经验，但是在地球online领域，我也有几十年经验了。

一般情况下，地球online的各种事情，现实的难度都是远比想象中要大的多。

在大佬的视频，做游戏的效果是这样的。

看着就好牛逼啊。

![](https://picx.zhimg.com/v2-fdf706783a16597629b4374e85cb31ff_r.jpg?source=2c26e567)

我打开rpgmaker页面，看见的是这样的：

先看这个弹窗，好像意思就是还需要一些DLC才能把游戏做出来是不是。

![](https://pic1.zhimg.com/v2-fb79d52cebaea889a8137550385e8e07_r.jpg?source=2c26e567)

然后。

再回头看，软件有796个DLC？！！

![](https://picx.zhimg.com/v2-347f2edec6bf017fa52d415c18580964_r.jpg?source=2c26e567)

本着无助懵圈先花钱买教程的常规中年人被割精神。

我都不知道应该从买那个开始被割。

嗯。

我看见有一个11个DLC的捆绑包。

如果有路过的rpgmaker大神，帮忙指点一下吧。

![](https://pic1.zhimg.com/v2-72eabf2749876a24f2fa4d80830c48cc_r.jpg?source=2c26e567)

毕竟439块钱，也挺多的。

暂定还是先看视频，学会本体的功能，然后后面再看要不要买吧。

粗看这个steam官网的介绍。

直觉感觉这个画地图的页面，我还是能hold住的。

![](https://pic1.zhimg.com/v2-b36864a55350460c96c3e8b368ff6d1f_r.jpg?source=2c26e567)

然后。

记录一下历史性的建立第一个文件夹的过程：

![](https://pic1.zhimg.com/v2-dab84db79b02d00c012535af78accf46_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-e06399e29e503d1738318d9a60572dc3_r.jpg?source=2c26e567)

好吧。

硬盘忘了插上了。

重来。

![](https://picx.zhimg.com/v2-8f551f2a9ffca6c22a0150e34dbd26de_r.jpg?source=2c26e567)

这次建成了。

我去。

这界面，也太「朴素」了。

![](https://pica.zhimg.com/v2-249e3acc9a982cae92271110eec0b8d7_r.jpg?source=2c26e567)

接着看教程去了。

今日的学习进度，明日再更～～

——————

## 2025年5月26日 游戏的第一次文字性PV

![](https://pic1.zhimg.com/v2-47aec08ad863f3b8f1fa26e2e7c10b6c_r.jpg?source=2c26e567)

——————

安史之乱最初。

有一个以毛笔为武器的读书人，逆流北上。

有人说。

他在当时已经不再是凡人，他只是在天地之间的大造化中遇到了时机，兵解成仙。

也有人说，这就是大唐文人的真正骨气，铁骨铮铮的毛笔，从此第一次与铁血长刀当面硬刚。

这不是第一次硬刚。

也不会是最后一次硬刚。

这是文字的力量与文明的力量。

文化与信仰，终将战胜霸权暴政。

——————

以此，本来想做一个贼魂系的硬核动作游戏的。

唐朝背景，从卢塞北一直打到蜀中。

额。

没这个技术。

就，按照自己的能力，做一个ppt的视觉小说游戏吧。

——————

![](https://picx.zhimg.com/v2-5596038b8b09ca8480498d893aa06592_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-521e7680d3b83d93a5752f046bbf6d9c_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-7e66b1d4bfb081d3300eeb3f4cd87743_r.jpg?source=2c26e567)

![](https://pica.zhimg.com/v2-eb82776deac244ca13c89c59cda07b68_r.jpg?source=2c26e567)

## 2025年6月4日 做了个地图

额。。

我然后就继续很努力的学rm的啊。

然后，结果学 RM 学到了一堆地图怎么编辑的功能。

就，我想做的部分我还没学到。

突然脑回路拐了个弯：

我其实想做的部分，大部分都是ppt的功能。

哈哈哈哈哈。

（AVG的神，请宽恕我将我想做的部分称之为ppt）。

然后。然后鬼使神差打开 b站。

卧槽，我把AVG+Galgame+PPT放一起搜索。

嗯？

我好像打开了一个半新不旧的世界的大门。

真的有好多大up，在教怎么用ppt做AVG啊。

![](https://picx.zhimg.com/v2-84eb9ed85a0412682edaeac63d7b807a_r.jpg?source=2c26e567)

「形状工具能画对话框，动画窗格能做角色淡入淡出。

「超链接还能跳转场景。

「然后，

「对着 PPT 自带的卡通字体」

我内心只想吐槽。

这不比 RM 容易多了。

![](https://picx.zhimg.com/v2-60257c305636f0cb84b4b15cad2bd9ce_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-92bb186a689177e46a7a436946aaa597_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-42be91ff5dec7278562606e893a305a4_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-60257c305636f0cb84b4b15cad2bd9ce_r.jpg?source=2c26e567)

额。

大概就是这样。

其实具体来说。我也有继续深入我的游戏的。

前面我还问过好多好多问题的。

基本上，我的大概思路就是。

「超级不听劝」。

大佬们劝我不要做游戏。

我就做。

然后。

大佬们劝我用unity做。

劝我学一下blender啥的。

嗯。

想了想。

不学了。

哈哈哈哈哈哈哈。

然后。

最近的进度是我提问求助要做一个现代工业废弃的抓鬼游戏，和一个古代南北朝的游戏。

额。

大佬回答里劝我做废弃工业区。

其实还有好多线下和微信里的朋友也这么劝我的。

所以。

我果断决定，那就做一个古代的。

南北朝的。

目前，背景应该是唐朝。

（好吧，原谅我的跳线。）

（想做南北朝里的北朝。）

然后，然后突然就做了一个唐朝的地图。

具体说是唐朝的洛阳。

（如果继续深挖自己的脑回路。）

（唐朝洛阳的平面图真的好好看。）

（长安的话，以我现在的水平不是很好表现）

（长安，反正就是方格子网，了解古代城市的朋友应该知道我的意思吧）

额。

附上一个我参考的洛阳的图：

![](https://pica.zhimg.com/v2-630d1fb4fdf1f66a3a2733680eecaf7b_r.jpg?source=2c26e567)

然后就做了唐朝吧。

哈哈哈哈哈哈。

（下面是我照着图做的洛阳）

![](https://pic1.zhimg.com/v2-605bcdeb2a1c1710e69e81a1bc7261f9_r.jpg?source=2c26e567)

突然发现这个提问有超多AVG领域的大佬。

要是有路过的，求顺便看看我，给我留言建议啊。

（嗯，我会完全按照大佬们建议相反的方向继续做的。）

（主打就是一个不听劝。）

（但是，也是非常非常诚恳的，找到相反的方向的。）

（以及，非常非常诚恳的感谢每一位在我制作游戏过程中对我提出帮助的大佬们的。）

然后上点儿我做截图：

![](https://picx.zhimg.com/v2-b0b8b2f8f8a031757a4d2e1cf7f0c340_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-2647291b76540daa99b6dda89f0a4b26_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-645331c42a7ec3a93e47fdba4b719cb3_r.jpg?source=2c26e567)

![](https://pica.zhimg.com/v2-1eb4a9e579d5cf8d7747bb68c045fe15_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-9109180959625060d01a285988d3f8f1_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-eb4934dec99f9d328e74c412108a365f_r.jpg?source=2c26e567)

## 2025年7月18日感觉自己画画不好看打算blender建模然后转2d

嗯，不如题。

但是，感觉现在的世界，模型资产绝对是blender超级主流。

虽然自己还是能用rhino的。

但是，毕竟为了自己做游戏里的模型，rhino真的好多做不了的。

blender，总之就是那种类似雕刻的功能，rhino里还是很难找到对应的。

记录一下自己学blender的过程吧，其实前面也稍微云着学了好久了，不过想最近集中学会。

总之，为了从游戏变成做游戏的，继续努力。

![](https://pic1.zhimg.com/v2-5d4c2f00bdeb1591aec80434aa8712d1_r.jpg?source=2c26e567)

目前的直觉。

blender的建模原理，和3dmax似乎差不多？

反正，我个人体会，就是一个「体」。

在「体」的基础上编辑。

总的来说，应该是掌握了足够的体，以及足够的编辑器，就能很娴熟的建模了吧。

而我。

还是刚刚开始。

（另外，稍微对比一下blender和rhino吧。）

（个人的建议，如果是纯建筑建模的话，很可能还是rhino更好用。）

（rhino更像是autocad的完全相同操作逻辑，blender更像是3dmax的相同逻辑。）

（嗯，如果是还幸存的建筑师，应该能体会到其中的细微差别）

另外，如果是那种偏maya、偏kangroo的圆滚滚的建筑，显然blender是有明确大优势的。

不过吧，

我体会，blender在渲染、和各种建筑配景、免费模型资产上，目前看来有无穷无尽的优势。

毕竟，建筑行业可能快没了，专属建筑的建模软件，免费共享资源越来越少了。

blender不一样啊，蒸蒸日上ing。

行。

继续记录自己的成果吧。

这是一个教程。

反正。

我跟着学呢。

这个教教程的大佬，全程都是快捷键。

我感觉步子太大，很拉我垮，记不住。。

但是，建这个小模型还是挺可爱的。

哈哈哈哈哈哈哈哈哈哈，自己鼓励自己吧。

![](https://picx.zhimg.com/v2-132b3c896575b730fccd7d067d61391e_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-4eac844c704258797c6a0000b3fc73c1_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-775da0997bdcc0d2b9ac3482072d4708_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-6fabcc74758ed9c01dcff2b06fb90939_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-0b1004c9f6ffeae735aa56709ad3ae94_r.jpg?source=2c26e567)

![](https://pica.zhimg.com/v2-b2acf2ebb10754a5f7885ca182c82dee_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-319b61ce5f8274acf036aa4080a90f76_r.jpg?source=2c26e567)

总之。

主打就是一个有功夫就在努力努力吧！

————————————————

目前大概就是这样的。

嗯。

发现自己做的问题好多啊。

然后也提了一下问题。

如果有大佬路过了跪求解答哈。

[如何把AVG游戏里的人物画的有趣啊？](https://www.zhihu.com/question/1913623858470172519)

[求大佬们推荐游戏人物建模的教程、或者自学思路？](https://www.zhihu.com/question/1913601479601808560)

[为啥我做的野生AVG界面那么土呢，如何自学提高AVG或者Galgame的UI设计哇？](https://www.zhihu.com/question/1913598717069603539)

## 2025年10月8日

游戏进展很慢，但是科技发展很快啊。

Agent已经进化到可以直接做产品了。

十一就尝试了一下。

Agent所追求的目标，应该就是让AI从更多的概念性的口号落实到真的能给想我这样的完全不会it的人吧。

看到了「KIMI新推出的ok computer功能」，第一时间就想到了这功能可以用在给0编程基础的我做AVG游戏上。

于是乎，庆幸自己被赐予啦体验码，把游戏做起来。


![](https://pica.zhimg.com/v2-16f275e93ea0d98d9447df3b7af89ab3_r.jpg?source=2c26e567)

具体的游戏内容，是根据我以前的一个提问，评论区大神给的方向：




[想做AVG游戏，大佬们建议选哪个背景设定：一个是废弃老工业区的鬼故事，一个是东晋南北朝的鬼故事？](https://www.zhihu.com/question/1912083514645546810/answer/1913706541619602184)




然后，我又看了Kimi回答下的大佬们的分析的工作过程。

我就给OK Computer提了一个笼统的要求：

「制作一个民俗恐怖风格的悬疑推理游戏。 主角是少年时期的魏晋南北朝时期的道武帝。 要有好几个很有个性、人设很酷的女主角。 要符合历史的关键节点、关键典故。 游戏美术要有很有特色的画风。」

以下就是生成的过程啦：

![](https://pic1.zhimg.com/v2-e46308ffa263da6fb578f73f9f034cc0_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-b5bd31f6838329d149f3329f8b7235fb_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-22d2aa4f6839a159a92a3d72bea34185_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-bf3a896a4de2307f5c14fe6fe189a771_r.jpg?source=2c26e567)

![](https://pica.zhimg.com/v2-8975b6072192ff88e8db882bae73423e_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-902afb28a505743ea7d1de6f89cb237b_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-72a4ccf9c418f0fb9e04b04252698153_r.jpg?source=2c26e567)

![](https://pica.zhimg.com/v2-3979cc637373670dcd13b1c544cdc9fc_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-c0734425350971989bd4852fe3cacb00_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-590b6cd09600ce91d791b79324d4b010_r.jpg?source=2c26e567)

## 第一轮生成的游戏的网址在这里：




[a](https://link.zhihu.com/?target=https%3A//wcykwbubswjhu.ok.kimi.link)




![](https://pica.zhimg.com/v2-e415c2fce64ab57f6e9da87d38244825_r.jpg?source=2c26e567)

![](https://pica.zhimg.com/v2-1229440bc232c0cb74a6e22e68c021fe_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-da6d1614d4b9068c4e29645218a63022_r.jpg?source=2c26e567)

还真别说，不管大佬们咋看，我这个游戏领域的纯玩家、小卡勒米完全震惊了。

这做的是相当的有鼻子有眼啊。

甚至，上升点儿价值的说，OK Computer这种全栈Agent的出现，能把我这种游戏外行，带入到至少业余制作者的水平啊！

激动激动！

呃。

不过对于这个游戏的配色和UI设计，我稍微还挺不满意的。

继续把一些我喜欢的风格发进去，看看能不能给我参考参考、优化优化。

于是，我提出了新的要求：

「整体游戏的UI界面感觉不是很酷。 能不能参考一些steam同类型游戏里评价较高的游戏，修改一下UI」

![](https://pica.zhimg.com/v2-fc58e2e7d88762d52e899f89737f8d7c_r.jpg?source=2c26e567)

## 第二轮生成的网址在这里：




[a](https://link.zhihu.com/?target=https%3A//wcykwbubswjhu.ok.kimi.link/)




![](https://pic1.zhimg.com/v2-2cac352f4dca59ebfc2fe1b7cc54b474_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-45cc6c13112db4250b2293c1e295f126_r.jpg?source=2c26e567)

![](https://pica.zhimg.com/v2-b1a5b41baccf15b0c435cd06fe7d0478_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-e5eb2af151497d6bf365b8fd0501d14f_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-7b9979fa7b9067fa6845d1d4a1b89539_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-331dadda04e6f565be9b36c0b697abd7_r.jpg?source=2c26e567)

嗯。

我还是不太喜欢这些黄色的描边和渐变的红色。

我再和OK Computer沟通一下看看。

「整个游戏只有黑白色调，然后按钮或者一些恐怖、血腥的部分有暗红色。反正就是只有黑白和暗红这些颜色。然后不要用圆形的倒角或者描边。然后所有的人物设计的风格，都是黑白水墨画风格，可以有一些重点元素是暗红色的。」

我倒看看OK Computer会咋整。

![](https://pica.zhimg.com/v2-831d0d1236d7ae93d7ccb51f20adc1bc_r.jpg?source=2c26e567)

呃。

这块说完了感觉变化不大，就不截图了。

继续「调教」：

「所有的图片都按照黑白红三种颜色，水墨风格重新生成。UI里去掉所有的线。」

![](https://picx.zhimg.com/v2-d7033a0af77a28cd92bd2b9a43716ad2_r.jpg?source=2c26e567)

这次好多了，但是字体我突然想到，北魏嘛。

那应该用魏碑字体。

继续「调教」：

「横线也不要有，不要有任何线。字体都换成繁体字魏碑。」

![](https://picx.zhimg.com/v2-227f109bceae3adaf4299b6d3cced49e_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-5a63ff7a616b3b34874d6acab41a7de3_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-e5fc9541dd6a504c5c0216e3fde67abe_r.jpg?source=2c26e567)

这回就渐渐变得不可控了。

后面的调教好多不满意的，就不粘过来了。

![](https://pic1.zhimg.com/v2-12d1dbc90aafde072199305f8082e680_r.jpg?source=2c26e567)

总之我继续搞搞搞搞搞搞。

## 第三轮生成的链接




[a](https://link.zhihu.com/?target=https%3A//hnijchijrrkp2.ok.kimi.link/)




嗯。

这次真的挺阶段性满意的。

当然，我还没任何能力对这个成果进行进一步深化修改。

OK Computer应该也是提供一个框架，专业人士肯定能继续做的更好的。

至于我。

路漫漫兮。

慢慢来吧。

![](https://picx.zhimg.com/v2-f31d0adb9cf143318e30acc319c3c60e_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-470b2140ab49ff66d6c3a55de01568b4_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-05cbd3f231061c6d355a5bb0fd0a96ef_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-ec58c269b2e6d40be87b1d69c675b82d_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-e821008aeacc1204e9e7a40481f07164_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-96b9931a5fd618383f7b6463be3a333a_r.jpg?source=2c26e567)

总而言之。

KIMI的agent，的未来让我看见两个可能性。

1.让我看见了未来agent直接变革提升程序员生产力的前景。

2.但是也似乎让人看见了程序员繁难工作、专业素养、基础工作护城河渐渐被ai给拆掉、让我这种完全不懂编程的中老年素人也能自己整产品的前景。

对于资本来说，似乎资本是想赚更多人的钱，按照2的路子，肯定用的人更多啊。

至少，我肯定已经被OK Computer圈粉了。

只要是我时间足够，我肯定会为OK Computer付费啦。

——————

agent时代来了！

还真不只是说说而已啊！

我会持续学习的！




以上～


---

# 如何评价谷歌发布新一代图像生成模型 Nano Banana Pro，有哪些亮点？ Thoughts Memo

**Author:** Thoughts Memo  
**Bio:** 学校≠教育≠技能；文凭溢价=80%信号传递+20%人力资本  
**Avatar:** ![](https://pic1.zhimg.com/v2-7e8edb90c668cf7a7aeb0d2582a60f94_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/4c592f496dc33822b560b382907ff1d0  
**Published:** 2025.12.13 00:59:55  
**Updated:** 2025.12.13 01:01:12  
**Question:** https://www.zhihu.com/question/1974981372130116043  
**Question Created:** 2025.11.20 23:24:12  
**Question Updated:** 2025.11.20 23:24:12  
**Votes:** 127  
**Comments:** 9  
**Type:** answer  

中文嵌字终于能用了，我们汉化组终于可以翻手绘板书和手绘漫画了。

原图：

![](https://pica.zhimg.com/v2-0c4e4575e0db30d1967f46190e067ed4_r.jpg?source=2c26e567)

之前我完全搞不定这种嵌字，只能用 PPT 重新做一张图，贼费劲，效果也一般：

![](https://picx.zhimg.com/v2-ee82bb65047dd45da6ddbe252c4b096d_r.jpg?source=2c26e567)

现在直接把翻译和原图提供给 Nano Banana Pro，一句话出图：

![](https://pic1.zhimg.com/v2-281bc89a555c597674c3b070eea2a66a_r.jpg?source=2c26e567)

原图：

![](https://picx.zhimg.com/v2-c06c641b831dc7e7c0c748f59fdfb0f8_r.jpg?source=2c26e567)

Nano Banana Pro：

![](https://pic1.zhimg.com/v2-736313455bbf9c62ea4b38536a31ebed_r.jpg?source=2c26e567)

原图：

![](https://picx.zhimg.com/v2-18b704d388480aa3a4f14c61d1041b87_r.jpg?source=2c26e567)

Nano Banana Pro：

![](https://pic1.zhimg.com/v2-9dd59eb78fbac7191624b4b202d2f5c6_r.jpg?source=2c26e567)

原图：

![](https://pica.zhimg.com/v2-e3a15762afe3b65a41de2234f201cf6d_r.jpg?source=2c26e567)

Nano Banana Pro：

![](https://picx.zhimg.com/v2-a690211bb18592353b08f258812a4a67_r.jpg?source=2c26e567)

不过贵是真的贵：

![](https://pic1.zhimg.com/v2-195b0c4e15e574f06d0fccb67f5ecba5_r.jpg?source=2c26e567)

这波属于自费给大家提供更好的阅读体验了，点点赞吧各位：

[数学不好是一种怎样的体验](https://zhuanlan.zhihu.com/p/1981300999030346026)

[将心智模型付诸实践（三）：更好的试错法](https://zhuanlan.zhihu.com/p/1973360091374851286)

[将心智模型付诸实践（四）：专家决策](https://zhuanlan.zhihu.com/p/1981679557133243066)


---

# 你见过的最棒的个人博客界面是什么样的？ 柳上川

**Author:** 柳上川  
**Bio:** 宁可清贫自乐，不作浊富多忧  
**Avatar:** ![](https://picx.zhimg.com/v2-8caa1e2cd271f6f0dcad71aa58f9cc8a_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/a928d1945cc10699e2a7f6887c1a0b44  
**Published:** 2025.07.01 23:36:42  
**Updated:** 2025.11.30 23:23:40  
**Question:** https://www.zhihu.com/question/29755481  
**Question Created:** 2015.04.21 20:12:40  
**Question Updated:** 2015.04.21 20:12:40  
**Votes:** 598  
**Comments:** 70  
**Type:** answer  

我勉强满意于目前自己全用[Typst](https://link.zhihu.com/?target=https%3A//typst.app/)手撸出来的博客，有空的话我想整理一些关于 typst && HTML 的注意事项, 记得踢我防止我鸽了 (

开头先唠嗑几句，展示的图片在后面哟

个人喜欢简洁大气, 功能齐全的(这里指写作方面，所以用了typst), 很多ui界面与/功能我其实都想要但懒得实现，毕竟感觉也没多少人来看, 我也没多少时间来写, 超多的坑留着没填就没填吧，当作个人知识库罢了 (x)

基于 Typst 带来了无数优点(当然也有坑点, 毕竟 HTML 导出是 0.13 这个当前最新的版本才支持的, 比如不支持batch compilation, 数量多起来每篇加载字体的时间积少成多, 亦或者svg的padding不大对) 所以写起来改起来都很方便, 我可以随心所欲地在局部范围内修改ui, 添加一些helper函数自定义某些强大的功能

因为是 typst, 顺带就支持了各种数学公式, 表格, 图表等(区区 markdown/latex ! !), 虽然说有点坑，比如需要自己手写点 show/set，比如需要手动调整生成的svg的padding，比如当figure里面套个math导出到html你还得注意判断下context, 决定是否要用html.elem/figure，但即使如此, 用在个人博客上仍然是相当灵活与舒服的：其编译速度，错误提示，语法友善度，各个方面都可以称得上是 modern and better, 自定义的能力非常强大, 作为标记语言其实薄纱了各种方言的markdown, 虽然不太能这样比较 (大雾)

再比如有些类似hexo/hugo/zola每篇文章的<front-matter>（即开头的title, data, draft啊啥的)，你可以用诸如下面的typst代码定义，然后用query函数/CLI获取进行处理 (而且下面的这个仅仅只是个例子, 完全可以每个条目配个metadata, 也完全可以被封装为用户层面上来看更加简洁的形式, 是非常灵活的):

// metadata[#metadata((title:"example-02",date:"2025-08-08",update:none,outline:true,series:"example-series",next:#link("/blog/example-03")[example-03],prev:#link("/blog/example-01")[example-01],summary:[哦,这里是神圣的实例页面!#strike[嗯!神圣的哦!]],draft:false,))<front-matter>]

然后比如说你正在做一个基于typst的ssg(静态博客生成器), 你可以手写parser啊IR啊啥的, 亦或者调用typst的CLI然后手动反序列化, 用query命令查你想要的:

typst query --root ./ --font-path ./ --features html --format json example-02.typ "<front-matter>" --field "value"

呃, 比如简单地这样写个?:

#[rustfmt::skip]#[derive(Debug, Serialize, Deserialize, PartialEq, Eq)]#[serde(tag ="func", rename_all ="lowercase")]enumTypstElement{Space,Linebreak,Text{text:String},Strike{text:String},Link{dest:String,body:Box<TypstElement>},Sequence{children:Vec<TypstElement>},#[serde(other)]OtherIgnored,}

你还可以这样生成一个html tag, 然后让ssg解析进行读取：

#let meta(attrs) = html.elem("metadata-for-ssg", attrs: attrs)

#meta((
  title: "post-1",
  date: "2025-02-02",
  outline: true,
  ...
  ...
))

至于css很麻烦? 我直接用tailwind一把梭的, 反正能搞出来不就好了吗? (x)

好啦, 下面是展示, 别奢求太多feature, 自己随便记点东西罢了呜呜呜
可以点击下面链接体验一下(不挂梯子可能进不去)：

[柳上川的博客](https://link.zhihu.com/?target=https%3A//kawayww.com/)

![](https://pic1.zhimg.com/v2-79ed388e0972c5899f23d1b0171bbf0f_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-941a800b3667ad076aef722396ebf383_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-acc5f26c52fd0c2fa10b6dc32ab336c5_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-02cfb4d2125d7db9ec47ac23dcf704b8_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-1295c1926936a7539724686dc03348bd_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-ba273a0321950a7a15f38e1a6ed49055_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-74c0aec23c84afa4a13c50a8c3dd9f1c_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-4df38d4bda41a07bb8d77d8d824b6345_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-9ac9eb7a8448e8330e7ddcb12b3c305d_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-98fa7941c82e898e73eb7a47b819cc47_r.jpg?source=2c26e567)

![](https://pica.zhimg.com/v2-36cfc4d9aab03d5d8be35a4e79f9b163_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-b9ca4f63d964db61e98b7b75ef29f79f_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-ca68a17e91596e056b25e13685c1f702_r.jpg?source=2c26e567)

![](https://pica.zhimg.com/v2-22571b496eedd3ae4390cae5fae610b0_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-bf764f7c7b8ace632b8c0ce0f914b85d_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-8df057950262ba6a0ced8116044c396e_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-c7c54ce1162e4001e33364c46d4324c4_r.jpg?source=2c26e567)




![](https://pic1.zhimg.com/v2-dd1cb9893ccd54b5b503a1a41e66bff5_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-d23b984809c8fe4a78cda1b4961f90d5_r.jpg?source=2c26e567)

上面的图片展示了首页, 表格, 图表. 数学公式, 图片, 视频, 代码高亮, 底部跳转到同系列 next/prev 的 footer, 移动端/手机小屏幕的部分适配等, 已经比较全面地展示了我博客里面有的东东了, 再多就没有了 (x

哦对, 弱弱地问一句, 有人想交换友链吗 QAQ

顺带一提, 如果是内容非常密集, 质量与数量都可以支撑起来的话, 那么我觉得最好的博客是 O 型腿大叔的博客:

[okmij.org](https://link.zhihu.com/?target=https%3A//okmij.org/ftp/)

![](https://pic1.zhimg.com/v2-90dbb107cbb8b13bfc6d799b402929a0_r.jpg?source=2c26e567)


---

# 程序员最浪漫的代码是什么? DBinary

**Author:** DBinary  
**Bio:** 画画的，专画可爱的东西  
**Avatar:** ![](https://picx.zhimg.com/v2-64c93a534ade1f71416f6d37bea062d0_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/3de93df9501c2b532004784d0e1ff44f  
**Published:** 2022.10.23 10:19:05  
**Updated:** 2022.10.23 14:16:46  
**Question:** https://www.zhihu.com/question/24711491  
**Question Created:** 2014.08.02 23:48:02  
**Question Updated:** 2022.09.26 15:04:49  
**Votes:** 1417  
**Comments:** 75  
**Type:** answer  

代码就是浪漫,更浪漫的是能击败其它程序员的代码.

**三天前笔者发起了一个叫做磁芯大战的编程游戏,简单来说就是编程控制自己的机器人 ,击败对方**

1.  16*16 的棋盘上,每回合中，你可以发出指令让机器人上下左右移动一步，或者放弃移动,朝之前的前进方向发射一枚子弹;
2. 如果你的子弹击中了对方，你获胜，反之如果对方被子弹击中，对方获胜；
3. 你每走一步，都会标记地图为你的颜色色块，对方没有办法走你已经走过的路径，当然反之亦然。
4. 如果在256回合后，仍然没有决出胜负，色块面积大一方赢。
5. 如果两个机器人相撞，或者色块面积一样大，那么为平局。

[DBinary：用代码一决胜负----磁芯大战](https://zhuanlan.zhihu.com/p/575687028)

最开始,AI都还比较简单,笔者放出了3个不太聪明的ai,它们只会按照固定的路径移动,来欺负一下什么都不做的AI

比如这样的(单刀赴会 进攻流)

![](https://picx.zhimg.com/v2-1047444236a737fa7207c2763720b8d6_r.jpg?source=2c26e567)

这样的(占山为王 走步流)

![](https://picx.zhimg.com/v2-4aa43d86d99a8f9220e4497a02c2334f_r.jpg?source=2c26e567)

这样的(一切随机 随缘流)

![](https://pic1.zhimg.com/v2-c54d2a23dc545d919e3a3deba1c2acda_r.jpg?source=2c26e567)

鉴于一代机器人实在不怎么聪明,第一代榜1由作者由@huhu可爱捏 开发的要你命8888系列,解决方案简直简单粗暴,移动到地图中央以后,四个方向开火

![](https://pic1.zhimg.com/v2-40147819aa5f5b9956008c0f38c73399_r.jpg?source=2c26e567)

靠着这个暴力打法,解决了不少人

![](https://picx.zhimg.com/v2-f10e4f21be8cdf75c01a58f41d13b85c_r.jpg?source=2c26e567)

如果说要你命8888还不那么够智能,那下面这个稍微有点智能的,就开始会追着人打了,由@sky 开发的QAQ程序,开始对对手定向蹲点发射子弹

![](https://picx.zhimg.com/v2-31246f6643f327306ac336656c2fca8c_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-db66fff2e157ea9f3064616b22438620_r.jpg?source=2c26e567)

而由[@apatite](https://www.zhihu.com/people/cad967d3e63be935cad946c114247f6e)开发的不太聪明的御坂10086号,选择的是先占格子再适时开火

![](https://pic1.zhimg.com/v2-c2bdaec0a3ee7b3377f8f4b42cc0ceae_r.jpg?source=2c26e567)

但目前他两胜率一样,由@Asher 开发的灵狐为我引路,既走格又开火,攻守兼备,很快占据了新的榜1

![](https://pic1.zhimg.com/v2-cf5eab66495a1c72689ce2e9dcd7589f_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-65a81de43bedec242d78e2a930c9428a_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-79e6cfdcf7d2716eca392cabed96b6bf_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-4ed21a81c72f7ae701798e5a01122ab5_r.jpg?source=2c26e567)

但是,他的榜1并没有坚持太久,很快,有@NianJiu 开发的Nothing Really Matter,很快屠戮了一大群人

![](https://picx.zhimg.com/v2-04e39783432ff36da759ad6fbf975ee9_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-aa0885bf65aa75bf53598c5e5e674cf6_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-63d09bfd55cb33dc489f903667177e32_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-3ee9ffff8cff9151dd3cf3c38bca4706_r.jpg?source=2c26e567)

昨天下午,比赛进入了白热化阶段,现在的榜3(之前的榜1)长时间维持着100%胜率,由@鲤鱼 开发的到底是为什么呢,看她比赛简直是一个视觉盛宴

![](https://picx.zhimg.com/v2-cd5446b0bcd5d26a833a3e0dfabb1271_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-1c096ee7eec619e918293931f5ba99d0_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-d46e33245f83fcb1a87cfa09faad0a43_r.jpg?source=2c26e567)

最后也就是现在的榜1,由[@tyvoid](https://www.zhihu.com/people/dfeedacae3ddf4ca20dd7960253ccee7)开发的retreat,他,卷死了所有人

![](https://pica.zhimg.com/v2-a659a4162edc18c1218b58dc5fb85393_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-6b81e53c1de05d895ac5986390d31bf8_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-c9dd81cfe54f94f6f612660c7670791a_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-e7f60dc5a8b86734ca340aff2d038f4c_r.jpg?source=2c26e567)

还有很多比赛我就不一一放了,如果你有自己的想法,欢迎参与到比赛中来


---

# 国内有哪些适合在读大学生参加的独立游戏制作比赛？ 关生丶

**Author:** 关生丶  
**Bio:** 电子游戏  
**Avatar:** ![](https://picx.zhimg.com/v2-a8b7af6f7698fa8e6cea8a12bb65f60f_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/bcde706efc73d529aa193c3cf3994462  
**Published:** 2024.03.28 15:13:25  
**Updated:** 2024.03.28 15:13:25  
**Question:** https://www.zhihu.com/question/66682363  
**Question Created:** 2017.10.15 15:41:49  
**Question Updated:** 2017.10.15 15:41:49  
**Votes:** 35  
**Comments:** 0  
**Type:** answer  

参加比赛最大的问题在哪？

第一，不自信，不敢参加

第二，没有合作的小伙伴，担心拉胯

第三，不知道有哪些渠道适合

这里给大家推荐一些研发性质的游戏比赛，大胆地去尝试，你不迈出第一步，永远也不会有结果。




## 1、CUSGA，全称是中国大学生游戏开发创作大赛

由UGDAP主办、鹰角开拓芯支持的活动。可以是目前国内最大规模的学生游戏开发活动了，该活动从年初开始，会在全国各大城市举办**沙龙巡演**，征集作品完成后会在8月举办线下的**答辩和展会**，可以接触到全国的优秀大学生团队作品。

## 活动时间：

2月-5月8日，作品提交截止

5月底，初赛入围公布

6月，决赛入围名单公布

8月，决赛暨颁奖典礼

## 链接：

[2024CUSGA第四届中国大学生游戏开发创作大赛开启报名！](https://link.zhihu.com/?target=https%3A//mp.weixin.qq.com/s/QWqfayNpR5XOwkl4Ela2Zw)

**推荐指数**：★★★★★

![](https://picx.zhimg.com/v2-eb18a2092856235ed794183fddfb13c3_r.jpg?source=2c26e567)




## 2、Ludum Dare

这是一个全球gamejam线上活动，利用周末的时间，在72小时完成一个包含核心玩法在内的可运行的游戏demo

该活动一年两次，分别在4月和10月，这不是一个功利性的活动，你可以和全球的开发者共同交流和试玩。

## 活动时间：4月12日

## 链接：

[ldjam.com | Ludum Dare game jam](https://link.zhihu.com/?target=https%3A//ldjam.com/)

**推荐指数**：★★★★

![](https://picx.zhimg.com/50/v2-d8f2d8bd6a01d179ef3b6a4a023052f3_720w.jpg?source=2c26e567)

## 3、BOOOMJAM 游戏创作挑战

BOOOM 每年会固定举办2次，限时开发三周、限定开发主题的游戏创作活动。在开发阶段结束后，面向所有玩家举办线上试玩游戏节，以及在机核的大型线下电子游戏嘉年华上对这些游戏进行展示。

## 活动时间：

3月28日-4月11日 线上报名与组队

4月12日-5月7日  自由创作

5月14日-5月28日 线上评选阶段

5月18日-5月19日  核聚变2024广州站

## 链接：

[2024第一场「BOOOMx开拓芯」游戏创作挑战开启！ | 机核](https://link.zhihu.com/?target=https%3A//site.gcores.com/booom2024/)

**推荐指数**：★★★

![](https://picx.zhimg.com/v2-b9992945267f4bcd12fd4e71d44461e5_r.jpg?source=2c26e567)

## 4、第6届吉比特未来游戏制作人大赛

吉比特，雷霆游戏母公司，有钱，肯花钱，重视年轻创作者，同鹰角开拓芯一样，稳定地支持大学生游戏开发，不管活动办得怎么样，肯花这个钱就值得好评+1。

## 活动时间：

3月4日，报名开启

5月15日，初赛作品提交

6月27日，公布入围奖及决赛晋级名单

7月19日-23日，线下GameJam

## 链接：

[12个奖项，冠军奖8万元，第6届吉比特未来游戏制作人大赛启动！](https://link.zhihu.com/?target=https%3A//mp.weixin.qq.com/s/jdOPtst44V-twbuDzfkAbQ)

**推荐指数：**★★★

![](https://picx.zhimg.com/v2-783919401f7698f25fee137948880f1b_r.jpg?source=2c26e567)

## 5、完美世界高校MiniGame开发大赛

完美世界老牌大厂了，知道的都知道，不知道的也没关系。

## 活动时间：

3月22日-4月2日，报名

4月3日-5月5日，游戏开发提交

5月17日，线下试玩及颁奖典礼

## 链接：

[完美世界高校Mini Game大赛来啦！！！](https://link.zhihu.com/?target=https%3A//mp.weixin.qq.com/s/OXgGT_W7lNbefhFmBoe3ag)

**推荐指数：★★★**

![](https://picx.zhimg.com/v2-cca5165455078c0bc1980035dcf4d402_r.jpg?source=2c26e567)

## 6、维塔士2024校园游戏制作创意大赛

**成都维塔士，外包达人，今年第一次做高校比赛，分创意组和开发组，含金量如何未知，有参与的小伙伴回来留言**

## 活动时间：

3月1日-29日，报名启动

4月7日/16日，初赛提交截止

4月14日/30日，复赛提交截止

5月上旬，决赛路演

## 链接：

[维塔士2024校园游戏制作创意大赛正式启动，等你来报名！](https://link.zhihu.com/?target=https%3A//mp.weixin.qq.com/s/c33BWHCV-M-pTLemr9fqvw)

![](https://pic1.zhimg.com/v2-c81d063d4e362fcd96cf2bfac0373d2a_r.jpg?source=2c26e567)

本来还有个网易Y3还没出消息，下次再更吧~

![](https://picx.zhimg.com/v2-e198a9aa92a681570db5182afd52df60_r.jpg?source=2c26e567)


---

# 一个学习数学软件的开发计划——洛书（樱花数谱） 余命数

**Author:** 余命数  
**Bio:** 学生->个人主页https://asaka.moe   
**Avatar:** ![](https://pic1.zhimg.com/v2-2128f09689d37adad7f14144948c2dff_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/772aba33cdc0ea9eefb025921675491a  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:** 132  
**Comments:** 23  
**Type:** article  

![](https://pic2.zhimg.com/v2-fe9d49ef60ee3890d2bcbd73afe948c7_r.jpg)

项目简介

- 软件名：洛书（樱花数谱）；英文名 Sakura Math；
- 软件包名：com.luoshu.math
- 开发语言：Dart（Flutter）
- 计划支持平台：Android、Windows、iOS、网页
- 软件描述：一款学习数学的软件。用户可以使用樱花数谱学习初中数学、高中数学、数学竞赛以及大学数学
- 软件功能：学习数学、练习数学（刷题）、内置番茄钟、题库、讨论等功能
- 项目网站（目前还没上线，包括网页版）：https://qed.moe

## 开发日志

## 重构界面

首页

![](https://pic3.zhimg.com/v2-51a6ffe75787b1429ed4b92a08f7de10_r.jpg)

学习

![](https://pica.zhimg.com/v2-a9a2cff658424110a939c58efb659c1a_r.jpg)

![](https://pic2.zhimg.com/v2-5babf3fc768801546e7206107824f0db_r.jpg)

图书馆

统计

![](https://picx.zhimg.com/v2-27913935950b0c743e0222525ce78821_r.jpg)

![](https://pic2.zhimg.com/v2-e70c54a271665c780934352cb70d8dab_r.jpg)

个人界面

![](https://picx.zhimg.com/v2-5b6d767427958222c8454aa9d8a33af1_r.jpg)

![](https://pica.zhimg.com/v2-80eaadb03a8bcf40081ec28c8909416e_r.jpg)

![](https://picx.zhimg.com/v2-47042a414a16ed621823d572b0048cb9_r.jpg)

题库

![](https://picx.zhimg.com/v2-160cc1e092962a5713de90e20c2561b9_r.jpg)

![](https://pic3.zhimg.com/v2-ae0bd9aeb624578d98ed9a4449231bc8_r.jpg)

![](https://pic1.zhimg.com/v2-156a241b651423bc984362d0048b158e_r.jpg)

讨论

![](https://pic1.zhimg.com/v2-f3cf1dc426240aa0020277d55b5bab28_r.jpg)

![](https://pic1.zhimg.com/v2-3fd1ac4017e2d509362c0852ba4d8678_r.jpg)

数学工作室

![](https://picx.zhimg.com/v2-6d6bf82281b0a2da0e7878bc5be72d8b_r.jpg)

![](https://picx.zhimg.com/v2-a90dbe38c06e1aebdbb145d15807d039_r.jpg)

![](https://picx.zhimg.com/v2-8d53df3eed76521e144d2b714903e9b7_r.jpg)

设置

![](https://pica.zhimg.com/v2-f2122fc224c5db4e540e38ddb0aa0f78_r.jpg)

主题展示

![](https://pica.zhimg.com/v2-56510da4f6da77d085db416accd1b58c_r.jpg)

![](https://pic2.zhimg.com/v2-1abba35e2ea6cb3d4fe6743b44caa455_r.jpg)

## 学习功能

在这部分我还不想谈太多，因为具体实现还有待商讨。目前我打算的学习功能主要有两点，一、是看交互动态电子书学习，学习者可以从图书馆里选择想要学习的教材，然后打开学习界面用于学习。

学习者像看电子书阅读器那样看书，同时，基本的阅读器功能也会有，比如标注、作笔记等。同时，书内的部分名词和地方也会有超链接，哪里不会点哪里，点击即跳转到本软件的数学百科界面，查看对应的条目（词条）解释。

二、通过软件的逐章学习学习，和第一个的区别是，这个不是阅读器看书学习，而是在软件里直接学。并且会引入相应的算法，比如学习者必须在进入软件前通过一项测试，基本判定其水平后，学习对应章节，不可跳章（而第一种看书学习没有限制）。并且也会适当进行间距重复等等，纳入软件的学习统计中。

学习板块分有小学、初中、高中、大学和竞赛，分别对应不同的学习课目。

## 图书馆

这个图书馆不止是单纯的电子书下载器和PDF阅读器，是实在的可交互的电子书（想象你在某小说软件看小说）。

这个图书馆也会有打分、收藏、爱心评论等基本功能。学习者可以从这里选择他想学的任何书加入到自己的学习计划中。

同时，我编写的中学数学之旅也会以交互的方式被录入软件，免费观看。

## 统计图

统计功能包括，学习打卡的天数、累积的花瓣（=经验值）、勋章墙（可以通过学习、贡献解法、题目、书籍等获得）、能力雷达和热力图。随账号同步。

## 整合AI（谱系）

本软件最主要的目标之一就是整合AI，从最开始的目标：题目谱系开始

- 一般的软件：单纯的题目，题目之间并无关联，只是将题目粗略的归类到一个分类下，标注难度等；
- 樱花数谱：题目谱系

也就是说，当使用者拍一道题，或者查到一道题时，在题目的详细描述里，会有一个类似谱系的功能。使用者可以看到这道题的类型的母题，以及母题下的分叉，展示数据库里这道题的演变类型，把握这类问题的演变趋势。

有些问题，每次被发到各大数学题目群问，然而这类题早在几年前，甚至几百年前就被人解决了，有了题目谱系，使用者可以更深地了解这个问题，追根溯源。

> 例子：当使用者上传一道题目，先是运用嵌入模型在现有的题目数据库搜索，交给AI智能分析这道题的考点和类别，并且这道题是否是现有数据库里某道题的变式，或是某两道题的结合，以此搭建这道题的谱系。随着时间的推理，拉起的网络越稠密，题目越多，这个关系网越来越好，效果也更好。

先动用文本嵌入模型，然后转交其他模型搜索，分析每道题目之间是母题、还是变式题、还是两道题目的拼凑题，建立这个关系网，即谱系，是本软件旨在实现的目标之一。

同时，通过积累所有用户的易错点、常见疑惑点等，知道用户最容易卡在哪一步，哪一步是最不好理解的，当用户点击看不懂这里的时候，AI会反问用户是卡在哪一步最常见的步骤上。不直接给学生答案，而是引导。以引导求理解。

## 数学维基

软件内置一个类似于Wikipedia的百科模块，比如，用户在软件里某个地方看到、或是主动搜索“极值点偏移”这个高中数学题型，或者是“矩阵乘法”，会自动跳转到这个名词或是题型专有的条目（~词条），这个目录里面至少包括：

- 简要描述
- 题目历史（谱系）
- 题目的定义、或者是其他高观点的理解
- 解法大全
- 讨论
- 想要了解更多所可以参考的相关文献和书籍
- 等等。。

在百科层面做好信息整理，避免用户需要到处看视频、查文献，才能形成一个系统性认知。

![](https://pic1.zhimg.com/v2-4d587168f14c64fdb1a534466f522ddc_r.jpg)

## 题库

题库包括初中数学、高中数学（近二十年高考真题、高质量的模拟题等）、数学竞赛（类似于AoPS，包括历年IMO等题目，按照谱系排版）以及大学数学（期末题库etc.），用户可以在软件里访问。

## 免费、简洁的界面和无广告。

## 一站式解决方案

本软件的数学工作室功能，用户可以在里面上传题目、导出错题、上传图书、组卷、绘图和运用简单的本地计算器。我也希望藉由“宁缺毋滥”的指导哲学，收集好的和高质量的资源（同时我自己也会编写一点），帮助无论是老师还是学生在内，更好的找到好的资源，整理错题的时候也能得到更好的文档排版。

目前这个软件许多功能仍处于计划之中，同时也有大量内容需要填充，预计在未来适当的时候会发布本软件的预览版，届时各位可以更好的提出建议，说说自己的需求。

12/6

[数学学习软件樱花数谱11/30开发日志：优雅的界面&拓扑排序&间隔重复与穿插练习](https://zhuanlan.zhihu.com/p/1978604559053128049)

[介绍我开发的更现代的数学学习软件项目——樱花数谱](https://zhuanlan.zhihu.com/p/1978095773582382009)


---

# 完全没社交是什么体验？ yyszone

**Author:** yyszone  
**Bio:** 个人网站yys.zone，欢迎友链  
**Avatar:** ![](https://picx.zhimg.com/v2-509cb08c08813176e23d496d69b91490_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/2317405c42fb0e31e62f9e140fb13ca1  
**Published:** 2025.12.08 17:17:23  
**Updated:** 2026.02.14 19:31:19  
**Question:** https://www.zhihu.com/question/270034810  
**Question Created:** 2018.03.27 01:36:47  
**Question Updated:** 2018.03.27 01:44:18  
**Votes:** 5481  
**Comments:** 1022  
**Type:** answer  

很宅，不出门，不走亲戚，没人情世故，不打电话，只打字，

在家里看哔哩哔哩，看动漫，写代码做网站，做太阳能发电，发呆

![](https://picx.zhimg.com/v2-4cdfb6e86f9549ca3c12ee99f30048a6_r.jpg?source=2c26e567)

右上角是两年前入手了一块32x32的LED像素屏，到手后只能用官方的ipixel color手机APP控制，想折腾点自动化显示自定义文字动画的玩法，搜遍了全网资料都没找到靠谱的代码控制方案，折腾几次无果，这块屏就被我塞柜子里吃灰了。今天心血来潮，抱着试试看的心态问了问AI，没想到真挖到了**pypixelcolor**这个宝藏库。

[6v太阳能板+水泵做循环水缸https://www.zhihu.com/video/1981402023372011400](https://link.zhihu.com/?target=https%3A//www.zhihu.com/video/1981402023372011400)

![](https://picx.zhimg.com/v2-35163cb5396d7add0eb0fb06a69035cb_r.jpg?source=2c26e567)

在院子里水龙头边做了个太阳能水缸，水泵只白天流水不需要电池成本低，夜里灯亮电池供电，不养鱼因为养不活，不伤害生物

[晴光引涧：我搭了个白天流水、夜晚发光的零插电小景观](https://link.zhihu.com/?target=https%3A//yys.zone/detail/%3Fid%3D471)

![](https://picx.zhimg.com/v2-7ec049d85bf0ccaf9b9523ad274fcefe_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/50/v2-a5fedea2e48dd636c1a4f3745368a625_720w.jpg?source=2c26e567)

用550瓦太阳能板给我房间发电，够一天使用的，esp8266 + ina219 + 30a继电器检测电压,画echarts 图，根据电压自动开关逆变器，防止过充过放，电压警告发送qq邮件，一开始用10a继电器烧坏了，电流太大了，搭建过程:[构建高精度监控的DIY太阳能储能系统220v](https://link.zhihu.com/?target=https%3A//yys.zone/detail/%3Fid%3D470)。




![](https://picx.zhimg.com/v2-5ade801179ecca988f17b3dabf6da6f3_r.jpg?source=2c26e567)

陆陆续续买了不少太阳能板，还有二手单车太阳能板，很便宜。有给12v热桌垫供电的2个18v50w太阳能板并联，有给电车充电600w48v太阳能板 升压60v 直流供电效率高，6v的给风扇、不少灯还有水缸供电。

![](https://picx.zhimg.com/v2-e450d5287abf9255472e6524e41192b2_r.jpg?source=2c26e567)

做不少网站，有个人博客，日记，笔记，国内外热点，书签。

![](https://pic1.zhimg.com/v2-32a449de9e0f66a7395544461b5426be_r.jpg?source=2c26e567)

热点聚合[https://hot.yysresume.work/](https://link.zhihu.com/?target=https%3A//hot.yysresume.work/)，使用hugo+cloudflare +GitHub制作，5小时更新一次

![](https://pic1.zhimg.com/v2-4b14064af673cd3e2bacd25c32d05d98_r.jpg?source=2c26e567)

模仿joplin做的，可以离线同步

![](https://picx.zhimg.com/v2-6bbcf25a1cecd17c1bb69012e92798cd_r.jpg?source=2c26e567)

为了活150岁，我在楼上弄个简单健身房，每天跑步12分钟。

我就爱这种日子， 不用应付乱七八糟的人和事，守着自己的小空间，折腾代码、网站和太阳能，看看动漫发发呆，偶尔动一动。没有鸡飞狗跳，只有安安稳稳，省钱又省心，活得自在，这就是我的宁静淡泊，简单的幸福。




每天坚持写日记的，记录每天做的事情，大学老师说过每天都没事找事做，无论什么事都算，发呆也算。

为了保存更长久，8年来，换了不少软件，从小米便签到OneNote，然后django，后来go语言做个日记网站[日记](https://link.zhihu.com/?target=https%3A//go.yyszone.dpdns.org/)（因为render免费托管go的性能还不错）

![](https://pic1.zhimg.com/v2-ac4ba49fbc0790a4e1673cfb4e109bdb_r.jpg?source=2c26e567)

然后每天23点通过n8n  读取数据库分析每天日记进行想法创新，生成各种各样html报告，把当天生成html文件提交到github

![](https://picx.zhimg.com/v2-7291c79998b8048b318caa5571ffc909_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/v2-510759e1f386f75c87d71456579d159e_r.jpg?source=2c26e567)

最后cloudfare pages+ hugo + github 读取html做个网页，把生成每天报告整理网页，日记网站通过js检测链接通过把当天日记报告链接嵌入日记底部。

![](https://picx.zhimg.com/v2-4bc374fb3ae72e539e631c5aa806cf3e_r.jpg?source=2c26e567)

日子应该做自己喜欢的事情，安稳自在就是最好的。




不少人问我收入，心里慌不慌 — 其实全靠当年在北京省出来的存款

当年就一个死心眼攒够 50 万回村。为了这个目标，我在北京真是把省钱刻进 DNA 里了，现在想起来都觉得自己当年挺能扛的

先说出行，五公里内基本全步行，从小被别人叫兔子腿！之前做一个银行项目，离出租屋四公里，每天往返走八公里，硬生生走了半年，现在很健康，也算意外收获。换项目了稍微远点儿就坐地铁，云闪付的乘车券、积分换的乘车红包，一分钱都不想多花。

吃饭方面，经常点外卖，三重返现！晓晓、小蚕的好评返现，淘券点餐返现，还有信用卡的笔笔返或立减金，叠在一起用，有时候一顿饭下来不仅花得少，偶尔还能倒赚几块钱，现在想起来还觉得挺有意思。 就是现在这些优惠力度越来越小了，没当年那么好薅了，离京念头+1。

租房更是 极限操作，在北京租了个 1300 块的小房间，也就不到 10 平，刚够放一张床。我干脆花一千多买了张高架床，下面摆电脑办公，上面睡觉，虽然挤是挤了点，但省下来的钱才是真的香。

![](https://picx.zhimg.com/v2-42c21a33d12abb1e732d26fc1ab4a541_r.jpg?source=2c26e567)

还有信用卡，我当年一口气办了 6 张不同银行的，每张都有不同的用处：有的专门外卖优惠，有的坐地铁有优惠，还有的购物能优惠 —— 信用卡这东西真是双刃剑，用好了能省不少，用不好就容易负债，不过现在这些银行活动也越来越水了。

当然，我也不是全方面省，钱大多花在组装电脑上了！别人省钱可能攒着买包买鞋，我唯独对装机没抵抗力。装机这事儿真的只有 0 次和无数次，不知不觉已经装了 7 台了，每次拧螺丝、插配件，真的越装越上瘾，垃圾佬的快乐。

现在回村过简单日子，不用再为房租通勤吃饭抠抠搜搜绞尽脑汁，偶尔还能捣鼓捣鼓电脑和太阳能，这日子别提多舒坦了

我还做音乐网站:[音乐](https://link.zhihu.com/?target=https%3A//music.yysresume.work/)

支持**频谱可视化，frame加入我的博客首页**

![](https://picx.zhimg.com/v2-0f2eb0829103564b9f621fe51080b3cd_r.jpg?source=2c26e567)

还有云盘网盘:[云盘](https://link.zhihu.com/?target=https%3A//cloud.yysresume.work/)

支持多个**S3 协议的存储桶**一键切换，比如cloud falre r2，Backblaze B2 ，minio（应该还有不少免费存储桶，r2和b2每月有免费10g流量，minio无限制，搭建nas上使用）。播放视频支持断点续播 ，视频播放历史记录，为了弥补openlist功能缺失做了这个网站,并且每个文件链接可以方便加入我的博客文章。minio加入公网ipv6，速度比较快，后来我发现[http://fly.io](https://link.zhihu.com/?target=http%3A//fly.io)才支持ipv6，vercel只支持ipv4.部署在[http://fly.io](https://link.zhihu.com/?target=http%3A//fly.io)。手机可以安装RoundSync ，添加s3协议定时自动同步照片文件到云盘上。

![](https://pic1.zhimg.com/v2-873fdf7551c8282f51a20d9add8a0546_r.jpg?source=2c26e567)

![](https://picx.zhimg.com/50/v2-b9cd15a41217560a8492b8cacd997144_720w.jpg?source=2c26e567)

做网站初衷不少不为盈利只为自由快乐，代替不少封闭的app。




最近在3d打印，感觉容易上瘾，打印不少宜家洞洞板，洞洞版收纳支架，灯，抽屉，ILI9341屏幕外壳

[3d打印机打印洞洞版https://www.zhihu.com/video/2006085657475438150](https://link.zhihu.com/?target=https%3A//www.zhihu.com/video/2006085657475438150)

![](https://picx.zhimg.com/v2-32f94afcf9c0e65f42cc8104d3330cbc_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-bf2db874cc8a8972f437eac4c71f36cd_r.jpg?source=2c26e567)

![](https://pic1.zhimg.com/v2-3f3a5e1f60c162d3d43c0988d7209dc6_r.jpg?source=2c26e567)

打印itx机箱比较困难，失败不少次，没有封箱打印PETG容易翘边，pla效果不错但是不耐用，准备买三角钢架和保温棉做个封箱。


---

# 介绍我开发的更现代的数学学习软件项目——樱花数谱 余命数

**Author:** 余命数  
**Bio:** 学生->个人主页https://asaka.moe   
**Avatar:** ![](https://pic1.zhimg.com/v2-2128f09689d37adad7f14144948c2dff_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/772aba33cdc0ea9eefb025921675491a  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:** 471  
**Comments:** 77  
**Type:** article  

**本文仅为介绍本项目以及其目的。**

![](https://pic2.zhimg.com/v2-aa9172f5dd5a28826135508fe12bf611_r.jpg)

## 

[数学学习软件樱花数谱11/30开发日志：优雅的界面&拓扑排序&间隔重复与穿插练习](https://zhuanlan.zhihu.com/p/1978604559053128049?share_code=1rQkPaqdU08hc&utm_psn=1978612196771635498)

## 关键信息：

- 软件名：樱花数谱（Sakura Math）
- 软件包名：com.sakura.math
- 开发语言：Dart（Flutter）
- 计划支持平台：Android，由于软件上架iPhone的App store需要交七百块，故iOS和Windows用户只能使用网页版
- 软件描述：一款学习数学的软件。用户可以使用樱花数谱学习初中数学、高中数学、数学竞赛以及大学数学
- 软件功能：学习数学、练习数学（刷题）、内置番茄钟、题库等功能
- 项目网站（目前还没上线，包括网页版）：

[https://qed.moe](https://link.zhihu.com/?target=http%3A//xn--kdvs9hvr0a8vi/)

## 软件特点

## 题目谱系

- 一般的软件：单纯的题目，题目之间并无关联，只是将题目粗略的归类到一个分类下，标注难度等；
- 樱花数谱：题目谱系

也就是说，当使用者拍一道题，或者查到一道题时，在题目的详细描述里，会有一个类似谱系的功能。使用者可以看到这道题的类型的母题，以及母题下的分叉，展示数据库里这道题的演变类型，把握这类问题的演变趋势。

有些问题，每次被发到各大数学题目群问，然而这类题早在几年前，甚至几百年前就被人解决了，有了题目谱系，使用者可以更深地了解这个问题，追根溯源。

> 例子：当使用者上传一道题目，先是运用嵌入模型在现有的题目数据库搜索，交给AI智能分析这道题的考点和类别，并且这道题是否是现有数据库里某道题的变式，或是某两道题的结合，以此搭建这道题的谱系。随着时间的推理，拉起的网络越稠密，题目越多，这个关系网越来越好，效果也更好。

## 智能引导

通过积累所有用户的易错点、常见疑惑点等，知道用户最容易卡在哪一步，哪一步是最不好理解的，当用户点击看不懂这里的时候，AI会反问用户是卡在哪一步最常见的步骤上。不直接给学生答案，而是引导。以引导求理解。

## 哪里不会点哪里：数学维基

软件内置一个类似于Wikipedia的百科模块，比如，用户在软件里某个地方看到、或是主动搜索“极值点偏移”这个高中数学题型，或者是“矩阵乘法”，会自动跳转到这个名词或是题型专有的条目（~词条），这个目录里面至少包括：

- 简要描述
- 题目历史（谱系）
- 题目的定义、或者是其他高观点的理解
- 解法大全
- 讨论
- 想要了解更多所可以参考的相关文献和书籍
- 等等。。

在百科层面做好信息整理，避免用户需要到处看视频、查文献，才能形成一个系统性认知

## 学习数学

用户可以在软件的学习页阅读精心设计的学习章节，从初中到大学，按章节进行。同时也会将我编写的书籍《中学数学之旅》整合其中，并且提供给读者更进一步了解的渠道。

## 题库

题库包括初中数学、高中数学（近二十年高考真题、高质量的模拟题等）、数学竞赛（类似于AoPS，包括历年IMO等题目，按照谱系排版）以及大学数学（期末题库etc.），用户可以在软件里访问。

## 樱花记忆法

即间隔重复系统，一道题型不会的隔几天考一次。

## 用户界面简洁优雅、无广告（和任何恶心人的弹窗）、免费

## 更多更现代和智能的特点。。

## 现状

目前这个软件的项目也是正式立项了，分别有网页版和Android版本，目前还处于策划阶段。

## 示例

![](https://pica.zhimg.com/v2-e110b024627d6b83c9824ff168ea3ab6_r.jpg)

![](https://pica.zhimg.com/v2-34907d4f9d39593d7b7a652afcaf5f7a_r.jpg)

![](https://picx.zhimg.com/v2-1c0f5f0c3841fefbe6c29586ad5d85e7_r.jpg)

![](https://picx.zhimg.com/v2-37d8fae12f4eb016d2a826cbb01de4f7_r.jpg)

![](https://pic4.zhimg.com/v2-683527f34544a69a726d5ba9db2cae7b_r.jpg)

![](https://picx.zhimg.com/v2-bbe517d95ba8678b9c8efab23815b82f_r.jpg)

## 敬请期待！

[中学数学之旅十一月新书稿（全五卷）](https://zhuanlan.zhihu.com/p/1977408006607114781)

END


---

# 如何评价米哈游新游戏《星布谷地》一测? 坚实的小石板

**Author:** 坚实的小石板  
**Bio:**   
**Avatar:** ![](https://picx.zhimg.com/4c55f2e8c6fa6f0a707df249ed5b6d6f_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/320204868a761fdbc4afa4d96bc3e309  
**Published:** 2025.11.07 18:39:49  
**Updated:** 2025.11.07 18:39:49  
**Question:** https://www.zhihu.com/question/1970057808704705150  
**Question Created:** 2025.11.07 09:19:43  
**Question Updated:** 2025.11.07 09:19:43  
**Votes:** 287  
**Comments:** 34  
**Type:** answer  

酒保 ai npc 的设计，让该终端从 1v1 对话者，转变成 Nv1 旁听者，缓解了 2 个困境：

- 通过预期引导，让玩家对 ai npc 的述求，由类人同伴下调为陪聊工具人，且群体智慧不强求共通，有私域上下文记忆即可。
- 对服务端 ai 进行了局部分割，能将一部分算力挑战，转移至相对不值钱且不稀缺的存储层。

这样消费者的述求，会从算力、能力与理解力等强要求，分流至记忆、情感陪同与话题调动等。介于频道机器人与 ai 数字人之间，算是游戏场景的一种设计思考。

它这咖啡馆功能再优化下，能覆盖私域邮箱、聊天室、备忘录跟情感垃圾桶的场景。挺有意思，不知道一测是否有多 ai npc 的简易互动，哪怕 2-3 人也行，虽然我也想不出啥场景，打牌或下棋？

除此以外。

瞄了眼图鉴累积数，得观察下玩家对游戏内外同步时间锁的接受边界。如果该设定成立，那虚拟物品搜集池就初步成型，奖惩激励框架搭建完成。围绕核心货币周转按需调控，流程上避免取巧甚至作弊漏洞即可。

剩下就是完善，玩家间、玩家与虚拟物品、玩家与场景跟玩家与活动等互动，这部分越丰富，驱动就越顺利，听说谷地也考虑引入 UGC？。

最后就是安全线，围绕游戏内极端恶意行为，搭建一套响应与管控防火墙。

没了。


---

# 如何评价如今的 Bilibili？ 路易斯小石

**Author:** 路易斯小石  
**Bio:** 爱好历史生物 喜欢环保 热爱共产主义 追求理性与正义  
**Avatar:** ![](https://pic1.zhimg.com/v2-98af9731d0a390ed594a9a5cda9d740e_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/46d09acbd02f81765a1c5de43dcd8860  
**Published:** 2025.07.03 15:12:41  
**Updated:** 2025.09.05 17:46:45  
**Question:** https://www.zhihu.com/question/266972664  
**Question Created:** 2018.02.10 18:34:13  
**Question Updated:** 2018.10.01 11:40:41  
**Votes:** 4648  
**Comments:** 122  
**Type:** answer  

PiliPala

[https://github.com/guozhigq/pilipala](https://link.zhihu.com/?target=https%3A//github.com/guozhigq/pilipala)

PiliPala X

[https://github.com/orz12/PiliPalaX](https://link.zhihu.com/?target=https%3A//github.com/orz12/PiliPalaX)

PiliPlus

[https://github.com/bggRGjQaUbCoE/PiliPlus](https://link.zhihu.com/?target=https%3A//github.com/bggRGjQaUbCoE/PiliPlus)

Bilimiao 2

[https://github.com/10miaomiao/bilimiao2](https://link.zhihu.com/?target=https%3A//github.com/10miaomiao/bilimiao2)

Bilidown-Reborn

[https://github.com/MLChinoo/bilidown-reborn](https://link.zhihu.com/?target=https%3A//github.com/MLChinoo/bilidown-reborn)

哔哩助理

[https://github.com/Richasy/Bili.Copilot](https://link.zhihu.com/?target=https%3A//github.com/Richasy/Bili.Copilot)

Wiliwili

[https://github.com/xfangfang/wiliwili/wiki](https://link.zhihu.com/?target=https%3A//github.com/xfangfang/wiliwili/wiki)

JiJiDown

[http://client.jijidown.com/](https://link.zhihu.com/?target=http%3A//client.jijidown.com/)

Downkyi

[https://github.com/yaobiao131/downkyicore](https://link.zhihu.com/?target=https%3A//github.com/yaobiao131/downkyicore)

biliup-app

[https://github.com/biliup/biliup-app](https://link.zhihu.com/?target=https%3A//github.com/biliup/biliup-app)

Bilitools

[https://github.com/btjawa/BiliTools](https://link.zhihu.com/?target=https%3A//github.com/btjawa/BiliTools)

Animeko

[https://github.com/open-ani/animeko](https://link.zhihu.com/?target=https%3A//github.com/open-ani/animeko)

Kazumi

[https://github.com/Predidit/Kazumi](https://link.zhihu.com/?target=https%3A//github.com/Predidit/Kazumi)

Manga Downloader

[https://github.com/lanyeeee/bilibili-manga-downloader](https://link.zhihu.com/?target=https%3A//github.com/lanyeeee/bilibili-manga-downloader)

Manga Watermark Remover

[https://github.com/lanyeeee/bilibili-manga-watermark-remover](https://link.zhihu.com/?target=https%3A//github.com/lanyeeee/bilibili-manga-watermark-remover)

Venera

[https://github.com/venera-app/venera](https://link.zhihu.com/?target=https%3A//github.com/venera-app/venera)

Mihon

[https://github.com/mihonapp/mihon](https://link.zhihu.com/?target=https%3A//github.com/mihonapp/mihon)

BilibiliLiveRecordDownLoader

[https://github.com/HMBSbige/BilibiliLiveRecordDownLoader?tab=readme-ov-file](https://link.zhihu.com/?target=https%3A//github.com/HMBSbige/BilibiliLiveRecordDownLoader%3Ftab%3Dreadme-ov-file)


---

# 如何评价高一 UP 主「Silence 默不作声」辍学搞独立游戏？ 自然妙有猫仙人

**Author:** 自然妙有猫仙人  
**Bio:** 连我的AI拷打都过不了的东西没有被认真考虑的价值  
**Avatar:** ![](https://picx.zhimg.com/v2-664851353a2af401391d24ed1080d51c_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/8b9737900f8279a913b8cd2dddcd252f  
**Published:** 2023.01.31 11:48:52  
**Updated:** 2023.02.02 14:14:34  
**Question:** https://www.zhihu.com/question/581274163  
**Question Created:** 2023.01.30 12:14:15  
**Question Updated:** 2023.02.02 13:18:48  
**Votes:** 1364  
**Comments:** 128  
**Type:** answer  

**B站游戏开发过家家的典型**

先是发个仅包含玩法构思（有些甚至连具体玩法都没有，就只是声称自己要做游戏），没有任何demo演示的视频招人

而能招到的基本也都是一些没有工程实践经验，仅凭业余兴趣学习过相关技能的学生

然后划分出各种策划组、美术组、程序组、翻译组、配音组等等，总之就是突出一个拿不出什么成果但是在组织结构划分上很用心（类似热衷写设定但就是写不出来正文）

就这样招到了几十到几百人，分出了七八个组，建立起十几个群，再起名个XX工作室，角色扮演度拉满

期间再更新几个画饼煽情的视频，buff叠满，流量吸满

然后一开始或许招到的人还会怀有三分钟热情来热烈的参与到游戏开发中

但随着热情的消退以及各种因为缺乏专业度导致的问题的暴露，使得实际能持续参与到开发中的人员能有十分之一就很不错了

最后能做出个包含核心玩法的demo都已经算是很大的进步了，更多的是连demo都做不出来，开发群逐渐变成了没人说话的死群，宣告本次过家家的结束

总而言之，独立游戏开发讲究的是个精兵强将，而不是靠在互联网上东拼西凑出来的团队就能搞定的

——————分割线——————

这个吐槽好像意外火了？？

B站关注洛天依喵，关注洛天依谢谢喵

![](https://picx.zhimg.com/v2-821d7f923b2ffceb8921f4b0e5c5f564_r.jpg?source=2c26e567)


---

# 如何评价独立游戏《神之天平》？ Wraith

**Author:** Wraith  
**Bio:** 沉浸于并不存在的第九艺术之中  
**Avatar:** ![](https://picx.zhimg.com/86f3472e8_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/43fb10c1190636e58e420373d3348756  
**Published:** 2024.07.01 22:01:42  
**Updated:** 2024.07.01 22:01:42  
**Question:** https://www.zhihu.com/question/563800025  
**Question Created:** 2022.11.01 04:42:28  
**Question Updated:** 2023.03.02 11:02:26  
**Votes:** 129  
**Comments:** 15  
**Type:** answer  

## 做出这游戏的独立制作者，真的是神

![](https://pic1.zhimg.com/v2-bf2b0d232bf8c2685a9239189dd4c148_r.jpg?source=2c26e567)

久闻Steam上有一款独立游戏神作，然而因为我是个可耻的主机+画面党，所以一直没机会体验——直到Switch上也有了该作，立刻第一时间预购，然后在差不多一年的时间里依靠每次出远门的时间断断续续给打完了。虽然对游戏体量早有预期，但每次看到新的剧情和系统，都不经感慨，这作者怎么还能有新东西？！

![](https://picx.zhimg.com/v2-fc5f9e3104925a0619f0e333a64c29b0_r.jpg?source=2c26e567)

## 精妙复杂的系统

作为2D横板游戏，本作一开始的操作并不复杂——如果你没有提前玩那个试玩版的话。然而随着游戏的进行，本作的系统堪称为JRPG史上之最都不为过：属性加点有衰减、装备有重量、武器有不同的招式类型、法术有6个属性和多个高级版本、技能有上百个之多；这还没算能把几乎所有道具放上去的天平系统，以及二周目新增的装备盘和天平升级……照理来说，一般游戏要是做得如此复杂，那么绝大多数系统都会沦落为鸡肋，或是邪道玩法专用（此处点名几百种宝可梦和几千种招式）；但是神之天平却成功让玩家几乎体验了所有的要素。单从这一点来说，独立开发者KEIZO就是个堪比顶尖游戏制作人的奇才了。

![](https://picx.zhimg.com/v2-615cc9658757dccd7f10b8d4deaa73ff_r.jpg?source=2c26e567)

简单来说，本作的几乎每个装备（除饰品）外都有熟练度的设定，在装备一段时间后大多可以获得独一无二的新技能，所以玩家会有动力在每个场景结束前尽量集齐所有可供购买的装备（含随机掉落的隐藏装备）；而购买本作的几乎每个装备除了钱、都需要怪物掉落的特定素材，这就需要玩家去刷刷刷了——而刷刷刷的过程正好可以给刚刚换来的装备提升熟练度。本作的熟练度和道具掉落概率，恰好能让这个过程循环起来，使得玩家不会感到无聊，总是有着盼头。而在刷刷刷的过程中，玩家还会获得经验值升级、并获得力量晶体提升能力：由于玩家升级加点是完全自由的，为了使本作难度曲线适中，玩家在力量晶体成长盘里被安排加的那些属性才保证了玩家的基本能力可以不断提升并匹配游戏的难度——虽然玩家的目的仅仅是尽快解锁新的魔法。这个设定也是绝了。

![](https://pic1.zhimg.com/v2-83700ec7ed71ffd55f4493c8d97eab91_r.jpg?source=2c26e567)

而在精巧设计的数值外，游戏中更有令人发指的技能和魔法可供玩家选择。上百种技能虽然多，但却是靠刷装备熟练度逐渐获得的（到了二周目又可以通过装备盘获得几十种隐藏技能），所以不会一股脑塞给玩家；而游戏中有限的晶体，又逼迫玩家去一一尝试这些技能，而无法全部装上去。类似的魔法技能也是。游戏强制了每种属性只能装备一种魔法，从而不仅限制了游戏快捷键的使用、让玩家形成肌肉记忆，更促使玩家去尝试并比较不同的魔法，选出更适合自己的——二周目更又追加了几十种隐藏魔法，永远不会腻。

![](https://picx.zhimg.com/v2-f37dd321ed4128973ee72383a08bda0f_r.jpg?source=2c26e567)

更有意思的则是天平系统。表面上天平系统只是一个让玩家自由搭配Buff的系统；但天平半强制性地要求两边重量相同的设定，却是神来之笔。它不仅增加了配平的难度，即游戏的趣味性，更让玩家有意识地去关注每一种道具——而一般RPG游戏中，消耗性道具基本就是鸡肋的存在。而道具本身的重量和附加的属性，又巧妙地提高了游戏的平衡性——初期天平托盘较小、道具也较少时，是很难同时装上多个拥有强力属性的超重道具的；而后期由于有了较多的托盘和道具选择，玩家虽然可以选择超重道具，但却要当心重复属性造成的抵消。至于二周目的托盘升级，更是将原本在后期变得鸡肋的初级道具一跃成为了最强道具，又创造了新的可能性。

![](https://picx.zhimg.com/v2-82793f0a720ffe2b57aa8084563caae0_r.jpg?source=2c26e567)

=========================剧透警告分界线========================

## 一波三折的剧情

![](https://pic1.zhimg.com/v2-3cde9f450f3c47cf839f86ae01de77dc_r.jpg?source=2c26e567)

本作初始的剧情极其传统和王道——主角和青梅竹马被魔兽袭击，醒来时青梅竹马不知去向，只有一只失去记忆但会说话的乌鸦；从此主角踏上了寻找青梅竹马的旅途……如果是正常游戏，那这只看起来色色的乌鸦就应该是女主化身了。但显然被称为神作的作品不会如此简单……

![](https://pic1.zhimg.com/v2-e5b40fc3bac7bb1ed192dbd0109a28eb_r.jpg?source=2c26e567)

作为标题的“神之天平”，本来只是主角在接到第一个找草药任务时的“意外”收获，却从此改变了他的命运。接下来的每一章，都是在必死的局面下主角通过天平回溯了时间，虽然也付出了一些代价但总归拯救了相应的人们。相比传统意义上的时空穿越，这里的巧思更多是在主角如何在有限的空间和时间内，靠一己之力扭转命运。之后虽然也有反向穿越去未来的剧情，加入了不少科幻元素，但本质上还是时间之神的设定。

![](https://picx.zhimg.com/v2-1b73e20d3d04ac9bf3c4e83c17975437_r.jpg?source=2c26e567)

然而，神作之所以是神作，无疑在于其中的多重反转。青梅竹马的阿奴莉丝的设定即是如此——虽然玩家隐约从第二章的泊灵猜出了当年的真相、或者说嘉隆的真实身份，不过当揭露出阿奴莉丝是个扮猪吃老虎的AI后，玩家还是不免陷入了道德困境——是继续自己一路上的目标，还是为了新结识的朋友们而大义灭亲。到这里，游戏的确出现了一个分支结局，让玩家可以和青梅竹马一直相依为命；当然，更多的玩家肯定是会起身与命运抗争……

![](https://pic1.zhimg.com/v2-7589f60dd608380790b6fd2de7cd0ef5_r.jpg?source=2c26e567)

但比起阿奴莉丝的身份，游戏的设定更精彩——未来的人类为了争夺有限的资源，利用“天平之神”的力量，把AI的思想和魔兽送到过去，消灭和控制过去人口的数量，来创造出另一个不缺少资源的平行世界。这种脑洞真的是无与伦比；不仅圆了游戏的故事设定，还把剑与魔法、时空穿越和未来科技等多个矛盾的主题给成功融合到了一起。与此同时，依托于这些设定，故事成功也把阿努比斯的本心给洗白了、并搞了大团圆的结局…………

![](https://picx.zhimg.com/v2-8bd1820ac677b6365c6b882a656faada_r.jpg?source=2c26e567)

然而，制作者KEIZO真的是神！在大结局之后，又推出了从系统到剧情都再上一个台阶的新章！系统上面已经提过了，装备盘、技能升格和天平的升级，随便哪个都是在本就近似完美的系统上再次锦上添花。更夸张的是剧情——本来应该很完整的剧情和世界观，硬是也再次得到了合理的升级。

![](https://pica.zhimg.com/v2-74ad489f45fcf73f7e67d68de84696e6_r.jpg?source=2c26e567)

新章不仅通过讨巧的部分，复用了之前的地图和敌人素材，更给玩家机会将之前略带遗憾的剧情进行了完美的重构——当然最巧妙的还是，这种“二周目”竟然还在剧情层面得到了解释。玩家更惊喜地发现，新的世界观在之前的剧情中其实早有伏笔，也就是作者早在最早分章节出该作时，就已经把这条草蛇灰线给埋好了。于是乎，这第N次的剧情反转也是水到渠成……

![](https://picx.zhimg.com/v2-75bfbe078d6958a5a88e2eb6a2c410c9_r.jpg?source=2c26e567)

虽说玩家到了游戏中期，已经摸清了作者KEIZO的套路，无非就是靠不停的反转来制造新的冲突和遗憾、同时用天平的力量来弥补遗憾；但是每当玩家觉得“我什么没见过.jpg”的时候，新的剧情走向总是成为了“这我真的没见过.jpg”。这么大的脑洞，以及堪比顶尖游戏设计师的系统设计，竟然出自一名独立游戏开发者，不得不说，这真的是神迹啊。

![](https://picx.zhimg.com/v2-a1c9efe78f929288bd70223126a630c3_r.jpg?source=2c26e567)


---

# 通过 TypeScript 类型体操学习日语语法 王译锋

**Author:** 王译锋  
**Bio:** aka 雪碧 | doodlewind@github  
**Avatar:** ![](https://pica.zhimg.com/v2-c93ccdb4ad4b457e97646100ea6add94_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/c0e2a6c332e573b37d6f5387074ead98  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:** 503  
**Comments:** 38  
**Type:** article  

尽管一个用于人类交流，一个服务于机器指令，自然语言和编程语言却共享着相似的基本原理。两者均由语法规则、结构限制和组合方式所定义。

举例来说，日语以其严（luo）谨（suo）的语法规则和丰富的变形系统而闻名，而 TypeScript 的类型系统则因其表达能力和灵活性而受到推崇。当我们将这两个领域结合起来，会发生什么呢？本文将探索如何利用 TypeScript 的高级泛型编程来建模日语语法结构，让编程语言成为辅助语言学习的新工具。

由于全文较长，因此这里先预告几个后文中将演示的日语例句：

- 疑问句「为什么要演奏春日影？」
- 条件句「辛美尔的话也会这么做的」
- 组合句「好时代，来临啦」

下面，让我们从基础知识开始循序渐进吧。

## 从命令式编程到类型编程

在深入日语语法之前，我们可以先通过一个简单的英语动词变形例子，来理解如何将常规的 JavaScript 函数转换为 TypeScript 类型级别的实现。

首先，下面是一个简单的 JavaScript 函数，它根据第二个参数决定给英语动词添加"ed"还是"ing"：

functionconjugateEnglishVerb(verb,form){if(form==="past"){returnverb+"ed";}elseif(form==="progressive"){returnverb+"ing";}else{returnverb;}}// 使用示例conjugateEnglishVerb("walk","past");// "walked"conjugateEnglishVerb("talk","progressive");// "talking"

这个函数在运行时接收参数并返回结果。这是典型的命令式编程方法，即通过一系列明确的指令告诉计算机「如何」执行任务。现在，让我们将这个逻辑转换到 TypeScript 的类型系统中：

// 定义可能的变形形式typeEnglishVerbForm="base"|"past"|"progressive";// 类型级别的动词变形函数typeConjugateEnglishVerb<Verbextendsstring,FormextendsEnglishVerbForm>=Formextends"past"?`${Verb}ed`:Formextends"progressive"?`${Verb}ing`:Verb;// 类型级别的使用示例typeWalkedVerb=ConjugateEnglishVerb<"walk","past">;// 结果: "walked"typeTalkingVerb=ConjugateEnglishVerb<"talk","progressive">;// 结果: "talking"

注意这里的关键转换：

- 函数参数变成了泛型参数 <Verb extends string, Form extends EnglishVerbForm>
- if/else 条件语句变成了条件类型 Form extends "past" ? ... : ...
- 字符串拼接 verb + "ed" 变成了模板字符串类型 `${Verb}ed`
- 函数调用变成了类型声明和实例化

这个简单的例子用到了 TypeScript 类型系统中的三个核心工具：

- 泛型：用于参数化类型
- 条件类型：用于根据条件选择不同的类型
- 模板字符串类型：用于在类型级别操作字符串

对比这两个例子可以感受到，声明式的类型编程相比命令式编程，在与计算机沟通的方式上有根本区别：

- 命令式编程告诉计算机「如何做」，即通过一系列明确的步骤执行任务。
- 而类型编程则是在描述「是什么」，即声明类型之间的关系和约束。我们不再发出指令序列，而是构建一个类型关系网络，让编译器在编译时自行推导结果。

这种范式转变使我们能够在程序运行前就验证复杂规则的正确性，将运行时错误转变为编译时错误，非常适合建模人类语法这种（纸面上）具有严格结构约束的系统。

## 扩展语法规则特例

当然，实际的语言规则要比上面的简单变换复杂得多，存在着许多人为规定的特例。让我们稍微扩展英语动词变形的例子，考虑一些特殊规则：

// 更复杂的英语动词变形typeConjugateEnglishVerbAdvanced<Verbextendsstring,FormextendsEnglishVerbForm>=Formextends"past"?Verbextends`${inferBase}e`?`${Base}ed`// 如果以 e 结尾，只加 d:Verbextends`${inferBase}y`?`${Base}ied`// 如果以 y 结尾，变 y 为 ied:`${Verb}ed`:Formextends"progressive"?Verbextends`${inferBase}e`?`${Base}ing`// 如果以 e 结尾，去掉 e 再加 ing:`${Verb}ing`:Verb;// 示例typeMovedVerb=ConjugateEnglishVerbAdvanced<"move","past">;// "moved"，不是 "moveed"typeCriedVerb=ConjugateEnglishVerbAdvanced<"cry","past">;// "cried"，不是 "cryed"typeMovingVerb=ConjugateEnglishVerbAdvanced<"move","progressive">;// "moving"，不是 "moveing"

这里我们使用了infer关键字来从类型表达式（即所谓的「模式」）中抽取出特定的片段，并在结果中重用它。这就是类型系统中名为模式匹配的强大工具。

## 日语动词变形基础：了解五段动词

对于没有接触过日语的读者，这里先简单介绍一下日语动词变形的基本概念。

在日语中，动词会根据时态、语气、礼貌程度等因素发生变形。这与英语中的 "walk/walked/walking" 类似，但日语的变形系统更加系统化且规则丰富。

日语的动词主要分为三类：五段动词、一段动词和不规则动词。其中，五段动词是最常见也是变形规则最复杂的一种。所谓的「五段」来源于传统日语语法中的元音行变化（あ、い、う、え、お五行），意味着这类动词在变形时词尾会在这五个行中变化。

以「買う」（买）这个五段动词为例，它在几种不同形式下的变化如下：

- 基本形（字典形）：買う (kau)
- て形（连接形）：買って (katte)
- た形（过去式）：買った (katta)
- ない形（否定形）：買わない (kawanai)
- 命令形：買え (kae)

如果用 JavaScript 函数来实现这种变形逻辑，大致会是这样：

functionconjugateGodanVerb(stem,ending,form){if(form==="て形"){if(ending==="う"||ending==="つ"||ending==="る"){returnstem+"って";}elseif(ending==="く"){returnstem+"いて";}elseif(ending==="ぐ"){returnstem+"いで";}elseif(ending==="す"){returnstem+"して";}elseif(ending==="ぬ"||ending==="ぶ"||ending==="む"){returnstem+"んで";}}elseif(form==="た形"){if(ending==="う"||ending==="つ"||ending==="る"){returnstem+"った";}elseif(ending==="く"){returnstem+"いた";}elseif(ending==="ぐ"){returnstem+"いだ";}elseif(ending==="す"){returnstem+"した";}elseif(ending==="ぬ"||ending==="ぶ"||ending==="む"){returnstem+"んだ";}}// 其他形式的变形...returnstem+ending;// 默认返回字典形}// 使用示例console.log(conjugateGodanVerb("買","う","て形"));// "買って"console.log(conjugateGodanVerb("書","く","た形"));// "書いた"

这个函数展示了五段动词变形的基本逻辑：根据词尾（ending）和目标形式（form）选择相应的变形规则。虽然它确实能处理五段动词的变形，但这种命令式的if-else实现有一些明显的缺点：

- 首先，它只能在运行时检查并处理错误，无法在编译阶段提供语法正确性保证。
- 其次，这种函数难以与更大的语言结构系统集成，缺乏组合性。
- 最后，随着规则增加，嵌套的条件判断会导致代码复杂度急剧上升，维护困难。

相比之下，TypeScript 的类型系统提供了一种声明式的方法，能够在编译期捕获错误，并以更优雅、更具表达力的方式描述语言规则间的关系。通过将这些变形规则提升到类型级别，我们可以构建一个能静态验证日语语法正确性的系统，这正是下文中将要展示的方法。

## 使用类型编程实现日语动词变形

有了上面这些铺垫，我们现在可以开始构建日语动词变形的类型系统了。我们先从简单的例子开始：

// 定义简化的日语动词类型typeSimpleJapaneseVerb={type:"godan"|"ichidan";stem:string;ending:string;};// 定义变形形式typeJapaneseVerbForm="辞書形"|"て形"|"た形";// 简化的日语动词变形typeConjugateSimpleJapaneseVerb<VextendsSimpleJapaneseVerb,FormextendsJapaneseVerbForm>=Formextends"辞書形"?`${V["stem"]}${V["ending"]}`:Formextends"て形"?V["type"]extends"godan"?V["ending"]extends"う"?`${V["stem"]}って`:V["ending"]extends"く"?`${V["stem"]}いて`:`${V["stem"]}${V["ending"]}`:V["type"]extends"ichidan"?`${V["stem"]}て`:`${V["stem"]}${V["ending"]}`:Formextends"た形"?V["type"]extends"godan"?V["ending"]extends"う"?`${V["stem"]}った`:V["ending"]extends"く"?`${V["stem"]}いた`:`${V["stem"]}${V["ending"]}`:V["type"]extends"ichidan"?`${V["stem"]}た`:`${V["stem"]}${V["ending"]}`:`${V["stem"]}${V["ending"]}`;// 示例typeKauVerb={type:"godan";stem:"買";ending:"う"};typeKauTeForm=ConjugateSimpleJapaneseVerb<KauVerb,"て形">;// "買って"typeKauTaForm=ConjugateSimpleJapaneseVerb<KauVerb,"た形">;// "買った"typeTaberuVerb={type:"ichidan";stem:"食べ";ending:"る"};typeTaberuTeForm=ConjugateSimpleJapaneseVerb<TaberuVerb,"て形">;// "食べて"typeTaberuTaForm=ConjugateSimpleJapaneseVerb<TaberuVerb,"た形">;// "食べた"

现在，我们可以扩展这个模型，以更精确地反映日语动词的分类和变形规则。我们将使用接口继承来表示不同类型的动词及其特性：

// 动词基础接口interfaceVerb{dictionary:string;}// 五段动词interfaceGodanVerbextendsVerb{stem:string;ending:"う"|"く"|"ぐ"|"す"|"つ"|"ぬ"|"ぶ"|"む"|"る";}// 一段动词interfaceIchidanVerbextendsVerb{stem:string;ending:"る";}// 不规则动词interfaceIrregularVerbextendsVerb{dictionary:"する"|"来る";}// 定义变形形式typeConjugationForm="て形"|"た形"|"ない形"|"辞書形"|"命令形";// 更完整的日语动词变形系统typeConjugateVerb<TextendsVerb,FormextendsConjugationForm>=TextendsGodanVerb?GodanConjugation<T,Form>:TextendsIchidanVerb?IchidanConjugation<T,Form>:TextendsIrregularVerb?IrregularConjugation<T,Form>:never;// 示例type買う=GodanVerb&{stem:"買";ending:"う"};type買うて形=ConjugateVerb<買う,"て形">;// 買ってtype買うた形=ConjugateVerb<買う,"た形">;// 買ったtype食べる=IchidanVerb&{stem:"食べ";ending:"る"};type食べるて形=ConjugateVerb<食べる,"て形">;// 食べてtype食べるた形=ConjugateVerb<食べる,"た形">;// 食べた

这种方法展示了 TypeScript 类型系统的强大表达能力。通过使用泛型、条件类型和模板字符串类型，我们可以在编译时验证和转换日语动词，就像在运行时使用函数一样。

在接下来的部分中，我们将继续使用这些基本能力来模拟更复杂的日语句型结构，如疑问句和条件句。

## 疑问句体操：为什么要演奏春日影？

![](https://picx.zhimg.com/v2-a066c9867f40fd53ab43327319b37697_r.jpg)

日语中的疑问句通常由疑问词（如なんで、なぜ、どうして）和句尾的疑问助词（如の、か）构成。观察长崎爽世女士的名言「なんで春日影やったの」，我们可以识别出其结构组成：

- なんで（为什么）- 疑问副词
- 春日影（春日影）- 句子的宾语
- やった（演奏了）- 动词「やる」的过去式形式
- の - 表示疑问的助词

这种结构在日语中非常常见，我们可以抽象出一个通用模式：[疑问词] + [主题/宾语] + [动词变形] + [疑问助词]。为了在类型系统中表示这种模式，我们需要一个专门的泛型类型InterrogativePhrase。

// 按类别分类的疑问词typeWhyInterrogative="なぜ"|"なんで"|"どうして";typeWhenInterrogative="いつ";typeWhereInterrogative="どこ";typeWhoInterrogative="だれ"|"誰";typeWhatInterrogative="何"|"なに";typeHowInterrogative="どう"|"どうして";typeWhatKindInterrogative="どんな";typeWhichInterrogative="どれ";// 疑问副词类型typeInterrogativeAdverb=|WhyInterrogative|WhenInterrogative|WhereInterrogative|WhoInterrogative|WhatInterrogative|HowInterrogative|WhatKindInterrogative|WhichInterrogative;typeInterrogativePhrase<AdvextendsInterrogativeAdverb,Subjectextendsstring,VextendsVerb,VFormextendsConjugationForm,QPextendsParticle="か"// 疑问句一般默认以か为助词，可覆写>=`${Adv}${Subject}${ConjugateVerb<V,VForm>}${QP}`;

这个泛型类型可以接收疑问副词、主题（或宾语）、动词、动词形式和疑问助词作为参数，然后将它们按照日语语法规则组合成一个完整的疑问句类型。

现在，让我们看看如何使用这个类型系统来表示「なんで春日影やったの」这句话：

// 定义动词"やる"（做/演奏）typeやる=GodanVerb&{stem:"や";ending:"る"};// 定义专有名词"春日影"type春日影=ProperNoun<"春日影">;// 构建完整的疑问句typeなんで春日影やったの=InterrogativePhrase<WhyInterrogative,// 疑问词"なんで"（为什么）春日影,// 宾语"春日影"やる,// 动词"やる""た形",// 动词以过去式形式出现"の"// 疑问助词"の">;// 类型检查示例constvalidQuestion:なんで春日影やったの="なんで春日影やったの";// "为什么要演奏春日影？"

通过这种方式，TypeScript 的类型系统不仅可以表示日语疑问句的结构，还能在编译时验证句子的语法正确性。这展示了类型系统能如何帮助我们学习和掌握日语语法规则。

## 条件句体操：辛美尔的话也会这么做的

![](https://pic2.zhimg.com/v2-d87847ec67798ed227684a66b9659a31_r.jpg)

日语中的条件句表达假设或者条件关系，有多种表达方式，如なら、たら、れば、と等。在这些条件表达中，「なら」常用于表示「如果是...的话」，通常接在名词或名词短语之后。

让我们分析芙莉莲女士的名言「ヒンメルならそうした」这个条件句：

- ヒンメル - 人名「辛美尔」，作为条件的主体
- なら - 条件助词，表示「如果是...的话」
- そう - 指示副词，表示「那样」
- した - 动词"する"（做）的过去时态

这个句子的结构可以概括为：[条件主体] + [条件助词なら] + [结果]，其中结果部分是「そうした」（那样做了）。

为了在类型系统中表示这种结构，我们需要使用前面定义的几个关键类型：

// 条件助词类型typeConditionalParticle="なら"|"たら"|"れば"|"と";// 指示词类型（需要补充定义）typeDemonstrative="こう"|"そう"|"ああ"|"どう";// 条件句结构typeConditionalPhrase<Subjectextendsstring,CPextendsConditionalParticle,Resultextendsstring>=`${Subject}${CP}${Result}`;// 指示动作组合typeDemonstrativeAction<Demoextendsstring,VextendsVerb,FextendsConjugationForm="辞書形">=`${Demo}${ConjugateVerb<V,F>}`;

现在，让我们使用这些类型来表示「ヒンメルならそうした」：

// 定义专有名词"ヒンメル"typeヒンメル=ProperNoun<"ヒンメル">;// 定义する动词typeする=IrregularVerb&{dictionary:"する"};// 创建そうした模式（そうする的过去形）typeそうした=DemonstrativeAction<Demonstrative&"そう",する,"た形">;// 创建条件句"ヒンメルならそうした"typeヒンメルならそうした=ConditionalPhrase<ヒンメル,"なら",そうした>;// 类型检查示例constproperExample:ヒンメルならそうした="ヒンメルならそうした";// "辛美尔的话也会这么做的"// const wrongExample: ヒンメルならそうした = "ヒンメルならそうする"; // 错误：动词形式不匹配

这个例子展示了如何使用类型系统精确地表示日语条件句结构，并在编译时检查句子的语法正确性。

## 组合句体操：好时代，来临啦！

![](https://picx.zhimg.com/v2-f73e635dc8bdceb6804fd0aeb59957ad_r.jpg)

日语中常见的一种表达方式是通过逗号连接多个简短的语句，形成一个富有节奏感的组合句。这些短句各自独立，但组合起来传达一个连贯的意思。让我们分析田所浩二前辈的名言「いいよ、来いよ」，它由三个部分组成：

- いいよ - 由形容词「いい」（好）和强调助词「よ」组成
- 日语逗号，用于分隔短句
- 来いよ - 由动词「来る」（来）的命令形「来い」和强调助词「よ」组成

这个句子结构可以概括为：[短句1]、[短句2]，其中每个短句都可以有不同的语法结构。

为了在类型系统中表示这种组合句结构，我们可以使用以下类型：

// 带助词的短语typePhraseWithParticle<Phraseextendsstring,PextendsParticle>=`${Phrase}${P}`;// 通过日语逗号连接的短语typeConnectedPhrases<P1extendsstring,P2extendsstring>=`${P1}、${P2}`;

而对于形容词和动词的变形，只需使用前面定义的变形系统即可：

// 定义い形容词"いい"（好的），注意它是不规则变形typeいい=IAdjective&{stem:"い";ending:"い";irregular:true};typeいいよ=PhraseWithParticle<ConjugateAdjective<いい,"基本形">,"よ">;// 定义不规则动词"来る"（来）type来る=IrregularVerb&{dictionary:"来る"};type来いよ=PhraseWithParticle<ConjugateVerb<来る,"命令形">,"よ">;// 连接两个短句 -> "いいよ、来いよ"typeいいよ来いよ=ConnectedPhrases<いいよ,来いよ>;// 类型检查示例constcorrectPhrase1:いいよ="いいよ";// "真好啊！"constcorrectPhrase2:来いよ="来いよ";// "快来吧！"constcorrectFullPhrase:いいよ来いよ="いいよ、来いよ";// "好时代，来临啦！"// const incorrectPhrase: いいよ来いよ = "いいよ、くるよ"; // 错误：动词形式不匹配

这样，我们就可以用类型系统表示出由多个独立短句组成的组合句了。

## 总结

本文通过 TypeScript 的高级类型系统探索了日语语法结构。我们从基础的动词变形开始，逐步构建了能够表示疑问句、条件句和组合句的类型系统。

TypeScript 的类型系统和日语语法之间存在着有趣的平行关系。两者都是严格的形式系统，有着明确的规则和结构。TypeScript 的条件类型、模板字符串类型和类型推断机制非常适合模拟自然语言的变形规则和组合逻辑。

传统上，这种用复杂类型系统来标注自然语言的代码编写成本极高，基本只能用来炫技。然而，现在的情况已经发生了根本性的变化——只要类型系统设计合理，LLM 已经可以为几乎任何自然语言准确地标注出 TypeScript 类型。这意味着普通人哪怕不懂 TypeScript，也能在学习语言时获得来自 LLM 的强类型提示。更有趣的是，如果你会写 TypeScript，你实际上就可以解读几乎任何一门自然语言的语法！

值得澄清的是，这个项目的范围严格限定在单向地通过 TypeScript 类型系统标注句子，而不涉及将任意字符串 parse 回语法类型——那是 LLM 更擅长的工作。所有纸质语言教材中的例句都是弱类型的，而这种方法可以为学习者提供强类型的指导。

这种借助 TypeScript 类型系统帮助学习语言的方法论，几乎可以推广到所有的自然语言。基于这一理念，我在 GitHub 上建立了 TypedGrammar 组织。目前的日语类型系统代码已经开源在[github.com/typedgrammar/typed-japanese](https://link.zhihu.com/?target=https%3A//githun.com/typedgrammar/typed-japanese)。虽然目前还只是一个技术原型，但要完善到对普通人的语言学习产生实际价值，基本是一个考验耐心的 scalable 的工作。希望后续能一边实践一边分享，与感兴趣的朋友们共同学习进步。后续希望能持续分享相关进展，欢迎感兴趣的读者关注支持，一同探索类型编程与语言学习的交叉领域。

[Typed Japanese](https://link.zhihu.com/?target=https%3A//github.com/doodlewind/typed-japanese)


---

# 按提问修改规范，如何防止编辑日志被删除？ 恶魔梨梨酱OvO

**Author:** 恶魔梨梨酱OvO  
**Bio:** 澳洲掌管停电的荒神  
**Avatar:** ![](https://picx.zhimg.com/v2-6a134944fe57fcd60c145c71c319a7a8_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/5a8c98dff1c891c91234aa3242de58bc  
**Published:** 2025.06.05 17:18:41  
**Updated:** 2025.06.05 17:29:46  
**Question:** https://www.zhihu.com/question/1893051156172887788  
**Question Created:** 2025.04.08 21:22:46  
**Question Updated:** 2025.08.31 08:25:33  
**Votes:** 1003  
**Comments:** 105  
**Type:** answer  

不付费就直接看的破解很难，但想遏制二传不可能

国内几乎没有上widevine/playready的，因为支持的设备太少

没有EME扩展情况下，常规的MSE播放器我早就把通解都告诉过大家了

MSE播放器的实现无非就是把视频比特流append到buffer里面去

js的动态类型非常方便hook，所以直接把指定buffer的append全hook了复制一份比特流，恭喜你已经通杀所有无EME网站的视频下载了

在document-head阶段hook，网页本身的脚本都还没执行呢，没有任何可靠的办法检测是否被hook了

就算有也不难过，三大浏览器内核全是开源的想怎么改都行

反正国内不可能普及EME的，谷歌微软苹果三个大手在国内全是俗手，BAT巨头全是死道友不死贫道的态度，根本不存在行业大一统联盟形成的可能性，反而为dump内容提供了先天的优势

所以只要有一个人看到了就有办法保存就能分享出来一传十十传百




还是那句老话，数字商品最大的特点就是复制成本极低

所以我的态度一直都是DRM无用，数字商品要么薄利多销要么割韭菜

你又不薄利多销又不割韭菜，在DRM上投钱根本没意义

Netflix能赚钱从来不是靠它用了widevine，widevine现在的dump随着hdcp被橄榄也早就成熟了，早就是上线不到一周就4khdr资源满天飞了

Netflix唯一能赚钱的原因就是，你每个月花那么十几块钱，不用折腾bt，不用等下载，不用折腾本地播放器，打开电视按两下遥控就能看

当你的价格低于折腾所需时间对应的中位收入后，你就一定能赚钱

因为那时候除了极少数真正的技术狂热派以外，没人愿意投入大量的时间去做这种入不敷出的事情，而且技术狂热派的钱你本来就赚不到







说难听点，虽然我本人极度厌恶嗯造用户设备资源的行为，但pcdn甚至是国内流媒体平台近些年的创新里唯一能把商业模型跑通的了

至少pcdn真的做到了避免用户投入更多（消耗的是用户现有资源）的情况下降低了成本

其他什么限制登录设备，限制投屏，还有什么超前点播之类，全都是商业模型都跑不通的，以至于让我怀疑某些产品经理是不是友商派来的卧底


---

# 如何评价 Vue.js 纪录片？ 王译锋

**Author:** 王译锋  
**Bio:** aka 雪碧 | doodlewind@github  
**Avatar:** ![](https://picx.zhimg.com/v2-c93ccdb4ad4b457e97646100ea6add94_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/c0e2a6c332e573b37d6f5387074ead98  
**Published:** 2020.06.01 01:40:49  
**Updated:** 2020.06.01 10:52:02  
**Question:** https://www.zhihu.com/question/398425577  
**Question Created:** 2020.05.30 19:34:17  
**Question Updated:** 2020.05.30 19:34:17  
**Votes:** 4994  
**Comments:** 216  
**Type:** answer  

这问题是我提的，我很惊讶于为什么这么有价值的片子在国内社区却几乎没人讨论。在我看来，这明明才是真正值得「那些口口声声一代不如一代的人」看看的作品。我们的后浪里不只是有 B 站上烧钱的富二代 UP 主和快手上梦想每天挣 300 块的打工小哥，还有 G 站上做开源的开发者们在默默地搞「世界人民大团结万岁」呢！

> 所谓 G 站，即程序员用的 GitHub Site，简称 GHS。像 Vue 就是世界顶级的 GHS 作品。

这片子本身结构挺简单的。毕竟拍纪录片嘛，大致就是依次采访几个还在世的相关人士（咦）。下面带大家过一遍剧情：

全片开始！哇新泽西大 house，大家入关后的梦想：

![](https://picx.zhimg.com/v2-c426241434da16fa5bc59e13eacc40c2_r.jpg?source=2c26e567)

主角[@尤雨溪](https://www.zhihu.com/people/cfdec6226ece879d2571fbc274372e9f)登场：

![](https://pic1.zhimg.com/v2-723b1bf8336d85e14c8ce1f105faf370_r.jpg?source=2c26e567)

这个发际线似乎正在变高的男人，开始讲起了自己接触 JavaScript 的缘由，亦即研究生在 Parsons 学 Design & Technology 的故事：

![](https://picx.zhimg.com/v2-d172ca2786af52983bd5b666e7b4f0c1_r.jpg?source=2c26e567)

不难找到片中页面的链接在这：[MFA Design and Technology](https://link.zhihu.com/?target=https%3A//www.newschool.edu/parsons/mfa-design-technology/)。这个学校属于纽约的 The New School，培养出了许多著名时尚设计师。设计品味结合上 STEM 技术，这课程设置对前端来说算是非常「科班出身」了吧。

在学生时代，尤大的作品（用 Web 技术仿 iOS 手势操作的 Clear App Demo）就引发了 Google 的注意，直接被 Google Creative Lab 点名招走了。

> 感觉这里还可以插播一段，当年阿里 HR 以「不好用」为由英明地把尤大拒了。对于 Vue 的诞生，阿里 HR 无疑作出了不可磨灭的贡献。

接下来镜头一转，带你纽约圣地巡礼，跟你说这就是哥梦想的起点：

![](https://picx.zhimg.com/v2-f6acd64189a8c6631d784e8d595c2517_r.jpg?source=2c26e567)

那么 Google Creative Lab 里头都在干啥呢？他们在做各种用技术实现大胆创意的实验。比如这个 Image Cube by Evan You：

![](https://pic1.zhimg.com/v2-6b7243915bf251582a77e959b997883b_r.jpg?source=2c26e567)

片中没有继续点开链接。我替大家体验了下，是个支持更换各面图案的魔方。这个系列的入口是这个[Chrome Cube Lab](https://link.zhihu.com/?target=https%3A//www.chrome.com/cubelab%23experiment)，Demo 玩起来像这样：

![](https://pic1.zhimg.com/v2-21375242cf5673bab480c8ea153c453f_r.jpg?source=2c26e567)

其实这玩意我也会啊！只是尤大是拿 CSS3 实现的，我是拿 WebGL 实现的。顺便还有篇教程欢迎体验：[Web 魔方模拟器的设计与实现](https://zhuanlan.zhihu.com/p/43049095)。请问 Google 还缺人吗？

有了这些铺垫，下面讲的就是 Vue 诞生的缘由了。这类工作经常需要富交互的部分。但当时的主流前端库里，Backbone 只提供了应用的骨架，无法为 View 层提供足够的支持。而 Angular 虽然提供了数据绑定能力，但侵入性较强，也不太适用于这类非常强调交互的应用。于是发明 Vue 的灵感来了，也就是把 DOM 和 JavaScript 对象同步起来这样子吧：

![](https://picx.zhimg.com/v2-44fc3e74fdaec20a7e80acafd89dc9b8_r.jpg?source=2c26e567)

然后 Vue 就被吭哧吭哧写出来啦。它的第一个 commit 是 2013 年 7 月 27 日提交的，最早想叫 Seed.js 但名字在 NPM 上被占了。下次遇到谁说自己精通 Vue 的，你就问他 Vue 第一次 commit 的哈希值是多少：

![](https://pic1.zhimg.com/v2-826dc4c2419d580df8d8a039caefe0ea_r.jpg?source=2c26e567)

这个时期的 Vue 虽然有一小部分人试用，但也纯粹是业余项目，维护起来的心态跟音乐爱好者自己出专辑类似。不过即便没有大红大紫，这也已经足够无需刷题面试换一份 Meteor 的新工作了——开源主义好，开源主义好，开源主义拿到 offer 机会高：

![](https://picx.zhimg.com/v2-10218671704bd839c84e7f1e2d685612_r.jpg?source=2c26e567)

至于离开 Google 的理由嘛，尤大表示大致就是光给 Google 高管做一些「不知道什么时候能成真」的 Demo 不够意思吧。

接下来在 Meteor，Vue 继续被当作个人兴趣项目业余维护，但到 2014 年转机出现了。著名 PHP 框架 Laravel 的作者 Taylor Otwell 某天发了条推特，大意是「React 很复杂，我在学 Vue，感觉不错」。这下有了网红带货，Vue 终于开始进入大众视野了。下面就是采访 Taylor 本人的商业互吹时间：

![](https://pica.zhimg.com/v2-a3013d9423f4dfa39071c2fcd72d1ca1_r.jpg?source=2c26e567)

Taylor 表示当时他想给新的 Laravel Spark 项目挑个前端框架，觉得当时引入那些需要构建工具的产品很麻烦，不像 Vue 直接用记事本就能开发，于是就这么愉快地决定用 Vue 了。这里他指的应该是 Vue 一直以来直接使用 HTML 模板即可在浏览器中「开箱即用」的能力。虽然一直有一些 JSX 爱好者在批评 Template，但这更是 Vue 的「progressive」渐进性设计准则的重要体现之一，对吸纳新手和业余用户群来说其实相当重要。现在 Laravel Spark 已经顺利盈利，人家当然乐意给你站台啦。

在这个阶段，Vue 也面临了一（hen）些（duo）质疑，大概就是「这框架还没 1.0 不靠谱啊，才一个人维护指不定什么时候跑路啊」之类的陈词滥调吧。对此现在就是打脸时间——「**I want to prove these guys wrong**」。爽文就是要这么写，谁还没点小脾气啊：

![](https://pica.zhimg.com/v2-d4be33c5f4fea2fb706cd64a8c6d5796_r.jpg?source=2c26e567)

> 综艺节目里此处应有泪流满面效果，再配合一曲悠扬的二胡煽情 BGM，目测马上收获一批前端迷妹。这时屏幕上再应景地浮现出一个赞助二维码……

打天下的单人秀到此就差不多了，接下来是开源的「世界人民大团结」宣传时间。镜头又一转，我们来到了德国 Mannheim：

![](https://picx.zhimg.com/v2-b8d2e8e3f47ad7c7d6e5f704e034f110_r.jpg?source=2c26e567)

在大 house 里，Vue core team 的[Thorsten Lünborg](https://link.zhihu.com/?target=https%3A//github.com/LinusBorg)开始讲起了自己和 Vue 的故事：

![](https://pic1.zhimg.com/v2-30810bc59cd2940dec202d35867e252c_r.jpg?source=2c26e567)

这故事其实也挺简单的，大意就是 Vue 1.0 出来的时候，核心团队人还很稀缺，官方论坛疏于打理。于是 Thorsten 来论坛上回答了不少问题，做了些外围的周边工作，这些都是他业余完全志愿的活动而已。就这样过了三四个月，某天一个自称 Evan 的神秘人出现了，邀请他加入了一个 Slack 群……

今天 Thorsten 已经是 Vue 生态里多个库的维护者，他在采访里表达了一个重点，**那就是框架并不只是「代码 + 文档」这么简单，更需要人的维护、支持和互动**。这也是很多人在对「开源」的理解里所忽略的。

从这个「框架是给人用的」主题出发，我们就要开始讨论 Vue 框架能成功的理由了。镜头再一转，切换到了美国中部的丹佛：

![](https://pic1.zhimg.com/v2-ded2d8147efdac82fb579d8739a515c7_r.jpg?source=2c26e567)

还是大 house，这次接受采访的是 YouTube 技术博主 Scott Tolinski：

![](https://picx.zhimg.com/v2-5ab192d7bae1d453ab3c190c823222ee_r.jpg?source=2c26e567)

Scott 是对框架「身经百战，见得多了」的老主播了，他探讨的是 Vue 在框架市场上获得成功的缘由。这个叙述简单概括说来是这样的：当时的老大哥 Angular 在从 1 到 2 的时候出现了「shocking different」级别的变化，而 React 对于习惯了 Angular 式框架的用户来说，其理念又太过于新潮。这时候，Vue 兼有更低更友好的入门门槛，又能在组件化支撑中大规模项目时表现良好。于是它就这样填补了市场空白，吸引了不少用户。

> 又是 progressive 理念的胜利啊，敲黑板。

时间线推进到这里时，Vue 已经算是颇有影响力的框架了。这时候剧情回到了对我们主角的采访上。艰难的抉择出现了：要不要全职做开源呢？

![](https://pic1.zhimg.com/v2-2f18cd77b56804eda676fe8349f79007_r.jpg?source=2c26e567)

这个决定是怎么做出的呢？尤大表示当时也没有什么别的，大概三件事：

- 建立 Patreon 账号，为支持 Vue 的开发而募款，还确实搞到钱了嘿嘿嘿。
- 向 Strikingly 的朋友申请到了赞助，这样各项加起来就匹配得上当前收入了。
- 权衡了在 Meteor 工作和开发 Vue 的利弊，结果显然是给自己干活爽啊。

好了，哥决定放弃 955，成为偶像下海出道了（咦）

这样 Vue 就进入全职维护状态了，搞的事情自然可以更多。接下就采访了一位之后加入的妹子，Sarah Drasner：

![](https://picx.zhimg.com/v2-d720d9793eda645eed2f7227b2c68224_r.jpg?source=2c26e567)

Sarah 在 CSS Tricks 上写了一系列长篇的教学文章（[Learning Vue](https://link.zhihu.com/?target=https%3A//css-tricks.com/guides/vue/)），这是她贡献 Vue 社区的契机：

![](https://pic1.zhimg.com/v2-713b73b1ef7d306f8b0a8a7bfff70c9c_r.jpg?source=2c26e567)

在此之后，她受邀加入 Vue core team，负责 Cookbook 项目，以及团队内与文档相关的会议。受到全职维护的项目，自然专业度就不一样了嘛。

但即便是 CSS Tricks 这样专业的网站，在中国也是有语言门槛的。下面开始探讨的就是 Vue 与中国的关系了：

![](https://pica.zhimg.com/v2-cac7c7bd20ef5ebf6fe9f985bda34b31_r.jpg?source=2c26e567)

接下来给了个 Vue conf 上面尤大演讲的镜头：

![](https://pica.zhimg.com/v2-5aa91073e9553678753501ecd00ca1b0_r.jpg?source=2c26e567)

然后镜头一晃拍起了台下观众。前排大佬好像很多，我只知道玩手机的那位重量级人物目测是[@贺师俊](https://www.zhihu.com/people/3ec3b166992a5a90a1083945d2490d38)老师：

![](https://picx.zhimg.com/v2-bd14da8aaab2c214cbc72f3e4b7b5e87_r.jpg?source=2c26e567)

在镜头切换之间，采访旁白里探讨起了 Vue 在中国推广时的关键因素：首先，英文技术项目的文档一般需要经过翻译，才方便在国内普及。这时候诸如 binding / reference / view model 等新的技术术语，往往会有些难以理解。但这时尤大作为母语使用者自己写的文档，在概念上就更为流畅，也更容易做一些方便理解的 rephrasing 改动：

![](https://picx.zhimg.com/v2-e9be16e154c860acbd13ab77c2aaee17_r.jpg?source=2c26e567)

然后[@知三乎四](https://www.zhihu.com/people/afbd3234a10915bb3436d34e8be0fde9)老师出场助攻，他讲起英语来还是很自信的：

![](https://pic1.zhimg.com/v2-baa312de4016c31db0b5bb6061577998_r.jpg?source=2c26e567)

勾股老师讲的是阿里接触 Vue 的渊源。一方面是他们的技术团队希望保证在中国参差不齐的网络环境下页面的可用性，一方面又希望框架能支持得了复杂业务。他偶然发现了 Vue，发现这个框架很契合他们的需求，于是邀请尤大去阿里做了个分享：

![](https://picx.zhimg.com/v2-481a4e1a1ccd0f852f14a85e677521df_r.jpg?source=2c26e567)

这里顺带讨论了一把中文社区的推广，知乎也被 cue 到了。不过 Zhihu 这个词被字幕和谐成 Chinese platform 啦（谁叫你整天和谐别人）：

![](https://picx.zhimg.com/v2-9acaa7f4350e11e1c20bd46cefdfaa3e_r.jpg?source=2c26e567)

接下来出镜的还有[@顾轶灵](https://www.zhihu.com/people/596c0a5fdd9b36cea06bac348d418824)老师：

![](https://picx.zhimg.com/v2-a5552699e90d7128a29b8b0c8b383b99_r.jpg?source=2c26e567)

以及一位低调的[@米粽粽粽](https://www.zhihu.com/people/myst729)老师：

![](https://pic1.zhimg.com/v2-d86b5f9fcbd68c6a326bfd7df9f1aded_r.jpg?source=2c26e567)

一下来了这么多国服高端玩家，大家开始用英语探讨起了国内社区对 Vue 和尤大的态度。大概这么几点：

- Vue 有非常高质量的中文文档，国内的生态和社区都相当完善。
- 很多人不是因为尤大是中国人才接触的 Vue，而是在接触 Vue 后惊讶地发现这居然是国人的作品。
- 当国人发现「我也能成为这其中的一部分」并参与进 Vue 社区的时候，这无形中强化了一种心理上与「自己人」做的项目更亲近的联系。
- 大家在国内是普遍会把尤大当「hero」的。毕竟世界范围上来自中国的顶级开发者并不多，而他确实在开源社区有着「leader」级的影响力。我们有很多的开发者，但是却很缺一位这样的「rock star」。

> 另外，这部片子的原班人马还制作了[The Rise of Open Source Communities in China](https://link.zhihu.com/?target=https%3A//www.youtube.com/watch%3Fv%3DRFjIBM0TR7U)短片，以外部视角探讨了中国的开源现状。其中尤大和[@题叶](https://www.zhihu.com/people/790dccce26904cdcd11b0fad3bac37b7)老师也有出镜，值得一看。

到这里全片就快结束了。前面出镜的各位开发者们做了一些关于开源「驱动力」的分享，大意大致是这样的：今天的 Vue 并非完全由「仁慈独裁者」控制。既有尤大一个人能 hold 得住全局，core team 内部也有更多的团队合作。这和巨头公司的「委员会设计」不同，因为你并非服务于某个商业目标，也不是在做「别人的」项目，而是有更多机会提出并注入自己的想法。这种驱动力就像追求 Source of Truth 一样，是由社区自发探索出来的。而见证它的成长，自然也相当振奋人心。创造技术历史的说到底并不是商业巨头，而是富有想法、富有创造力的人们——

The company’s not making the rules, people are.

最后就是尤大的自述了。我猜这些话按他现在知乎的人设，目测是挺不好意思自己用中文写出来的（估计这个回答他都不好意思点赞）。这里就替他 & 替大家搬运回来吧：

> 我下定决心离开了朝九晚五的岗位，做着一件基本能让我热情投入的工作，这确实挺让我感到自豪的。有时候我会看看统计数据，比如看下我们有多少用户，多少下载量之类的。但要说什么最能给我对工作的某种成就感，或者说满足感的话，那还是当我看到（自己所影响的）人的时候。尤其是在会议结束以后，很多人会来找我。比如大家经常会跟我握手，说「谢谢 Evan 你做的东西，它真的让我的生活方便了很多」这样子。这些时候我都会感觉到，这就是我做 Vue 的动力。我把它做了出来，我把它分享给了大家，希望它能让大家生活更方便。然后还真的会有人来单独找我，会有人来感谢我所做到的事情。于是整个循环就这样连通起来了。

全片终，完结撒花～

所以，大家看到了现代的「开源」是怎样运行的吗？凭着热情与创造力，世界上素昧平生的几个人可以自发地汇聚到一起，打造出举足轻重的技术产品，切实地惠及许多人。没有什么比这更加「同一个世界，同一个梦想」了。

而且，我个人之所以愿意把这部纪录片不遗余力地「搬运」过来，其实更在于它充分地展示了「**中国程序员可以做到什么**」——我们完全可以具备国际视野，在技术社区里谈笑风生。大家都能加入这个大舞台，大门是向所有人敞开的。对每位有志于「实实在在地做到点什么」并改善自身生活的同学们，我相信在这个开源加持下的计算机相关行业里，大家仍然是能找到非常多机会的。当然，在这个分化与对立日趋激烈的时代，这样的机会也已经越来越珍贵了。

今天，如果你看富二代们在翼装飞行，在帆船深潜，在豪车竞速，你羡慕吗？如果没有背景，你该怎样加入他们，成为他们，超越他们？

洗洗早点睡，祝你做个好梦。

但还是今天，如果你看开源作者们在挥洒创意，在签名售书，在演讲分享，你羡慕吗？如果没有背景，你该怎样加入他们，成为他们，超越他们？

来啊，只要能上网就行，欢迎进来社区一起玩！回头我就试试给 Vue 3.0 弄个魔方渲染器，帮它不忘初心一下。

但说到不忘初心，我更想到的是三十多年前，北京向 CERN 发出的中国第一封电子邮件。那是互联网第一次听到中国的声音。我们常说这封邮件一语成谶。但它的本意，不正是我们昂首挺胸拥抱世界的豪言壮志吗：

> Across the Great Wall we can reach every corner in the world.

那个年代还没有 HTTP，没有浏览器，没有 JavaScript。

而今天，[@尤雨溪](https://www.zhihu.com/people/cfdec6226ece879d2571fbc274372e9f)的 Vue.js 已经成为了 Web 前端技术领域世界公认的 de facto 级框架之一，在互联网技术史上留下了国人的痕迹。

知乎喜欢讲入关，那么我们到底该怎么「入关」呢？




**越过长城，走向世界吧。**


---

# 你为什么选择React而不选择Vue？ Snowflyt

**Author:** Snowflyt  
**Bio:** 24 岁，学生  
**Avatar:** ![](https://picx.zhimg.com/v2-d72d00a6b84b6e3ac5befc958ec12145_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/7b0ef8d0ab32d664a36fd98e8f377302  
**Published:** 2024.04.04 01:39:37  
**Updated:** 2024.04.04 01:41:40  
**Question:** https://www.zhihu.com/question/294210442  
**Question Created:** 2018.09.11 14:31:13  
**Question Updated:** 2018.11.01 18:55:09  
**Votes:** 397  
**Comments:** 40  
**Type:** answer  

很老的问题了，2024 年我站在自己的角度谈谈看法吧。（废话警告）

不算很久之前（大概是 2020-2021 年），当我初次在大学中接触前端领域时，周围的人都说想进大厂就学 React，并且互联网上也到处都是解析 React 函数式思想的文章——当时 React Hooks 推出才一两年，仍有大量项目基于 class component，而 Hooks 带来的更“纯粹”的“函数式编程”思想，在当时显得颇为独特与深奥。

显然，这只是前端娱乐圈现状的又一个缩影，在那会儿是“Everyone’s talking about React Hooks and Functional Programming”，前两年是“Everyone’s talking about signals”，今年又是“Everyone’s talking about Drizzle ORM, shadcn/ui, Bun, etc.”. 前端是我见过最有活力的社区，每天都热衷于造个全新的 next-gen game changing library——在许多人眼中，这看上去颇有些滑稽，我却不觉得这是什么坏事，这意味着更多人在“having fun”，而不仅仅是“coding for living”，这对社区的发展总是良性的。

话说回来。当时的 React 用户大多有种隐隐的优越感，毕竟自己在用一个更灵活和更加“功能强大”的框架，且 React 被认为“需要更好的基础才能驾驭”（事实的确如此，至少相比起 Vue 2，但究竟是不是好事就没人知道了），在做同一件事上也有非常多不同的选择，无论是路由、状态管理还是其他什么（相比之下，Vue 团队则把这些常见需求所需的库都一起开发了），挑得人眼花缭乱，UI 组件库也有远多于 Vue 和 Angular 的选择。

React 用户的“高傲”一定程度上是有依据的——这很大程度上要归功于 React 自身的**流行度**。无论你是否接受，React 实际上已经“代表”了 UI 框架（当然，“框架”这个词到底适不适合形容 React 有待考量，但咱们现在也找不到一个更好的词来形容 React、Vue、Angular、Svelte、Solid 这些东西），并且这些年里也成为了欧美前端开发的事实标准。这种“到处都是 React”的流行度是一旦接触英文前端社区就能扑面而来感受到的事情，大概习惯在 Google 上常年拿英文搜问题的人没几个会反驳。

如果你关注那些与 UI 框架相关的新轮子，它们几乎无一例外都优先考虑支持 React（像是 Tanstack 全家桶），甚至限于某个特定的 React 元框架（如 NextAuth.js，如今它成为了 Auth.js），然后它们才考虑逐渐从一个“React 特定”的库变成适用于各个 UI 框架的通用库。这种流行度的确为 React 带来了无与伦比的“**繁荣**”生态——自然也带来了它们质量参差不齐的问题，庞大的数量总是带来更难控制的质量，这并不令人意外。

React 的流行大概是许多偶然因素共同造成的，如今哪个因素发挥了最主要的作用或许已经不得而知了。自然，React 的流行也造成了组件库的多样性，一个国内几乎没什么声音但在英文社区具有相当知名度的新兴组件库 shadcn/ui 就是个 React 组件库，并且大概只考虑官方支持 React，连 Preact 也不打算支持（尽管社区显然可以并且已经开发了针对不同 UI 框架如 Svelte 和 Vue 的非官方 Port）。shadcn/ui 的大体思路是它不作为一个“真正的组件库”，而是提供一个代码生成器，帮助你把组件代码复制到你的项目里，同时绑定 Tailwind CSS. 这种生成的组件提供了高度自定义性——其实不算个很新鲜的思路，但对于快速开发项目相当好用，可以认为是 Tailwind CSS 思路上的进一步扩展，在组件的灵活性和易用性上达成了一个神奇的平衡。

谈到 shadcn/ui 其实只是想举个更具体的例子说明 React 在事实上的流行导致许多新尝试与新技术都优先从 React 开始——其实一个这样的库是很适合一开始就作为通用组件库而不是作为 React-only 组件库开发的（尽管事实上存在不少适用于其他 UI 框架的 Unofficial port）。很大程度上，React 已经成为了一种“**惯性**”，而各种库尝试兼容其他 UI 框架以变成一个“framework-agnostic”的库在某种程度上可能变成了一种“正确”或者纯粹出于造轮子的喜好——如果一个组件库（当然也包括其他非组件库）支持同时包括 React 在内的多个 UI 框架，那你最好不要期待它在其他 UI 框架上的表现，大概率是处于缺胳膊少腿并且没几个人提交 BUG 的状态——支持得好是惊喜，支持不好是常态。

这种“**React 惯性**”真的是正确的吗？前端圈向来很擅长“反思”什么已有的流行的东西并推出一个又一个 next-gen lib 成为“game changer”，React 这边也不例外。

一个批评在于 React Hooks 需要手动传入 deps 带来的**样板代码**问题——React 社区甚至开发了 ESLint 插件来提示你在 deps 中把所有依赖手动加上，可既然 ESLint 都能告诉我要在 deps 中写什么东西，为什么 React 自己不能把依赖给我自动加上？这个问题在过去似乎非常 Trivial——因为useState或其他同类东西拿到的是一个值，在运行时代码中直接跟踪一个值以实现响应性是不可能的，至少得需要个编译器才能完成这项跟踪工作。理所当然的，后来人们发觉让编译器完成这项工作不是唯一的解决方案，也可以干脆换一种写法，与其直接使用值，不如使用一个 Getter，而 Getter 自然就可以在运行时直接被跟踪以实现响应性，而不需要编译器参与，无论 Vue 的.value还是 Solid 直接返回 Getter 的做法都只是这种想法的一个实现，这被称为**Signals**——这其实也只是新瓶装旧酒，Vue 3 一开始就是这个思路，可 Signals 这个说法要到前两年才炒起来。

React 的另一个问题在于组件的**生命周期**初看起来并不那么直观——在 React 中（至少 Hooks 之后），组件 (Component) 只是一个返回组件实例 (Element) 的工厂函数，函数式组件每次渲染时都会从头到尾跑一遍以得到新元素，而不是直觉上的“函数式组件是定义组件的代码，仅在创建实例时运行一次以初始化”——事实上后来 Solid 就是这么做的。这也导致了很多新手一不留神就往组件定义里塞了一些耗时操作导致性能问题，并且也导致创建高性能 React 组件需要时刻留意耗时操作并用useMemo之类的东西将它们惰性化，这导致了更严重的样板代码问题。

还有其他同类的像需要手动memo的问题，也一直以来被诟病为“React 创造的问题”。也有一些较小的点，比如传递ref的复杂性。有时人们会半开玩笑地说“React 先故意把框架做得很烂，然后引入一些小改进解决这些本就不该存在的问题让大家感觉 React 团队又实现了什么巨大进步”——说实话我越来越觉得真是这么回事。

抛开写法上的缺陷，再谈谈一个避不开的的问题——**生态**。React 显然是前端 UI 框架中生态最“繁荣”的一个，这一方面要归功于 React 自身的流行度，另一方面则要归功于 React 团队仅做核心而不参与周边生态开发的做法。这导致 React 生态中仅状态管理和路由两块就有数不清的社区实现，状态管理更是难绷到让 Redux 这么个完全不好用的库统治了许多年——直到以一种不能更简单的方式实现的 Zustand 流行起来大家才发现原来 Redux 这么难用不是因为 React 状态管理本就复杂（在很长一段时间以来这还是个具备统治力的观点），而只是因为 Redux 过度封装把事情搞得太过复杂。

自然的，也产生了许多观点为 React 辩护，以解释“为什么 React 这么烂大公司还是选择它”。我记得前几年有个说法被很多人提及——大公司需要对页面每一次渲染细粒度控制，并且宁愿投入更多人力在这种“开手动档”的事情上，而不是依赖于框架自动管理渲染时机，React 就提供了这种灵活性。这可能（值得怀疑地）部分解释了大公司们采用 React 的原因，但没有解释为什么如今数之不清的小公司仍优先选择 React.

在我的观点中这更多还是源于一种**历史惯性**，并且 React 还没有比其他 UI 框架“明显糟糕”到不能接受的程度，因此大多数公司没有换掉 React 想法，而这造就了 React 生态的继续繁荣——和国内公司习惯于跟着阿里用 MyBatis 比较类似，大公司用什么我就跟着用，只是因为前面的人帮我把坑趟过了，有比较齐全的周边配套代码和大厂退下来熟悉这套技术的员工，小公司没必要选择自己用国内环境里不常用的生态，也是图一个安稳。

在开头，我反复强调了 React 生态有多繁荣，似乎在吹 React，刚才又批评了 React 的一些问题，似乎把它贬得一无是处——其实我只是相对客观地评论着 React，也许带了些主观偏见，但大体应当并不偏激。那么 React 难道没有优点吗？显然也不是的。

不可否认的是，React 的确为前端带来了一些“新”的东西。在 Hooks 之前，“函数式编程”这个如今被说烂了的概念在大多数前端人眼里还只是个“可望而不可及”的东西，它从象牙塔中带来了一些似乎有用的东西，但若你想从一些“先行者”那里了解些更多的东西，则会被他们张口就是 Monad 的热情劝退——或许他们也不是想故意把别人劝退，只是已经习惯了这些外人看来可能颇为晦涩的概念。React 以一种在现在许多人看来颇有些半吊子的方式，将函数式编程的一些基本概念以颇有些炒作的形式带到了大众的眼中（得益于 React 自身的流行度，不管官方是不是有意炒作，React 发布任何一个新功能后总是会看起来像是炒作了一番）——许多人第一次认识到，原来在代码里几乎全用const和只用 Immutable 对象也可以很好地开发应用，区分副作用也可以很好地控制难以预测事件的发生。这些对“函数式编程”的普及或许太过浅显到以至于让许多人觉得“不达本质”而不屑一顾，但至少起到了很不错的引导作用，让许多人第一次知道还存在另一种写代码的方式。

React 这个每次渲染都跑一遍组件定义函数的做法也不是只有坏处。这其实很大程度上让 Hooks 的封装变得简单和透明了，除了useState那几个有限的内置 Hooks，自己封装 Hooks 其实没太多额外的黑魔法在里头，就只是简单的把一段代码替换成一个函数以方便复用，仅此而已。这也带来了其他许多事情的简单性，如子组件只需通过一个没有任何 Magic 的.children就可以直接传递，而 Solid 和 Vue 等都需要额外的手段（childrenhelper function 或<slot>）来高效处理子组件的传递问题。React 的props也不存在解构丢失响应性的问题——每次渲染时组件都会重跑一遍，会有新的不同的值传进来。某种意义上，React 的这个看似别扭的做法维持了一种统一的简单性和一致性，使框架没有在背后做太多难以预测的“魔法”——这又回到了那个老生常谈的问题，框架在背后做了太多工作到底是简化了用户的心智负担还是实质上反而加重了心智负担？框架要做到什么程度才能达到这种心智负担的平衡？这就是个没有答案的见仁见智的问题了。

然后要谈到 React 的另一个特点——JSX，或者说特定于 React 的 JSX. React 在 JSX 上的做法基本就是直接将其一比一与运行时代码替换，编译器在其中只做了一些简单的工作——相比之下，Vue、Svelte 等基于模板方案的 UI 框架则大量依赖编译器实现较复杂的转换工作，尤其是在处理响应性上，而 Solid 尽管使用了 JSX，其编译器仍旧在背后做了不少工作，而不是像 React JSX 基本上只做代码替换。React 这种处理 JSX 的方案其实天生使其和 TS 有很不错的相性，并且带来了 React 最被广泛认同的特性——灵活性。

如果你用过一些 React 组件库，会发现其中不少地方允许你直接传入一个 React Element（也就是一个 JSX 元素）作为参数，例如典型的传递<XxxIcon />. 在模板语法下这则是个不那么容易的事情，因此我们通常在 Vue 中传递组件 (Component) 而非元素 (Element)。对于 React 中的<Button icon={<XxxIcon />}>在 Vue 中的同类写法常常是<Button :icon="XxxIcon">，其中传入组件而非元素——假如这里我们需要传入<Icon icon="carbon:home" />这样的元素，Vue 这边就要复杂一些，变成了<Button :icon="defineComponent({ render: () => h(Icon, { icon: 'carbon:home' }) })">，为了避免这种难绷的语法，在大多数地方其实我们会使用 Slot 以及 Named slot 替代，基于模板的思路大多有这个问题。除此之外，模板也使 Vue 需要引入<component is>来解决在 JSX 不存在的问题。当然，这些都不是 Vue 的问题，只是模板的局限性，Vue 用 JSX 一样可以按我说的 React 组件库的那种思路写，Element Plus 的一些新组件就是这个思路。

模板显然也有自己的优点，很难说 JSX 和模板谁更优越。模板允许框架塞进更多自己提供的语法糖，在很大程度上也能使代码变得更加简洁，同时也使编译器优化变得更容易——对于组件库开发等场景来说，它可能稍微少了点灵活性，但对于应用开发已经足够优秀，并没有比 JSX 缺少什么。就我个人而言，我是更倾向于 JSX 的语法的，更方便在一个文件里封装多个小组件，但我对模板也没什么恶感。

还有个对多数人可能没什么感知，但对我而言感知明显的模板的问题——对 TS 的支持问题。平心而论，Vue 3.4 之后对 TS 基本上已经达到了完全的支持，但在一些边界的类型体操推导上仍存在一些问题，而且估摸着也很难在未来的版本中去支持，比如defineProps对条件类型的支持问题。 我在 VSCode 使用 Volar（现在叫 Vue - Official）插件时也经常遇到 TS 抽风问题，并且 ESLint 在 Vue SFC 中对 TS 的解析常常出问题，如开启@typescript-eslint/recommended-type-check后经常在 SFC 中给我解析出any，但 Volar 却能正常提示类型，我暂时没寻思出来这是 vue-eslint-parser 本来就有的问题还是我哪边配置不对，或者是 Volar 的问题。并且我始终不知道该如何让 Vue 在模板里给未知 tag 的 element 报错而不是推导为 unknown——vue-eslint-plugin 有这个选项，但不支持全局组件，对我来说确实没法用。

基于模板的 UI 框架大多有这个缺点——对于开发来说，它们对 TS 的支持通常限于大致能用而不太考虑优先支持复杂类型体操的解析。Vue 在 TS 支持方面其实已经做得很不错了，Svelte 用过几次，那边对 TS 的支持可以说就完全是“凑合能用”水平了。而 JSX 由于 TS 的内置支持则在类型安全上具有更好的表现，这个优点也是客观存在的。

说了这么多 React，并且似乎有些跑偏了，再回头谈谈 Vue. 要谈 Vue，显然要从 Vue 2 的**Options API**谈起。我至今仍觉得 Options API 有不少可取之处，最大的一点就是其极低的入门门槛和极其直观的语法——对于简单的业务页面开发，Options API 很少需要担心解构和丢失响应性的问题，一切都绑定在this上，默认更新this上的数据就能看到响应性的变化，心智负担其实是很低的。当然，this经常因其迷惑特性而被诟病，以至于现在新库开发都不那么倾向于使用 class，但这不是个很难解决的问题，只需要把原先{ ... }形式的组件定义改成component((self) => ({ ... }))就可以解决了——以一个作为参数传入的self替代this.

Options API 对 TS 其实也有不错的兼容性，即使使用 Vue 2.6，也可以安装@vue/composition-api在组件定义外边包上defineComponent以获得this上的类型提示。同时 Options API 也提供了一个最低限度的约束，data、Lifecycle、computed、methods等必须分门别类放好写在一起，不允许杂七杂八东写一块西写一块——这种强制将可能在功能上相关的data、computed、methods拆分开来的做法可能在老手看来不那么理想，但至少强硬地避免新手将功能和逻辑上都毫无关联的部分胡乱摆放在一起，而这很大程度上也是 React 新手的普遍问题。我很相信 Options API 这些或许是“无意之间”保证代码维持了最低限度整洁性（易读性）和易上手特性（心智负担较低）的特点使 Vue 在 Vue 2 时代于国内被大量使用，并且直到今天大量国内项目还是没有要升级到 Vue 3 的意思，甚至新项目仍用 Vue 2——平心而论，Vue 3 确实不会给这其中很多新项目带来好处，自然也没有升级的必要。

Options API 到底有没有问题，Composition API 是否真的优于 Options API，推出 Vue 3 又到底是不是个正确的决定已经很难说个对错了。总之某一天 Vue 3 确实推出了，站在维护者的角度来说这很容易理解——大多数爱好造轮子的程序员看到多年前的屎山代码总是想做一次彻底的推倒重构的，而甚至还兼容着 IE 并采用了许多老 JS 特性的 Vue 2 在可维护性上显然已经遇到了不小的困难，其设计时未考虑到 TS 也使后续要做不少[可能难度不大但工作量很大的类型体操](https://link.zhihu.com/?target=https%3A//github.com/vuejs/core/blob/44b95276f5c086e1d88fa3c686a5f39eb5bb7821/packages/runtime-core/src/componentPublicInstance.ts%23L132-L165)来为 Options API 提供类型支持。既然都要推倒重来了，为什么不引入点新的东西？React Hooks 那一套东西不一定说真比 Options API 好，但对 TS 肯定是更友好的，并且看起来没比 Options API 有明显弱点，也能更灵活地组织代码——Composition API 就这么诞生了。

自 Vue 3 以来，Composition API 至少一定程度上带来了**社区的繁荣**——相比起 Mixin，Hooks 具有更简洁灵活的语法，并且在更容易避免冲突覆盖问题，这至少**提高了库开发者的体验**。而 vue-use 这样的项目要是没有 Composition API 也很难出现——Vue 2 中在功能上的扩展更多依赖于 Global methods，这种在全局对象上绑定太多东西的做法显然不够理想。在 Vue 2 生态中显然是很难出现一个质量和规模类似于 vue-use 的代码库的。

有一个流行许久的观点，即 Composition API 更适合大型项目，而 Options API 在中小型项目上可能有一定优势（Vue 3 的文档里也这么说，当然他们到底是不是真这么觉得就不得而知了）。这其实是个比较值得怀疑的论点，毕竟 Composition API 其实也很适合小项目，而 Vue 2 时期使用 Options API 构建的大项目也比比皆是。

Composition API 在提高了灵活性的同时没有很好保证代码质量的下限，因此引起了一些诟病，但对于习惯良好的程序员来说即使在小项目上可能也比起 Options API 编写更直观和易读的代码——在 Composition API 里可以随手拆个 Hook 出来，在 Options API 里难道会有人习惯于随手拆个 Mixin 吗？

可从另一个角度来说，Composition API 带来的能够更好按业务逻辑来组织代码的灵活性真的那么必要吗？如果组件粒度拆得够细，Options API 按功能分组的思路似乎也不坏，而 Composition API 提供的灵活性反而让人有些无所适从。而 Composition API 能随手拆个 Hook 出来的能力似乎也不那么有吸引力，我相信有许多人在真正写业务时是不经常拆 Hook 出来的，但只要代码规整地分块摆在一起也并不影响可维护性——在这种情况下，少数几个 Mixin 是否也已经够用？Mixin 得继承树要在多复杂的应用中才会看到可维护性的显著下降？

以前看过 Ruby on Rails 的纪录片，其中有个观点让我印象深刻——当一个技术流行起来后，人们总是开始讨论它能不能**Scale**，又能 Scale 到何种程度，但大多数人一辈子也碰不到这项技术 Scale 的瓶颈，并且在真遇到 Scale 问题之前采用这项技术的小公司就已经 IPO 了。这里也同样如此，无论说是“Vue 相比于 React 更不适合大项目”还是说“Options API 相比于 Composition API 更不适合大项目”，都近乎源于一种其实没太大根据的刻板印象。

其实 Options API 在“人体工学”上是提供了比较不错的“幸福度”的——在我的观点里一是减少导入，二是敲this.就可以获得当前组件内全部关联数据和方法补全。说真的，“能提供更多补全可能”的设计在人体工程学上其实很重要，至少我是宁愿敲更多字也希望获得更好的补全体验的——而且 Vue 3 中ref的.value相比起this还没让人少敲字，这其实是引起了不少人的诟病的。

——好吧，对 Options API 和 Composition API 的偏题讨论就到此为止，再讨论下去大概也是得不出什么结果的。不过至少从现状来看，大家对 Vue 3 的接受度还不错，生态也在渐渐繁荣。在我的角度来看，这要很大程度归功于 Nuxt——Nuxt 目前对于复杂应用在成熟度上比起 Next.js 还有不少问题，但对于相对静态的公司/项目主页、发布页等应该算是我用过的元框架里 DX 最好的选择了。其实目前有不少大网站都是由 Nuxt 构建的，大家有兴趣可以浏览器装个 Vue Devtools 看下。

然后谈谈组件库的问题。国内和国外的组件库设计思路其实是很不一样的，国内的组件库通常是大而全，将你用得上的用不上的各种功能都封装进去，用起来就会比较省事，会发觉似乎什么场景都能直接用组件库提供的功能应付得来；国外的组件库相对来说更鼓励你造轮子，倾向于只封装基本组件并保留它们的灵活性，以便你自己进一步将它们更好地组成新的组件。其实我觉得国内的这个思路是要优于国外这些组件库的，只是由于审美不同，欧美更倾向于选用符合 Material 风格的缺胳膊少腿组件库，可能压根就没体验过使用国内这些大而全组件库开发的快乐感……例如国内组件库内置 Searchable MultiSelect 可以说就是标配，但诡异的是欧美常用的组件库里内置这东西的据我观察还还真不多。

如今看来，React 和 Vue 其实都有不少还不错的组件库选择，倒也很难说 Vue 这边的组件库生态不行了。如果倾向于大而全，React 选 AntD，Vue 选 Element Plus 应该没什么异议。其他的或许我可以举几个符合我个人审美和用起来不错的组件库说说，React 这边一个是 MUI，这组件库说实话设计得不咋好用但在欧美基本上有着和国内 AntD 类似的流行度，另外一些是 Chakra、Mantine 和近期的 shadcn/ui. Vue 这边，我个人除开 Element Plus 会比较倾向于 Naive UI 或 PrimeVue，另外 Material Design 的 Vue 组件库也有不少，但我不太喜欢这个设计所以就不提了。原题目描述中 Vue 组件库选择太少的问题大概已经不太明显了，并且现在基于 Tailwind CSS 的各种定制方案也挺流行的，手搓组件也没那么麻烦了，现在还有了 shadcn/ui 在各种框架上的版本，复制粘贴组件代码也并不麻烦。

回归问题本身吧。假如现在叫我做一个新项目，我大概还是会出于惯性选择 React——Vue 并没有什么不好，但我在 React 上着实有一些历史代码积累，对这边的生态也相对熟悉一些，并且用 React 整花活和对 TS 的兼容性上都要比 Vue 略微好上一些。但假如是做团队项目，出于对团队中其他人技术栈熟悉程度的考虑，我大概还是更倾向于 Vue——如果合作者都只会 Vue，我也不好叫人来现学 React.

说起来，其实选择 React 很多时候成了一种“潜意识”的做法——当你不管看到什么新轮子都拿如何在一个 React 应用中使用它作为示例，其实自然而然会遵照这种惯例，在没有特别理由的情况下默认选择 React——但仔细想想，又好像确实没有一定要选 React 的理由。并且尽管 React 在许多方面受到批评，但它本身没有比起其他 UI 框架有什么根本性的劣势，自然也没什么换掉它的理由——就像开头就反复提及的，这种庞大的生态和历史惯性大概已经决定了 React 在今日以及未来难以撼动的地位了，无论你对此是否抱有反感。很大程度上，这也是我习惯于使用 React 的理由。

至于其他 UI 框架，说真的 Svelte 和 Solid 那些还很不成熟，能用的组件库很少，基本上只有 Flowbite 这种基于 Tailwind CSS 的“跨框架”组件库兜底，在细致程度和易用性上都很难与专门为某一框架开发的组件库相提并论。除非只是做做那种偏海报展示的项目或者你真有足够耐心去手搓组件库，否则我是不建议在真是项目中上这些新兴框架的。嗯，还有被遗忘的 Angular——这我是真不熟，没法评价。

说来说去，最后还是写成了没啥参考价值的随感吐槽，那就到此为止吧。


---

# 为什么很多以往活跃的前端开发博主都不怎么说话了？ i5ting

**Author:** i5ting  
**Bio:** 狼叔，《浪说播客》主理人，AI，avp新人，Nodejs老人  
**Avatar:** ![](https://picx.zhimg.com/v2-c6c895d0882a2a8a9ff71ff23964911a_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/c4c5c50b85f217e88e181b19e8afb624  
**Published:** 2025.03.14 11:32:39  
**Updated:** 2025.03.19 10:37:18  
**Question:** https://www.zhihu.com/question/14593370597  
**Question Created:** 2025.03.10 16:41:23  
**Question Updated:** 2025.03.10 16:41:23  
**Votes:** 837  
**Comments:** 102  
**Type:** answer  

你举几个例子。我好说

## 高管派

代表人物：玉伯

他负责蚂蚁体验技术部之后，基本上不怎么出来了。早期seajs，kissy时代也是非常活跃的。现在偶尔能见到是因为他在创业，youmind.ai，大家也可以支持一下

## RIP斯人已逝

代表人物：司徒正美




## 功成名就大厂隐居派

代表人物，朴灵。

阿里Node.js最早的三驾马车之一（另外2个苏千，死马）。在infoq连载深入浅出，并最终结集为九浅一深Node.js，为一时之冠。也曾和阮一峰等因为Eventloop等在微博上大吵，当时很多知名前端都卷入其中，名声大噪。在2015年之后基本上就不怎么出面了，所有大会，媒体邀约基本上都不参加了。

大概是他升了p8左右就不关注前端领域，专注业务，专心带娃，偶尔写一点开源项目，之前听说在阿里云负责api多端生成。我在余杭区贵州黄牛肉店还碰到过他。

其代表作AliNode，在当时通过fork代码，然后打桩的方式。是一个很hardcore的事儿。培养了张秋怡，黄一君等实力派。一君的easymonitor，基于addon去做，更轻量。

可以说朴灵是我最羡慕的人生了。

## 修仙派

代表人物：justjavac

justjavac在成为deno继父之后，就不怎么写文章和参与公开演讲了。在天津呆的很爽，据说还上了电视台。

![](https://picx.zhimg.com/v2-7c89912cf795d5ae82e761249dfc6815_r.jpg?source=2c26e567)

## 转行派

代表人物：张鑫旭

他的css很牛大家都知道，其实他js也非常了得，年前和他做播客，他对Node.js竟然也十分精通。现在主要是工作，写文章，钓鱼。

写文章控制在1周1篇左右。

钓鱼在抖音有一个万粉大号，好像叫最会钓鱼的程序员




## 大课润派

代表人物：winter、花果山大圣

从大厂到讲课，到润。




## 老当益壮派

代表人物：Hax、天猪

hax现在也在卷AI，据说做了1年半了。

猪哥从蚂蚁出来，就加入字节，现在在负责Trae，那是相当的卷啊。把老雷，死月都卷的不出来了。

## 具有钱而退圈派

代表人物：郭宇

赶上2013-2020抖音疯狂时代，28岁退休。现在日本做web3




## 新生代




范文杰，润到sg，在字节flow，目前在和我做播客

神三元小朋友，字节搞ai相关去了

卡颂从字节出去，天天想着卖课呢，现在想弄ai相关这波




以上来自网友提问




——-










![](https://picx.zhimg.com/50/v2-d142701f61bac4e4c92fa63982bf6128_720w.jpg?source=2c26e567)


---

# 怎样看待 AI 三小时做的小游戏 9 天赚了 12 万？会对游戏行业产生怎样的影响？ 桔了个仔

**Author:** 桔了个仔  
**Bio:** 大模型 | 人工智能 | 数据科学 | 机器学习  
**Avatar:** ![](https://pic1.zhimg.com/v2-9f4e5c9c9e3fda1b26496f2fbb2a0578_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/cc759c5d7c383aa95e7633f06bcf6d82  
**Published:** 2025.03.04 13:18:34  
**Updated:** 2025.03.04 14:06:12  
**Question:** https://www.zhihu.com/question/14003476657  
**Question Created:** 2025.03.04 10:09:51  
**Question Updated:** 2025.03.04 10:09:51  
**Votes:** 731  
**Comments:** 42  
**Type:** answer  

这对游戏行业产生怎样的影响？其实可以说没啥太大影响，AI只是加速了游戏开发过程。

我认为，最大的影响，是来自开发模式的转变。有能力有名气的开发者，可以Build in Public，通过AI的帮助，能快速试错，从而迭代出能赚钱的产品。

**Build in Public是AI时代和自媒体时代融合后的一种开发模式。**

所谓Build in public，即“公开建构”，是一种新兴的产品开发模式，指公司或独立开发者有意识地选择公开分享公司或产品创建的整个过程，通过社交媒体、在线社区等渠道，不断分享创建过程中的见解、想法、进展等，让公众能够看到从项目最初概念到产品迭代等各个阶段的情况。

要走这种开发模式，你需要

- 是网红，有一定的关注量。不然你开发的东西没啥人知道。
- 有较强的开发能力，最好是技术出身。有的人问，我是产品经理，有AI加持，我觉得我也能走这条路，其实不然，毕竟这是在构建产品，而不是做一个demo。AI只是加速开发，并不能完全替代开发，更何况，除了开发，还有售后技术支持，服务器搭建等很多繁琐的事情。
- 随时随地带着电脑。毕竟你卖了服务，就要提供技术支持。

这位AI 三小时做的小游戏 9 天赚了 12 万的老哥，本身就是一个KOL，推特上有60多万粉丝。

![](https://picx.zhimg.com/v2-61fe01f4464f7b2ce08b30a94163e295_r.jpg?source=2c26e567)

他会公布自己构建产品的过程，以及每个产品收入。

正如他主页说的，他做了70多个产品，只有4个赚钱且在增长，也就是说大概只有5%的成功率。

![](https://pica.zhimg.com/v2-a7bf4166f440d87d7776b3c76768d9c0_r.jpg?source=2c26e567)

当然，由于AI加持，他做这些产品的时间成本大大降低。

他这个飞行模拟器游戏之所以爆火，是因为被银河系著名网上冲浪大师——马斯克刷到了，给他贡献了900多万的曝光。

![](https://pic1.zhimg.com/v2-5d72ad99ccd1d58a5676d4e6259aff6a_r.jpg?source=2c26e567)

而且，除了卖金子，他也卖铲子，他把自己的独立开发经验打包成电子书售卖，70刀的价格。这才是能保证挣钱的方法，毕竟不需要服务器支出。这对于他这种粉丝级别的KOL来说，还是能赚到钱的。当然，这里没说他割韭菜的意思，毕竟他是真有本事。

![](https://picx.zhimg.com/v2-61c1d7855a776ec1de7316ae0a191a6d_r.jpg?source=2c26e567)




可以看到，Build in Public模式，对于p人来说简直就天堂。但工作强度并不比上班低，只是Build in Public更加好玩，反馈更加及时。那么普通人能不能复刻他的成功？能是能，但要很长时间，而且要把战场放在海外，在国内应用要备案，游戏要版号，这对于需要极速迭代试错的独立开发者而言，很难在国内的平台践行Build in Public。

如果你真要玩build in public，那么我建议你需要经营自己的推特，多参与到开源社区，积累技术名气。经营小红书微博知乎什么的没经营推特重要，毕竟你要做出海的生意。国内比较有名气的独立开发者，例如idoubi，都是做出海的。但目前国内也没有像题中那个博主这么赚钱的，所以，Build in Public虽然看起来很诱人，但其实并不适合多数人，真要玩Build in Public的话，先兼职试试先。


---

# 游戏开发：独立游戏与个人开发者 Feishiko

**Author:** Feishiko  
**Bio:** 兴趣泛  
**Avatar:** ![](https://pic1.zhimg.com/v2-f6b104b09c5ab6b798fa5a08ca98ed32_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/1ca9e43da9aae26a9283dc39b19fe8eb  
**Published:**   
**Updated:**   
**Question:**   
**Question Created:**   
**Question Updated:**   
**Votes:** 396  
**Comments:** 28  
**Type:** article  

看到今年CUSGA（中国大学生游戏开发大赛）有一个解谜游戏画面很不错，谜题设计也很优秀，之后发现是一个人做的。




![](https://pic3.zhimg.com/v2-0cfd097d0d61da1b41c7599eee014c12_r.jpg)

![](https://pica.zhimg.com/v2-78cee38073e3853ffd95a012b02c3cbe_r.jpg)




比起其他人的游戏，他的游戏更有种统一的美术风格。而且，对于小众类型逻辑解谜而言，并不好找到同好一起来制作。

游戏需要分裂自身，去构建一个刚好能构成两个物体达成结果检测。开始的关卡有一定的引导属性，之后开始出现一些比较线性代数的概念如旋转与缩放，再者出现从一侧进去从反方向出来的机制之后，格子的奇偶性也成了Puzzle Solving的关键。

由于是个Grid-Based加上Turn-Based，对于空间的逻辑能力会非常敏感，需要恰好构建一个刚好的结构去适应结果。游戏整体难度并不轻度，因为卡关了所以没全打完。

同为学生的独立游戏开发者鸵鸟居士对他的评价：

> 这种级别的自洽和一体性，不是solo，不是左脑跟右脑配合，是做不出来的。机制谜题关卡，配色场景构图，浑然一体。如果不是一个人做的，一定会有撕裂感。

如果你对这种Grid-Based Turn-Based的逻辑解谜感兴趣可以尝试一下，Parallel的游戏链接：[https://xexlax.itch.io/parallel](https://link.zhihu.com/?target=https%3A//xexlax.itch.io/parallel)

这种统一的风格除了xexlax的Parallel，还有不少游戏在这个范畴内。




![](https://pic2.zhimg.com/v2-875b5d35c8e206ded9c1d8c5514455ef_r.jpg)







![](https://pic3.zhimg.com/v2-a8d3b9fedba0028aea4ac2c4f0fc7334_r.jpg)




这是独立游戏开发者流贾君的新游戏，超级滑刃战士，目前游戏还没开始发售，不过已经有了Steam界面。

流贾君是一位成熟的独立游戏开发者，而且也是一位个人开发者，它的美术比起很多个人开发者要好，而且它的**游戏画面也做到了统一性**。

超级滑刃战士Steam链接：[https://store.steampowered.com/app/2847740/Super_Drift_Blade/](https://link.zhihu.com/?target=https%3A//store.steampowered.com/app/2847740/Super_Drift_Blade/)

当然不止超级滑刃战士，他过去的很多游戏都保持了一贯的风格：

《窗户之外》




![](https://pic4.zhimg.com/v2-ce246bf371e355373283be6801a540ff_r.jpg)







![](https://pica.zhimg.com/v2-97102d5ee52f66e042cc963ac8d082fc_r.jpg)




《平衡100》




![](https://pic3.zhimg.com/v2-817e5bfceb9f874f4c5fcdc435953f96_r.jpg)







![](https://pica.zhimg.com/v2-c3eb918818d046d42ee0b22e3d7f18dc_r.jpg)




对于美术好的游戏看过了，不妨现在再看一些美术“差”的游戏

《A=B》




![](https://pic2.zhimg.com/v2-0b70db1d5a1cea002c8cd7431c2f1be5_r.jpg)




《Understand顿悟》




![](https://pica.zhimg.com/v2-06cf5fdb9d251faf6952a194e5533e2c_r.jpg)




《蜡笔物理学》




![](https://picx.zhimg.com/v2-789cb7f35d7f54315f36cc1eb4a0f683_r.jpg)




这些游戏也都是一个人开发的，比起美术更重视玩法的逻辑解谜领域开发者，Artless Games。

它的游戏或许没有精致的美术，但是它的游戏能引来无数解谜游戏玩家的称赞，因为它是切实去做好逻辑解谜这个类型的。

或许这无法被常人所理解，但是这个世界上永远有一些小众的文化群体，小众的社群，而Artless的用户群体就是它们。不一定要做热，不一定要趋于大众，但一定要在小范围内做好。这是**游戏风格的统一性**。

拿《A=B》举例，虽然界面比起Zachtronics的《SHENZHEN I/O》甚至《TIS-100》简陋，但是你可以在上面的窗口去测试用例，代码编辑器有基本的撤销功能，一个问题有三个档案供选择和调试，调节字体大小，步进和快速运行。这些在玩法上做到了尽可能的人性化。

A=B Steam链接：[https://store.steampowered.com/app/1720850/AB/](https://link.zhihu.com/?target=https%3A//store.steampowered.com/app/1720850/AB/)

国内的开发者聊完了，接下来聊点国外的开发者。

《SpelunkyRL》




![](https://pic2.zhimg.com/v2-dd6cc4f37c4822b95828b22c0ca7e001_r.jpg)




《Monster Trainer RL》




![](https://pica.zhimg.com/v2-6c65bbb1b7d06482f6a0fa11012b70a0_r.jpg)




《CvRL2: The Lady of Berkeley》




![](https://picx.zhimg.com/v2-3cb20ddc87d6df1b0aa92ffa7cb39df7_r.jpg)




《Emerald Woods》




![](https://picx.zhimg.com/v2-39c8f6d6315b87e86f9a5f1ea284474d_r.jpg)




这是Roguebasin的站长，忠于传统Roguelike游戏开发者，Slashie，他的游戏代码部分都是自己写的，也是自己策划的，但音乐还有美术会寻求外部力量。

他的游戏绝大部分都是Roguelike，对于现在的很多只玩Hades，Slay the Spire，Binding of Isaac等Roguelite还无法区分like和lite的年轻人来说，Roguelike是个很难接受的类型。

作为一个有20余年的游戏开发者和Roguelike玩家，Slashie的游戏阅历丰富至极。因此他的游戏也深受Roguelike玩家的喜爱。

Slashie的个人网站链接：[https://slashie.net/](https://link.zhihu.com/?target=https%3A//slashie.net/)

Platformer也是个很有趣的类型

《Love》




![](https://pic2.zhimg.com/v2-0f43af92fdf7628b23bdea6623b0f973_r.jpg)




《Nymph's Tower》




![](https://pic4.zhimg.com/v2-c1b91801b9de989e956742ce503b4f93_r.jpg)




Brlka是一个专注于平台跳跃游戏类型的开发者，虽然笔者喜欢精确平台，但他的游戏也非常对胃口。

Platformer也算是个比较小众的类型，特别是精确平台，玩家需要一遍又一遍的尝试，一般难度上会对玩家素质有一定要求。这种负面反馈大于正面反馈的游戏体验放到2024年自然是不会吃香的，当然Thinky Puzzle即逻辑解谜和传统Roguelike也是一样的。

Love就是这样的一个精确平台游戏，没有华丽的画面，只有朴素的一次又一次的尝试。当你成功攻克目前的关卡到达下一个存档点的这种喜悦，是难以描述的。这也让我想起很多I wanna fangame，特别是Gimmick跳刺和综合。

Brlka的itch链接：[https://brlka.itch.io/](https://link.zhihu.com/?target=https%3A//brlka.itch.io/)

在文章的最后，我认为不仅仅是作为一个独立游戏开发者，更是应该作为一个玩家。游戏开发者来源于玩家，应该更多的去融入自己喜欢的社区，去找到自己游戏的受众。

写到最后，发现自己不但写了美术风格上的统一，还写了游戏内容的统一。

作为个人独立游戏开发者，我们有自己的情感，我们有自己想去表达的内容，我们能够分辨出一个完整的物体。这是团队开发难以做到的，特别是小众类型。

玩的游戏不一样，难免会有分歧。就算同是平台跳跃，玩蔚蓝的和玩马里奥的也会有很多分歧。

如果你有一个能和你一起共享喜怒哀乐的团队，大家能够组合成一个整体完成各自的分工，请珍惜他们，这是难能可贵的。


---

# Vue 和 React 的优点分别是什么？ 尤雨溪

**Author:** 尤雨溪  
**Bio:** 开源软件开发者  
**Avatar:** ![](https://pic1.zhimg.com/7be980a0f_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/cfdec6226ece879d2571fbc274372e9f  
**Published:** 2018.12.04 14:25:36  
**Updated:** 2018.12.04 14:25:36  
**Question:** https://www.zhihu.com/question/301860721  
**Question Created:** 2018.11.09 17:01:13  
**Question Updated:** 2019.01.07 12:48:02  
**Votes:** 9616  
**Comments:** 407  
**Type:** answer  

这个问题下面的很多回答太偏激了，其实我淡出知乎就是因为这类破事... 但是作为作者还是认真地说一说吧，希望能以后别再有这种问题了。

这里我可以大方地承认，如果多年以后要论历史地位，React 肯定是高于 Vue 的。事实上，我作为一个开发者，也是由衷地佩服 Jordan Walke, Sebastian Markbage 这样的，能从开发模式层面上提出突破性的新方向的人。

React 从一开始的定位就是提出 UI 开发的新思路。当年 Pete Hunt 最开始推广 React 的时候的一句口号就叫 "Rethinking Best Practices"，这样的定位使得 React 打开了一些全新的思路，吸引了一群喜欢折腾的早期核心用户，并在这个基础上通过社区迭代孵化出了许多今天被 React 开发者当作常识的 pattern。这是 React 伟大的地方，Vue 里面也有很多地方是直接受到了 React 的启发。React 敢做这样的尝试，是因为它是 Facebook。这样的体量的公司，在 infrastructure 层面获得质的提升，收益是巨大的，而且 Facebook 的工程师们足够聪明又要靠工资吃饭，改变他/她们的习惯并不是什么问题。而对外推广，则是一种大公司才有的 “改变业界” 的底气。

Vue 从一开始的定位就是尽可能的降低前端开发的门槛，让更多的人能够更快地上手开发。我以前也说过，开发 Vue 的初衷不是为了搞个大新闻，只是做了个我自己用得舒服的框架。我虽然也在 Google 这样的大公司呆过，但骨子里是一个喜欢自由的人，也一直觉得独立开发者很酷（这也是为什么最终自己也成了一个独立开发者）。很多时候我更希望自己做的东西能帮到那些中小型企业和个人开发者。举个例子来说，美国传统行业里有很多 small business，它们不像大公司那样有专门的 IT 团队来信息化整个流程，很多只能雇一个普通的 contractor 程序员，有些甚至是老板自己兼职研究代码。我收到过好几封这样的感谢信，说因为 Vue 让它们多快好省地做了个内部应用，解决了实际问题，这样的故事是让我觉得特别爽的。

做 React 这样的不迎合用户，而是试图改变用户的设计需要有足够的本钱：你得有足够的资源和背景去强行越过初始推广的那个陡坡。事实上，如果没有 Facebook 作为 React 的推广者，React 很可能最终是一个有着忠实用户群体的小众框架（比如 Elm）。作为一个个人项目的 Vue 没有这样的宣传资源，也并不是为了改变用户。所以从设计的角度上来说，Vue 首先考虑的是假设用户只掌握了 web 基础知识 (HTML, CSS, JS) 的情况下，如何能够最快理解和上手，实现一个看得见摸得着的应用。

一个 API 看得顺不顺眼，用得舒不舒服，很大程度上取决于你跟一个技术的核心用户群体的重合程度。编程语言之间喷来喷去还少么？大家都是图灵完备，然而此之蜜糖，彼之砒霜。Vue 的 API 设计固然有可以商榷的地方，但 React 也不是完美无瑕，不然也不会从 mixins 到 HOC 到 render props 一次次地折腾，更没有 hooks 什么事了。直到 Suspense 出现前，也不存在什么只有 React 才能做到的事情（顺带一提，有意思的是 hooks 基本上废掉了过去大部分基于组件的逻辑抽象模式，抹掉了 JSX vs. 模版的一个优势，也完全可以用在其他框架里，连 Angular 都已经有对应的原型实现...）然而 “不完美” 并没有妨碍在过去的几年内大量的用户用各自选择的技术做出实际的产品 —— 从[State of JS 近两年的数据](https://link.zhihu.com/?target=https%3A//2018.stateofjs.com/front-end-frameworks/overview/)来看，两者的满意率是差不多的，都在 90% 出头，说明两者在 “满足目标用户的需求” 这个衡量标准下，表现是差不多的。可维护性、可读性、优雅程度、生态这些东西嘴上怎么辩都可以，还是数据比较实在。

再说说具体技术层面：从加载速度、运行时性能来说，两者目前综合各种场景应该说是没有什么质的差别。硬要说的话，Vue 在 update 性能优化方面需要的心智负担可能少那么一点 —— React 如果不注意，容易导致过多的组件无用 diff，但是实际上真正会遇到性能瓶颈的应用也是少数... Vue 3 会比 Vue 2 快不少，加上模版编译还有一些可进一步发掘的优化空间，所以性能上会比现在的 React 有一定优势，但 React 那边也在研究基于 prepack 的编译时优化，这个也是挺值得期待的。Vue 3 对于 TS 的支持会有很大改善（包括 TSX），我们也在计划对模版做更好的 IDE 支持（比如补全、类型检查），现在没有不代表以后不能有，有批评我们改进就是了。其实过去大半年 Vue 本身没有什么大更新是因为精力都放在工具链上了，接下来又要回到核心上了。React 那边 time slicing / Concurrent mode 要明年 Q2 才稳定，那个时候应该 Vue 3 的 time slicing 应该也稳定了（原型已实现）。Suspense 在 data-fetching 稳定之前并没什么大用（要 2019 年中），这期间我们也会研究解决同类问题的方案。所以从纯技术层面来说，React 现在比 Vue 牛逼么？不好说。以后一定比 Vue 牛逼么？也不好说。

使用数量方面，有很多文章拿各种数据来比较，有的是 GitHub stars，有的是 npm 下载量，有的是 Google trends，有的是 StackOverflow 的问题数量... 其实这些数据都有很明显的问题，那就是它们跟实际使用者的数量并不一定是正比，会受到其它因素的影响，比如 GitHub stars 跟实际使用没有直接关联；使用者中使用 CI 的比例会影响 npm 的下载量；Google trends 很难完美过滤掉 React 这样的常见词汇的 false positive；文档和本身的上手难易程度会影响 StackOverflow 的问题数量，等等... 所以我自己一直是以 Chrome 开发者插件的使用者数量作为一个比较可靠的数据，因为它的关联度是最直接的，潜在的干扰因素也是最少的。目前 Vue 的开发者插件用户数量约为 70.4 万，而 React 是 136.3 万，大致可以作为参考。React 的使用量还是有明显优势，不过这个数字比起两年前已经很不一样了 —— 那时候大约是 1:7 的比例。从增速来看，Vue 是要快一些的。

说了这么多，无非是希望大家能停下来想想所谓的 ”A 技术比 B 技术牛逼“ 背后到底是在争些什么，我们使用这些技术的初衷又是什么。很多时候你说这方面，他说那方面，鸡同鸭讲，即使说到一起去，也往往缺乏对等的信息量或者基础共识，只是各自表达主观看法，最后变成两个阵营各自抱团取暖... 说到底，就算你证明了 A 比 B 牛逼，也不意味着你或者你的项目就牛逼了... 比起争这个，不如多想想怎么让自己变得更牛逼吧。


---

# Chrome 是怎么判断地址栏输入的东西是不是网址? 紫云飞

**Author:** 紫云飞  
**Bio:** JavaScript 考古学家  
**Avatar:** ![](https://picx.zhimg.com/v2-cb307218899f324598573c2fa634be8c_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/49d887d9671861f21479a6cdcca81d51  
**Published:** 2022.10.20 13:28:45  
**Updated:** 2022.10.20 13:34:06  
**Question:** https://www.zhihu.com/question/560616439  
**Question Created:** 2022.10.18 21:13:38  
**Question Updated:** 2022.10.18 21:13:38  
**Votes:** 3092  
**Comments:** 18  
**Type:** answer  

Chrome 的地址栏代号是 Omnibox，omni 是万能、全能的词根，Omnibox 就是全能盒子的意思。在 2008 年 Chrome 发布的时候，其它浏览器都是在一个长的地址栏右侧有个短的搜索框，Omnibox 把搜索和网址输入合二为一是当时一个大的创新。

Omnibox 是个很复杂的东西，远比我们用户想的要复杂，Chrome 就自带一个给他们的开发者调试用的页面，chrome://omnibox：

![](https://picx.zhimg.com/v2-ba1a9d1c59e5e2103fdbfac92aab4999_r.jpg?source=2c26e567)

最核心的功能就是要判断你输入的东西是什么，是个 query 还是个 url，也就是调试页面里展示出的那个 type = 的值。比如当你输入[http://www.baidu.com](https://link.zhihu.com/?target=http%3A//www.baidu.com)：

![](https://picx.zhimg.com/v2-7201e221a07a9b85b684c8803b0b4a60_r.jpg?source=2c26e567)

Ominibox 判断出了这个字符串是个 url，所以排在第一位的结果，也就是我们立刻回车执行的那个操作，就是 url-what-you-typed，也就是以网址形式打开你输入的内容，当然，我们的输入其实是缺了 https:// 协议头的，所以实际上它会给补上，也就是倒数第二列展示的那个。

而第二位的结果类型叫 search-other-engine，是因为它判断出了http://www.baidu.com刚好是浏览器内置的谷歌以外的一个搜索引擎，所以它会提示你，按下 TAB 键，就可以输入关键词，从而打开百度搜索。

第三位叫 search-what-you-typed，就是用默认的搜索引擎搜索输入的字符串，拼接好的谷歌网址也展示了出来。

前三个结果在 Omnibox 里展示出来是这样的：

![](https://picx.zhimg.com/v2-9ce7721b5be9a2347dd7cb0c266b96ef_r.jpg?source=2c26e567)

实际上判断是不是 url 是个非常复杂的逻辑，更何况这里的输入不能期望它是个完整的 url，比如没有协议头的话，JS API 里new URL('www.baidu.com')是可以直接报错说它不是个 url，但这里不行。而且这里还得考虑自己的业务属性，比如不允许的协议类型，xxx:www.baidu.com：

![](https://pic1.zhimg.com/v2-aac694c9c85bd2ce33b664a30939fc59_r.jpg?source=2c26e567)

它没有识别成 url 类型，也不是 query 类型，而是 unknown，unknown 类型类似 query，排第一的结果也是默认搜索，但是它和 query 不一样的是，也可以作为网址打开，箭头向下移动到最底部再回车就可以。比如我在之前回答中提到的谷歌公司内部短网址域名 go 的网址，就会被判断成 unknown：

![](https://picx.zhimg.com/v2-d4bc6ea659a9e33242bd9a327c5e198a_r.jpg?source=2c26e567)

而 localhost 就被特殊处理成了 url 类型：

![](https://pica.zhimg.com/v2-cae88d98ce293b86cf016225b3fca0e3_r.jpg?source=2c26e567)

还有这里还得考虑本地路径格式，比如斜杠 / 表示根目录和波浪线 ~ 表示 Home 目录。

还有个有趣的 javascript: 协议，这是从网景时代 Brendan Eich 手里传下来的调试功能，BE 不在 Mozilla 以后，Firefox 已经完全禁掉了它。在 Omnibox 里，javascript:1+1 默认会是搜索，因为被判定成了 unknown：

![](https://pica.zhimg.com/v2-df4f9d17c98835370cf1f4b74513daf1_r.jpg?source=2c26e567)

而 javascript:alert(1+1) 就会被识别成 url，会弹出 2。这是因为很多年前，有人说搜素 JavaScript 犀牛书的名字 JavaScript: The Definitive Guide，结果没有打开谷歌，而是给当成代码执行了：

![](https://picx.zhimg.com/v2-a6d214eb5f3c43b764a4ed55cdddedde_r.jpg?source=2c26e567)

所以他们加了个简单的正则：

![](https://pic1.zhimg.com/v2-9c7cd314142520aaf5a7234b4ad80da8_r.jpg?source=2c26e567)

只有 javascript: 协议后的文本包含一些括号、点、分号等才认为是代码，通常来说，也够了。

我这里只是说一些简单的有趣的 case，其实很多你想都想不到的场景有很多，比如输入 ip，而且还有 ipv4 和 ipv6 的情况，等等。识别这个字符串是不是 url 涉及到的 C++ 代码怎么都有几千行，这不是一个正则能实现的。

现在据说流行一个面试题：

![](https://pic1.zhimg.com/v2-712587ac5324d1ba5269905e044887f6_r.jpg?source=2c26e567)

我这里说的就是这道题的答案的第一步的梗概。


---

# 羊了个羊是不是骗局？ DBinary

**Author:** DBinary  
**Bio:** 画画的，专画可爱的东西  
**Avatar:** ![](https://picx.zhimg.com/v2-64c93a534ade1f71416f6d37bea062d0_l.jpg?source=0df5f383)  
**Author URL:** https://www.zhihu.com/people/3de93df9501c2b532004784d0e1ff44f  
**Published:** 2022.09.20 14:53:12  
**Updated:** 2022.09.28 18:22:48  
**Question:** https://www.zhihu.com/question/553632083  
**Question Created:** 2022.09.15 03:20:37  
**Question Updated:** 2022.09.15 03:20:37  
**Votes:** 9655  
**Comments:** 585  
**Type:** answer  

不是，这种游戏能火起来，我就觉得很匪夷所思。

做一个这种游戏，比做一个俄罗斯方块还简单，我花了晚上两个钟，自己写了一个“咖波了个咖波”（咖波作者原谅我，咖波太可爱了，侵删）

![](https://picx.zhimg.com/v2-4b89a6ae87639dcbdddcb9882cbe6fe2_r.jpg?source=2c26e567)

这种游戏逻辑写起来不要太简单好么

![](https://picx.zhimg.com/v2-21aef02771a36008bfcf583f92b379f3_r.jpg?source=2c26e567)

而且官方还否认了，羊了个羊不是抄袭（不能说很像，只能说完全一致）

![](https://pic1.zhimg.com/50/v2-4569050e85963291f2b4b94c7b3360a0_720w.jpg?source=2c26e567)

嘿嘿，既然如此我也不客气了，我这就把“咖波了个咖波”开个源，大家可以在assets中自己替换成自己喜欢的贴图哈

![](https://picx.zhimg.com/v2-1811bb58cbd4c25016a1359a160d9a91_r.jpg?source=2c26e567)

比如可以“狗了个狗”

![](https://pica.zhimg.com/v2-efa3c8a65db13c1fd1e693398076496a_r.jpg?source=2c26e567)

“奥特曼了个奥特曼”

![](https://picx.zhimg.com/v2-bc632230573f6bdb7d9fd48b7367779c_r.jpg?source=2c26e567)

“蛇了个蛇”

![](https://picx.zhimg.com/v2-a67fa0d44bdaebb1e691cecbe2895fbb_r.jpg?source=2c26e567)

## 另外敲黑板，划重点了哈，游戏特色：

**1.我没有做游戏胜利界面哈，因为大概率不需要过不了关哈，**只有0.001%的人能通关哈

**2.游戏失败界面当然是做了的**

**3.我摊牌哈，牌子全是随机生成的，不保证能全消哈**

**害，居然忘记做了游戏最重要的功能，看广告，死罪死罪**

![](https://pic1.zhimg.com/v2-4df6b1e7e2f089b73d360295d9140996_r.jpg?source=2c26e567)

PS：另外说一句广告要看99999秒哈，毕竟看广告才是这个游戏的玩法

![](https://pic1.zhimg.com/v2-057b2b21bf4038d753748443c220b78e_r.jpg?source=2c26e567)

我编译成了webassembly，激情游戏，在线试玩

[https://www.painterengine.com/main/instances/instance2022092001/index.html](https://link.zhihu.com/?target=https%3A//www.painterengine.com/main/instances/instance2022092001/index.html)

备用链接

[https://www.painterengine.cn/main/instances/instance2022092001/index.html](https://link.zhihu.com/?target=https%3A//www.painterengine.cn/main/instances/instance2022092001/index.html)

源码下载：

[https://www.painterengine.com/example.html](https://link.zhihu.com/?target=https%3A//www.painterengine.com/example.html)

备用链接:

[https://www.painterengine.cn/example.html](https://link.zhihu.com/?target=https%3A//www.painterengine.cn/example.html)

依赖引擎库

[PainterEngine 一个由C语言编写的完整开源的跨平台图形应用框架](https://link.zhihu.com/?target=https%3A//www.painterengine.com/index.html)

备用链接:

[PainterEngine 一个由C语言编写的完整开源的跨平台图形应用框架](https://link.zhihu.com/?target=https%3A//www.painterengine.cn/index.html)

PPS:有人问我广告打开了，不想看完消格子了，要怎么退出啊，这个问题问的好!!来都来了你还想跑？

PPPS：我怕真有人把99999s的广告看完了，提前预告一下，广告时间有负数的哈

![](https://picx.zhimg.com/v2-4d10feede71519a3a3fb05126f9d3990_r.jpg?source=2c26e567)

























## 下面的内容是写给DIY玩家看的

==============================================

本来只是随便写的用来嘲讽一下羊了个羊这个韭菜游戏的回答,没想到大家那么热情,居然想真的上手还要通关.

我坦白,我连胜利过关界面都没做,前面的意思呢,是0.001%的人能(用非正常手段)通关,但事情沦落到这个地部,不得不开放一下教程,把通关庆祝做了,顺便让有些真正想玩这游戏的上手DIY一下.

关于换皮肤这一点,仍然是打开assets文件夹,替换对应png文件哈

![](https://pica.zhimg.com/v2-e50638b57bfdccab6f954db01142ebad_r.jpg?source=2c26e567)

注意一下,png图片的大小一定是48*48的png彩色图片,尺寸不一样不能成功,另外png decoder也是我自己搓的轮子,所以一些灰度之类的非常见png也无法加载,大部分时候应该是没有问题的,那个广告ad2.png也可以换,不过图片大小没有额外要求.

之后是生成布局,因为大多数人不会编译,所以捏,我使用了PainterEngine内部集成的编译型脚本引擎PainterScript,不要慌,很简单的,请用记事本或者Visual studio code之类的文本编辑器打开script.c,就是下面这个

![](https://pica.zhimg.com/50/v2-d7917240994cdb428c4c1571eda4968d_720w.jpg?source=2c26e567)

里面的默认的无法通关的搞笑代码如下:

#name "main"

//创建标签函数,x,y表示其左上角坐标,每个标签必定是48x48大小的,z表示深度,越大则放置的越底下,在标签被上层遮盖时将不能被点击
//id就是你png文件对应的数字,最大支持31个标签,id的范围是1-31,如果没有对应png图片,会创建失败,png图片格式必定是(1.png,2.png,3.png.....31.png)
host void CreateNote(float x,float y,float z,int id);

//取随机数,min为最小值,max为最大值
host int  rand(int min,int max);

//在这个函数里创建标签,surface_width为画布宽度,surface_height为画布高度,note_type_count为标签类型个数(和你放了几个png文件有关)
export int main(int surface_width,int surface_height,int note_type_count)
{
    int x,y,z;//x,y索引,z表示层数,值越大则放在越底下,

    for (z = 0;z < 5; z++ )//一共5层
	{
		for (y = 0; y < 8-z; y++)//最上层8*8,逐层递减
		{
			for (x = 0; x < 8-z; x++)
			{
				float objx = surface_width / 2 - 48 * 4 + 24 * z;//计算标签左上角x坐标
				float objy = 32+24*z;//计算左上角y坐标
				CreateNote(objx + 48 * x, objy + 48 * y, z+1, rand(1,note_type_count));//随机创建一个标签
			}
		}
	}
    
}

在main函数里呢,生成的就是对应的布局,上面呢我把注释都打好了,默认布局代码如上,你可能会说,好复杂我不会编程看不懂啊,咋办,小问题:

我们重点关注

host void CreateNote(float x,float y,float z,int id);

这个函数是创建标签用的,x,y表示要创建标签左上角坐标,每个标签必定是48x48大小的,z表示深度,越大则放置的越底下,在标签被上层遮盖时将不能被点击,id就是你png文件对应的数字,最大支持31个标签,id的范围是1-31,如果没有对应png图片,会创建失败,png图片格式必定是(1.png,2.png,3.png.....),当然你放的png越多,这个游戏就越难.

我举个例子,首先窗口左上角为原点坐标,y轴向下,x轴向右,我现在创建3个标签

#name "main"

host void CreateNote(float x,float y,float z,int id);
host int  rand(int min,int max);


export int main(int surface_width,int surface_height,int note_type_count)
{
    CreateNote(200,200,1,2);
    CreateNote(300,200,1,2);
    CreateNote(400,200,1,2);
}

那么,运行结果就是这样的

![](https://picx.zhimg.com/v2-634d99877392ce0d0f1b85b5b982cd14_r.jpg?source=2c26e567)

或者代码如果是这样的:

#name "main"

host void CreateNote(float x,float y,float z,int id);
host int  rand(int min,int max);


export int main(int surface_width,int surface_height,int note_type_count)
{
    int i;
    for (i = 1; i < 24; i++)
    {
        CreateNote(200+i*12,200,i,rand(1,8));
    }
}

那运行结果就是这样

![](https://picx.zhimg.com/v2-afd872414b8b1acff2c2eadcae989fd8_r.jpg?source=2c26e567)

当然,你也可以学习默认的代码,用代码手段去生成布局,PainterScript是我自己做自己用的一门语言,但用法和C基本很像,大家自行揣摩哈.
