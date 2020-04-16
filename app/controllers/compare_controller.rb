class CompareController < ApplicationController
  def index
    @user_ids = User.all.ids
    @user1_id = @user_ids.sample
    @user1 = User.find_by(id: @user1_id)
    @other_number = @user_ids.sample
    
    while @other_number == @user1_id

      @other_number = @user_ids.sample

    end

    @user2 = User.find_by(id: @other_number)
    # if @user1.present? && @user2.present?
    #   respond_to do |format|

    #     format.js
        
    #   end

    # end
    
  end
end
