class Api::V1::DashboardController < ApplicationController

  def index
    load_recent_heard
    load_recomendations
  end

  private

  def load_recent_heard
    heard_albums = @recent_albums = current_user.recently_heards.order('created_at DESC').limit(4).map(&:album).uniq
    if heard_albums.present?
    else
      @recent_albums = Album.all.limit(4)
    end

  end

  def load_recomendations
    heard_categories = @recent_albums.map(&:category)
    if heard_categories.present?
      @recommend_albums = Album.joins(:category, :songs).where(category: heard_categories)
                          .order('songs.played_count').select('distinct albums.*').limit(12)
    else
      @recommend_albums = Album.all.limit(12)
    end
  end
end
