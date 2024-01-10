How does routing work?

- every single folder you make in your directory is going to correspond to a different segment in your router
- /app
    /dashboard
        /settings
            page.js
        /profile
            page.js
    - to actually create a page that loads up on the segment, we just have to create a page.js/page.jsx/ etc. 
    - MUST SPECIFICALLY CALL IT PAGE FOR IT TO BE A PAGE. (i'm so tired am i'm worried I wont understand these notes later)

- route grouping
    - way to combine many routes living in same place
        - say we have dshboard with very specific layout. 
            - and there are 30 pages withing the dashboard
            - all have similar layout so we want them grouped under same segment
            - naturally we'd have asdf.com/dashborad/page in our URL which is okay 
            - but because we're obsessesed with being sleek we dont wanna see the word "dashboard" in there anymore
            - in the app directory we simply have to put the word "dashboard" in parentheses to take it out of the URL being rendered

- STATIC ROUTING Q & A
    - Can you have multiple pages in a folder? 
        - NOPE. It's because urls are unique
        - You can't have two page.tsx files in the same folder. 
    - Do you need to use export default in every page?
        - YES
    - Can we no longer use file names for routing? 
        - We can no longer use file names for routing
        - They all need to be called page.tsx. 
        - every folder has to have a page componenet in it and it has to be that name 
        - ane the fiel names themselves do not deternime the segments in a route
        - only folders determine the segments in a route, and that's ONLY if there 
        - are no parentheses around them