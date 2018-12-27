install.packages("googleAnalyticsR", dependencies = TRUE)
library(googleAnalyticsR)
library(tidyverse)
library(rvest)
library(jsonlite)

## api nefugnuje

googleAuthR::gar_auth_service("auth2.json")

# test authentication
al <- ga_account_list()
meta <- google_analytics_meta()

ga_id <- 114113324

google_analytics(ga_id, 
                 date_range = c("2017-01-01", "2017-03-01"), 
                 metrics = "sessions", 
                 dimensions = "date")

# data
nejctenejsi <- read_csv("nejctenejsi.csv", col_names = c("url"))


tit <- character()


for (i in nejctenejsi$url) {
  r <- read_html(i) %>%
    html_node("article h1") %>%
    html_text()
  tit <- append(tit, r)
}

tit <- str_trim(tit)
tit <- str_squish(tit)
nejctenejsi$title <- tit

img <- character()

for (i in nejctenejsi$url) {
  t <- read_html(i) %>%
    html_nodes("head meta") %>%
    html_attrs()
  t <- t[[15]][2]
  img <- append(img, t)
  
}

nejctenejsi$img <- img


list(nejctenejsi)

toJSON(nejctenejsi)


