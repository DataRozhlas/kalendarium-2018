library(tidyverse)

library(tm)
library(wordcloud)
library(RColorBrewer)
library(readxl)

data <- read_excel("search-po-tydnech.xlsx")


for (i in 1:52) {
  vyber <- data[,(i*2-1):(i*2)]
  vyber <- vyber[-1,]
  vyber <- vyber %>% filter(vyber[,1] != "irozhlas")
  vyber <- vyber %>% filter(vyber[,1] != "irozhlas cz")
  vyber <- vyber %>% filter(vyber[,1] != "irozhlas.cz")
  vyber <- vyber %>% filter(vyber[,1] != "(other)")
  vyber <- vyber %>% filter(vyber[,1] != "i rozhlas")
  vyber <- vyber %>% filter(vyber[,1] != "rozhlas")
  vyber <- vyber %>% filter(vyber[,1] != "irozhlas volby")
  vyber <- vyber %>% filter(vyber[,1] != "seznam")
  png(paste0("w", formatC(i, width = 2, format = "d", flag = "0"), ".png"), width=600, height=315)
  wordcloud(words=pull(vyber,1),
            freq=as.numeric(pull(vyber,2)),
            max.words=50,
            random.order=F,
            random.color=T,
            rot.per=0,
            colors=c("#e41a1c", "#377eb8", "#4daf4a"),
            use.r.layout=T,
            fixed.asp=F,
            scale=c(3.2,1))
  dev.off()
  
}




pull(vyber, 2)


slova <- data[3:32,1]$w1


png("wordcloud.png", width=1200, height=630)

wordcloud(words=slova, freq=as.numeric(unlist(data[3:32,2])), min.freq = 1,
          max.words=30, random.order=FALSE, rot.per=0, fixed.asp=F, scale=c(9,1))

dev.off()

display.brewer.all()

