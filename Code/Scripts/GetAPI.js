var 
ReymitAPI_Token = "ZjcxZTkxZGFiMjRlMTBjN0EvSEdpVXczQTZaYWFUN3ZDNE9oV3Z5K0YrZnpGTERzVEtscHJkS3g5Qmc9s"
,ReymitAPI_Address = "https://api.reymit.ir/user/"
,ReymitAPI_StreamerToken = ReymitAPI_Address + ReymitAPI_Token
,ReymitAPI_UserData = ReymitAPI_StreamerToken 
,ReymitAPI_CurrentGoal = ReymitAPI_StreamerToken + '/goal'
,ReymitAPI_Last50Donations = ReymitAPI_StreamerToken + '/donates'
,ReymitAPI_GreatestDonationsByTime = ReymitAPI_StreamerToken + '/donates/top-donates'
,ReymitAPI_GreatestDonatorsByTime = ReymitAPI_StreamerToken + '/donates/top-donators'
,ReymitAPI_LoyalDonators = ReymitAPI_StreamerToken + '/donates/regular-donators'
,ReymitAPI_TotalDonations = ReymitAPI_StreamerToken + '/donates/totals'


const listEl = document.querySelector('span')

function(ReymitAPI_CurrentGoal){
    
}

fetch(ReymitAPI_CurrentGoal)
    .then(res => res.json())
    .then(data => {
        data.foreEach(GET => {
            listEl.insertAdjacentHTML('beforeend','<b>${ReymitAPI_CurrentGoal.title}</b>')
        })
    })