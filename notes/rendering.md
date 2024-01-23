Next js has two different rendering modes: 
    - static 
        - static routes are components that render ahead of time
            - e.g.: when running the 'run build' command
            - component get rendered there, and results are cached
        - content of the page will never change; 
    - dynamic
        - might be something w/ a parameter in it that's a user ID where it's the user's feed
            - will change every time someone goes to it
            - we do not want to cache this
            - we don't want it to be rendered WHEN we deploy it, and then cache it, and send it back every time
                - Instagram would show the same feed to everyone using the app if that were the case
            - MUST be dynamic
                - Have to go to the server, make an API call, and get new data someone goes to this URL
        -Next JS figured that out for us w/o us having to do it
        - gotta give it hints
            - fetch()
                - using fetch tells NextJsS and the program that we are grabbing data when the page is rendering
                    - THAT is why we shouldn't cache the page by default
                - also gives us the ability to interfere with that cache and try to change the rules of said cache, like when/how often it revalidates
            - other functions that exist: cookies() and headers()
            - using any of these functions will automatically opt us into dynamic routing
            

    