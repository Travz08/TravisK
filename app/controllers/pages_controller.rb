class PagesController < ApplicationController
  def home
    @day = Time.now.strftime("%A")

    case @day
    when "Monday"
      statement = "Ugh. #{@day}."
    when "Tuesday"
      statement = "Meh. #{@day}."
    when "Wednesday"
      statement = "Beckehh, it's #{@day}!"
    when "Thursday"
      statement = "Almost there, #{@day}."
    when "Friday"
      statement = "TGI#{@day}."
    when "Saturday"
      statement = "What day is for the boys?.. #{@day}!"
    when "Sunday"
      statement = "Funday #{@day}."
    end
    @statement = statement
  end

  def about
  end

end
