# task-2

Add a server from the last HW so that it would only greet you if you sent a POST request with the header: `IKnowYourSecret: TheOwlsAreNotWhatTheySeem` 
<br> 
Everyone who logged in successfully is written to a file (name and IP). For each new start of the server, we read the previous state from the file.