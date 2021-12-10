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
        <h1>Kiyomi</h1>
        <p></p>
        <p></p>
        <h1>Hannah</h1>
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
