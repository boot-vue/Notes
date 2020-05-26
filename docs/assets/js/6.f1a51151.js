(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{344:function(s,t,n){s.exports=n.p+"assets/img/lvm.1af515ed.png"},357:function(s,t,n){"use strict";n.r(t);var e=n(41),a=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"lvm磁盘管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lvm磁盘管理"}},[s._v("#")]),s._v(" LVM磁盘管理")]),s._v(" "),e("blockquote",[e("p",[s._v("物理硬盘 --\x3e 物理卷 PV --\x3e 卷组 VG --\x3e 逻辑卷 LV --\x3e 挂载")])]),s._v(" "),e("p",[e("img",{attrs:{src:n(344),alt:"LVM"}})]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gpt 分区")]),s._v("\ngdisk /dev/sdn\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ...")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建PV卷")]),s._v("\n\npvcreate /dev/sdn /dev/sdx\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 卷组")]),s._v("\n\nvgcreate -s 32M xxx /dev/sdn  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -s PE最小块大小  4M整数倍")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 逻辑卷")]),s._v("\n\nlvcreate -L 15G -n xxxx1  xxx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vg name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -L 容量大小")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 格式化逻辑卷")]),s._v("\n\nmkfs.ext4 /dev/xxx/xxxx1   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /dev目录下会存在  卷组名/逻辑卷名的路径")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 挂载 /dev/xxx/xxxx1 到具体目录上")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自动挂载 /etc/fstab 增加")]),s._v("\n/dev/xxx/xxxx1 /data       ext4    defaults       "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 扩展/缩小逻辑卷")]),s._v("\nlvextend -L +50G /dev/xxx/xxxx1   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 增加50G")]),s._v("\nlvreduce -L -50G /dev/xxx/xxxx1   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 减小50G")]),s._v("\n\nlvextend -r -l +100FREE /dev/xxx/xxxx1  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 分配vg剩余所有空间  -r 刷新文件系统大小")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新")]),s._v("\nresize2fs /dev/xxx/xxxx1  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# etx格式")]),s._v("\nxfs_growfs /dev/xxx/xxx1  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# xfs格式")]),s._v("\n")])])]),e("h2",{attrs:{id:"rsync-同步"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rsync-同步"}},[s._v("#")]),s._v(" rsync 同步")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 远程 ----\x3e 本地  root@xxx:/xxx  /home.....")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" -arPu --exclude "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'demo1/'")]),s._v(" --exclude "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'demo2/'")]),s._v(" --exclude "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'demo3/'")]),s._v(" root@202.60.245.163:/root/test /root\n")])])]),e("h2",{attrs:{id:"zsh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zsh"}},[s._v("#")]),s._v(" zsh")]),s._v(" "),e("blockquote",[e("p",[s._v("home end键 & 小键盘")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# key bindings")]),s._v("\nbindkey "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token entity",title:"\\e"}},[s._v("\\e")]),s._v('[1~"')]),s._v(" beginning-of-line\nbindkey "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token entity",title:"\\e"}},[s._v("\\e")]),s._v('[4~"')]),s._v(" end-of-line\nbindkey "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token entity",title:"\\e"}},[s._v("\\e")]),s._v('[5~"')]),s._v(" beginning-of-history\nbindkey "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token entity",title:"\\e"}},[s._v("\\e")]),s._v('[6~"')]),s._v(" end-of-history\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# for rxvt")]),s._v("\nbindkey "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token entity",title:"\\e"}},[s._v("\\e")]),s._v('[8~"')]),s._v(" end-of-line\nbindkey "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token entity",title:"\\e"}},[s._v("\\e")]),s._v('[7~"')]),s._v(" beginning-of-line\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# for non RH/Debian xterm, can't hurt for RH/DEbian xterm")]),s._v("\nbindkey "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token entity",title:"\\e"}},[s._v("\\e")]),s._v('OH"')]),s._v(" beginning-of-line\nbindkey "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token entity",title:"\\e"}},[s._v("\\e")]),s._v('OF"')]),s._v(" end-of-line\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# for freebsd console")]),s._v("\nbindkey "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token entity",title:"\\e"}},[s._v("\\e")]),s._v('[H"')]),s._v(" beginning-of-line\nbindkey "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token entity",title:"\\e"}},[s._v("\\e")]),s._v('[F"')]),s._v(" end-of-line\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# completion in the middle of a line")]),s._v("\nbindkey "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^i'")]),s._v(" expand-or-complete-prefix\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Fix numeric keypad  ")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 0 . Enter  ")]),s._v("\nbindkey -s "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^[Op"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),s._v("\nbindkey -s "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^[On"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"."')]),s._v("\nbindkey -s "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^[OM"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^M"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1 2 3  ")]),s._v("\nbindkey -s "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^[Oq"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v("\nbindkey -s "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^[Or"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),s._v("\nbindkey -s "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^[Os"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 4 5 6  ")]),s._v("\nbindkey -s "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^[Ot"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"4"')]),s._v("\nbindkey -s "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^[Ou"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5"')]),s._v("\nbindkey -s "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^[Ov"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"6"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 7 8 9  ")]),s._v("\nbindkey -s "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^[Ow"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"7"')]),s._v("\nbindkey -s "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^[Ox"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8"')]),s._v("\nbindkey -s "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^[Oy"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"9"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# + - * /  ")]),s._v("\nbindkey -s "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^[Ol"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"+"')]),s._v("\nbindkey -s "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^[Om"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-"')]),s._v("\nbindkey -s "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^[Oj"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),s._v("\nbindkey -s "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^[Oo"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),s._v("\n\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);