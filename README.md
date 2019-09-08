# 🌎 [simpip.com](https://simpip.com/)

**⚡ Now powered purely by [Cloudflare Workers](https://www.cloudflare.com/products/cloudflare-workers/) — [try this code on the playground!](https://cloudflareworkers.com/#12bf2207fc352f52ebb27a041753c03d:https://tutorial.cloudflareworkers.com/)** The ancient PHP version is [archived here](https://github.com/jakejarvis/simpip/tree/php).

A very, *very* "simple" web server that returns the visitor's IP address in plaintext...and **literally nothing** else. Perfect for CLI usage via `curl` or for automated tasks.

This returns your IPv6 address by default, but to choose one or the other you can use [`curl`](https://curl.haxx.se/docs/manpage.html) flags:

```bash
curl simpip.com       # returns IPv6 *OR* IPv4
curl -4 simpip.com    # returns IPv4
curl -6 simpip.com    # returns IPv6, or fails to connect if network is incompatible
```


## Example

In [my terminal's dotfiles](https://github.com/jakejarvis/dotfiles), I have three aliases:`ip4` and `ip6` which are self-explanatory, and simply `ip` which returns **both** addresses *iff* your network supports IPv6 — otherwise, IPv6 sliently fails and only your IPv4 address is shown.

```bash
alias ip4="curl -4 simpip.com --max-time 1 --proto-default https --silent"
alias ip6="curl -6 simpip.com --max-time 1 --proto-default https --silent"
alias ip="ip6; ip4"
```

Timeout is set to 1 second via `--max-time 1` (otherwise we will get stuck indefinitely trying to connect via IPv6 even if our network doesn't support it) and a secure connection preference is set using `--proto-default https`. Connection errors (particularly for IPv6) are silenced using `--silent`, so that the output of `ip` contains nothing but IP addresses, like so:

```bash
jake@macbook:~$ ip4
1.1.1.1

jake@macbook:~$ ip6
2606:4700:4700::1111

jake@macbook:~$ ip
2606:4700:4700::1111
1.1.1.1
```


## License

This project is distributed under the [MIT license](LICENSE.md).
