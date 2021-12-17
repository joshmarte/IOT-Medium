import "./App.css";

function App() {
  return (
    <div className="App">
      <article>
        <h1>What is Internet of Things?</h1>
        <p></p>
        <p></p>
        <h1>How it works?</h1>
        <p></p>
        <h1>Theodore</h1>
        <p></p>
        <p></p>
        <h1>Consumer Benefits of IOT: </h1>
        <p>
          IOT for consumers is all about convenience—doing more with less. From
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
            The next spheres of IOT’s influences are Smart Cities and Smart
            Nations. At the city level, information from various homes,
            localities, buildings can be correlated for better energy
            management, traffic management, and city planning, further providing
            benefits to residents. Smart homes, smart cars, smart cities depend
            on smart appliances. But to integrate them together, to make
            personalized meaning of them collectively and IOT platform is
            needed.
          </li>
          <h3>Security</h3>
          <li>
            If the devices are properly secured with authentication,
            authorization and encryption, IOT can make your life safer and more
            secure. Smart locks for homes and car can warn of you unauthorized
            access. They can lock themselves if you forgot to lock, they can
            learn patterns.
          </li>
        </ul>
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

        <h1>Internet of Things (ioT) Security in Focus</h1>
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
          <img src=".//ioTSecurity.png" />
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
        <h1>Milton</h1>
        <p></p>
        <p></p>
      </article>
    </div>
  );
}

export default App;
