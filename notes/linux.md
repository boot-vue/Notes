# Linux

## LVM磁盘管理

> 物理硬盘 --> 物理卷 PV --> 卷组 VG --> 逻辑卷 LV --> 挂载

![LVM](./imgs/lvm.png)

```bash
# gpt 分区
gdisk /dev/sdn

# ...

# 创建PV卷

pvcreate /dev/sdn /dev/sdx

# 卷组

vgcreate -s 32M xxx /dev/sdn  # -s PE最小块大小  4M整数倍

# 逻辑卷

lvcreate -L 15G -n xxxx1  xxx(vg name) # -L 容量大小

# 格式化逻辑卷

mkfs.ext4 /dev/xxx/xxxx1   # /dev目录下会存在  卷组名/逻辑卷名的路径

# 挂载 /dev/xxx/xxxx1 到具体目录上

# 自动挂载 /etc/fstab 增加
/dev/xxx/xxxx1 /data       ext4    defaults       0       0


# 扩展/缩小逻辑卷
lvextend -L +50G /dev/xxx/xxxx1   # 增加50G
lvreduce -L -50G /dev/xxx/xxxx1   # 减小50G

lvextend -r -l +100FREE /dev/xxx/xxxx1  # 分配vg剩余所有空间  -r 刷新文件系统大小

# 更新
resize2fs /dev/xxx/xxxx1  # etx格式
xfs_growfs /dev/xxx/xxx1  # xfs格式
```


## rsync 同步

```bash
# 远程 ----> 本地  root@xxx:/xxx  /home.....
rsync -arPu --exclude 'demo1/' --exclude 'demo2/' --exclude 'demo3/' root@202.60.245.163:/root/test /root
```

## zsh

> home end键 & 小键盘

```bash
# key bindings
bindkey "\e[1~" beginning-of-line
bindkey "\e[4~" end-of-line
bindkey "\e[5~" beginning-of-history
bindkey "\e[6~" end-of-history

# for rxvt
bindkey "\e[8~" end-of-line
bindkey "\e[7~" beginning-of-line
# for non RH/Debian xterm, can't hurt for RH/DEbian xterm
bindkey "\eOH" beginning-of-line
bindkey "\eOF" end-of-line
# for freebsd console
bindkey "\e[H" beginning-of-line
bindkey "\e[F" end-of-line
# completion in the middle of a line
bindkey '^i' expand-or-complete-prefix

# Fix numeric keypad  
# 0 . Enter  
bindkey -s "^[Op" "0"
bindkey -s "^[On" "."
bindkey -s "^[OM" "^M"
# 1 2 3  
bindkey -s "^[Oq" "1"
bindkey -s "^[Or" "2"
bindkey -s "^[Os" "3"
# 4 5 6  
bindkey -s "^[Ot" "4"
bindkey -s "^[Ou" "5"
bindkey -s "^[Ov" "6"
# 7 8 9  
bindkey -s "^[Ow" "7"
bindkey -s "^[Ox" "8"
bindkey -s "^[Oy" "9"
# + - * /  
bindkey -s "^[Ol" "+"
bindkey -s "^[Om" "-"
bindkey -s "^[Oj" "*"
bindkey -s "^[Oo" "/"

```

## Vim

> .vimrc

搜索高亮 <code>set hlsearch</code>

## dash

ubuntu下declare报错: 

   ```bash
   sudo dpkg-reconfigure dash
   # 选否  ubuntu默认sh 指向了dash  通过上边命令  解除dash与sh的关联
   ```