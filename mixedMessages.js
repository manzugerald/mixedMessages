message = ["Remember back when phones were these devices we spoke into? As text messaging has become more commonplace,the amount of time people spend actually talking on their phones has dropped. The average cell phone conversation was 3.13 minutes in 2007 but had dropped to 2.03 minutes two years later.",
"Many parents today are banning phone use at the dinner table. Nearly half of texters under the age of 25 think texting while eating is acceptable, compared to just over a quarter of those over 25. Almost a quarter of these younger texters say texting while using the bathroom is okay, too, while only half as many adults over 25 agree.","Just how many texts are these youngsters sending, you ask? Teens on average send about 10 texts per hour during the day, which is around 3,000 texts per month. Young people still haven't figured out how to text in their sleep, however.",
"Another thing about those messages the kids are sending: Sorry to break it to you, Mom and Dad, but 1 teen in 5 is 'sexting.'",
"Mom and Dad shouldn't be too shocked, however, considering that 28% of parents have sent sexual messages or photos of themselves, too","When it comes to texting in general (not just sexting), most English-speaking adults are pretty much up to speed, with 72% using text messaging. Broken down by ethnicity, Hispanics have the highest percent of text-savvy adults (83%). Black adults come in second at 79%, and white adults come in at 68%",]

function getRandomNumber(arr) {
    num = Math.floor(Math.random()*arr.length-1)
    for(i=0; i<= num; i++){
        if(i===num){
            return(arr[i])
        }
    }
}
console.log(getRandomNumber(message))