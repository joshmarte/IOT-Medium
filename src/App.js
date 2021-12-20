import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <img id="header" src=".//codeFellows.jpg"></img>
      </header>
      <article>
        <h1>What is Internet of Things?</h1>
        <p>
          The concept behind IoT is connecting just about everything to the
          internet in real-time, which can directly improve our quality of life
          and experiences. The term “Internet of Things” was coined by Kevin
          Ashton, co-founder of AUTO-ID Laboratory at MIT.
        </p>
        <p>
          IoT has not been around too long, but the visions of everyday machines
          communicating with on another goes back as far as the 1800s. Having
          the first voice transmission taking place in 1900, described as
          “wireless telegraphy”, to the internet starting out as part of
          DARPA(Defense Advanced Research Projects Agency) in 1962 which then
          evolved in ARPANET(Adanced Research Projects Agency Network), both
          providing necessary components for the development of Internet of
          Things. One additional vital component in the development of IoT was
          the IPV6(Internet Protocol version 6), which increased address space.
        </p>
        <p>
          One of the very first examples of Internet of Things, was a Coca Cola
          machine located at a university, where programmers connected through
          the internet to the vending machine to check on the availability of
          each drink and its temperature. Between the years of 2008 and 2009
          brought us the birth of Internet of Things. For the first time in
          history, things/objects/devices were connected to the internet more
          than people.
        </p>
        <h1>How it works?</h1>
        <p>
          IoT main components consist of, IoT Sensors, Connectivity/Network,
          Cloud, Hyper Decision Framework and User Interface. These
          sensors/devices communicate to the cloud through either
          bluetooth,wireless,satellite or cellular, just to name a few. Once the
          data arrives to the cloud, there is software(RIoT OS) that processes
          this data and then decides to perform an action, such as sending an
          alert or automatically adjusting the sensors/devices without the need
          of the user. However, there is a user interface if the user is needed
          or wants to check on the system. Actions or adjustments made by the
          user are then sent in the opposite direction through the IoT system,
          to make this change.
        </p>
        <figure id="works-img">
          <img src=".//how.gif" />
        </figure>
        <h1>Consumer Benefits of IoT: </h1>
        <p>
          IoT for consumers is all about convenience—doing more with less. From
          Smart Homes to Connected Cars to Smart Offices, to Smart Cities
          several IoT solutions are being built and adopted to help humans with
          their comfort.
        </p>
        <ul>
          <h3>Comfort and Convenience</h3>
          <li>
            As devices and appliances get smarter, a smart home can integrate
            their abilities as well, for example, your laundry schedule can be
            integrated using your smart washing machine. And as it has been
            dreamt about for long, your smart refrigerator can order groceries.
            But ideally, the refrigerator notifies you of the shopping cart so
            that you decide what you want, rather than the refrigerator – it
            should just suggest – let us put it in its place! When you are away
            on holidays, your plants can be automatically watered, at the right
            level, by sensing the humidity of the soil.
          </li>
          <h3>Efficiency</h3>
          <li>
            The next spheres of IoT’s influences are Smart Cities and Smart
            Nations. At the city level, information from various homes,
            localities, buildings can be correlated for better energy
            management, traffic management, and city planning, further providing
            benefits to residents. Smart homes, smart cars, smart cities depend
            on smart appliances. But to integrate them together, to make
            personalized meaning of them collectively and IoT platform is
            needed.
          </li>
          <h3>Security</h3>
          <li>
            If the devices are properly secured with authentication,
            authorization and encryption, IoT can make your life safer and more
            secure. Smart locks for homes and car can warn of you unauthorized
            access. They can lock themselves if you forgot to lock, they can
            learn patterns.
          </li>
        </ul>
        <figure id="hannah-img">
          <img src=".//hannah.png" />
        </figure>
        <h1>Voice Focus</h1>
        <p>
          Some of today's most popular voice assistants include Siri, Alexa and
          Google Assistant.{" "}
          <em>
            Have you ever used to check the weather forecast or to send a text
            message to a phone contact?
          </em>
        </p>
        <p>
          Voice assistants are run by voice recognition software used through
          electronic devices like smartphones or speakers. You can use voice
          control to run commands and perform tasks with the power of your
          voice. How does it work? Voice assistants are activated by saying a
          wake word to your device for example “Hey Siri” or “Alexa”.
        </p>
        <p>
          Voice assistants are really useful as they allow consumers to do daily
          tasks hands free and are seen as the smarter, faster and easier way to
          perform everyday activities.
        </p>
        <p>
          Voice assistants are really useful as they allow consumers to do daily
          tasks hands free and are seen as the smarter, faster and easier way to
          perform everyday activities.{" "}
        </p>
        <em>What can voice assistants do?</em>
        <p>
          {" "}
          There are a range of things that voice assistants can do which
          include:
          <ul>
            <li>Contract thermostats, lights and locks</li>
            <li>Send email/text messages or initiate calls</li>
            <li>Buy items online</li>
            <li>Locate lost smartphones or other devices</li>
            <li>Check traffic conditions and map travel routes</li>
            <li>Read books or newspapers aloud</li>
            <li>Schedule meetings</li>
          </ul>
        </p>
        <h1>Downsides of IoT</h1>
        <p>
          Despite IoT’s revolutionary impact on the way we live and work, it is
          not without its faults. A major concern is privacy - IoT devices have
          access to a lot of personal data, from things as minimal as to when we
          are awake and asleep to our financial data. This very data that is
          used to make our lives easier can be used against us. Here’s an
          excellent example from The Future of Tech:
        </p>
        <em>
          "Imagine a casino floor, colorful and bustling and loud, echoing with
          cheers and groans as gamblers win big or lose it all. Now imagine that
          in the quiet back rooms, behind closed doors, the casino management is
          panicking because their data—including the personal information of
          their high-roller clients—has been breached. After some frantic
          cyber-forensic investigation, it’s discovered that the data was stolen
          by a hacker who exploited a vulnerability in a Wi-Fi-connected
          fish-tank thermometer, of all places That actually happened.
        </em>
        <p>
          All it takes is a well-versed hacker to access data on an IoT device
          for it to be used against us. So It is important for providers of IoT
          devices and services to ensure that data is being encrypted.
          Especially since many industries that use IoT, such as healthcare and
          financial institutions have access to very sensitive data such as
          medical records and banking information. But integrating encryption
          into large numbers of IoT devices can be financially and logistically
          difficult. Many IoT devices are connected to internet connections
          which secure data flows over, and unlike computers, most IoT devices
          are released without adequate protection from threats.
        </p>
        <p>
          Other threats include impacts on human labor forces. We are already
          seeing the impacts of automation in things such as checkout lines in
          stores and kiosks in fast food restaurants, but it doesn’t stop there.
          IoT can have a devastating impact on the employment prospects of less
          educated workers. For example, inventory workers. Businesses used to
          rely on people to evaluate stock levels, but with devices being able
          to communicate with each other and transmit information directly to
          business owners, there will be less need for these workers.
        </p>
        <p>
          Administrative assistants are another example, with IoT devices like
          Alexa being able to schedule appointments, make dinner reservations
          and start and manage meetings. While it can be argued that IoT can
          phase out a lot of unsafe jobs, these are still jobs being lost to
          automation.
        </p>
        <h1>Internet of Things (IoT) Security in Focus</h1>
        <p>
          Security is one of the most important concerns in the IoT industry.
          Devices are not only connected to the Internet and other local devices
          but are also expected to communicate with other devices on the
          Internet directly{" "}
          <strong class="tooltip">
            (Mesh Network)
            <span class="tooltiptext">
              Mesh networking is a promising approach to organizing
              device-to-device communication within Internet of Things (IoT)
              platforms.
            </span>
          </strong>{" "}
          greatly increasing the reach and impact of a security breach or attack
          through this particular vector.
        </p>
        <figure id="security-img">
          <img src=".//IoTSecurity.png" />
        </figure>
        <p>
          There have been various security and privacy attacks on the already
          deployed IoT applications worldwide. An example of one such attack
          occurred in the last quarter of 2016, the{" "}
          <a href="https://www.imperva.com/blog/malware-analysis-mirai-ddos-botnet/?redirect=Incapsula">
            Mirai attack
          </a>{" "}
          was estimated to infect around 2.5 million devices connected to the
          Internet and launch distributed denial of service{" "}
          <strong class="tooltip">
            (DDoS)
            <span class="tooltiptext">
              (DDoS) attack is a malicious attempt to disrupt the normal traffic
              of a targeted server, service or network by overwhelming the
              target or its surrounding infrastructure with a flood of Internet
              traffic.
            </span>
          </strong>{" "}
          attacks.
        </p>
        <p>
          Devices infected by Mirai continuously scan the internet for the IP
          address of Internet of things (IoT) devices nad . Mirai includes a
          table of IP address ranges that it will not infect, including private
          networks and addresses allocated to the United States Postal Service
          and Department of Defense.
        </p>
        <h1>Future of IoT</h1>
        <p>
          There are 3 emerging technologies that are the driving force behind
          the Internet of Things(IoT) - Big Data, Artificial Intelligence, and
          5G. A more connected future is promised with the combination of the
          Internet of Things and Artificial Intelligence evolving into what is
          known as Artificial Intelligence of Things(AIoT). AIoT is becoming
          more mainstream as it transforms and affects the way we process
          information and our daily lives.
        </p>
        <p>
          It is projected that by 2025, there will be 42 billion IoT connected
          devices. As these devices grow, the amount of data will too. The
          combination of the learning capabilities of AI with the connectivity
          of IoT will be able to handle such growth. This will produce
          interconnected devices that will transform our interactions with our
          devices at work and home. The four major segments that will benefit
          the most from this innovation are wearable devices, smart home, smart
          city, and smart industry. Wearable devices such as fitness trackers
          and smartwatches monitor the users health and habits. This has been
          impactful for sports and fitness as well as the healthtech field.
          According to Gartner, a leading tech research firm, the wearable
          device market is estimated to generate more than $87 billion by 2023.
        </p>
        <p>
          A house that learn’s the owner’s habits and can respond to your
          requests is no longer just a scientific concept of the future. The
          smart home is capable of controlling your electronic devices,
          appliances, and lighting serving as your personal automated “support
          system”. One major perk of this seamless access is improved energy
          efficiency for the entire household. The smart home market is
          projected to see a 25% compound annual growth rate between 2020-2025,
          growing to $246 billion. As cities become more populated, traffic
          congestion on city roads increases. Smart city innovations are being
          invested in improving traffic control, public transportation and
          safety, and energy efficiency. Real time decisions on traffic flow are
          being managed by AI known as Intelligent Transport Management
          Systems(ITMS).
        </p>
        <p>
          The manufacturing and mining industries will depend on the efficiency
          of smart devices and sensors to reduce human error. Smart industry
          will rely on Iot devices and real-time data analytics to help prevent
          costly errors. It is estimated that by 2022, over 80% of enterprise
          projects will have a combination of AI and Iot(AIoT) technology.
        </p>
      </article>
    </div>
  );
}

export default App;
