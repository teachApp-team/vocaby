# Debianがベースのrubyイメージを指定
FROM ruby:2.6

# 必要なものをインストール
RUN apt-get update -qq && apt-get -y install \
    build-essential \
    libpq-dev \
    nodejs \
    mariadb-client

# rails用のディレクトリを作成
RUN mkdir /app

# ローカルマシン(Mac)からコンテナの中にファイルをコピー
COPY Gemfile /app
COPY Gemfile.lock /app

# 作業ディレクトリを指定
WORKDIR /app

# 上でコピーしたGemfileに従ってGemをインストール
RUN gem install bundler && bundle install