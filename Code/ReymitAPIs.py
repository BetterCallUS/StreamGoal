# دریافت اطلاعات کاربر صاحب توکن:
UserData = f"https://api.reymit.ir/user/{API_Token}"

# دریافت اطلاعات کامل مربوط به هدف فعلی:
CurrentGoal = f"https://api.reymit.ir/user/{API_Token}/goal"

# لیست 50 دونیت آخر:
Last50Donations = f"https://api.reymit.ir/user/{API_Token}/donates/last-donates"

# لیست بزرگ ترین دونیت ها تفکیک شده بر اساس بازه های زمانی مختلف:
GreatestDonationsByTime = f"https://api.reymit.ir/user/{API_Token}/donates/top-donates"

# لیست بزرگ ترین دونیت کنندگان ها تفکیک شده بر اساس بازه های زمانی مختلف:
GreatestDonatorsByTime = f"https://api.reymit.ir/user/{API_Token}/donates/top-donators"

# لیست حمایت کنندگان ثابت شما در ریمیت تفکیک شده بر اساس بازه های زمانی مختلف:
LoyalDonators = f"https://api.reymit.ir/user/{API_Token}/donates/regular-donators"

# جمع حمایت های دریافت شده در بازه های زمانی مختلف:
TotalDonations = f"https://api.reymit.ir/user/{API_Token}/donates/totals"