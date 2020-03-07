# [🌎 simpip](https://simpip.com/)

**⚡ Now powered purely by [Cloudflare Workers](https://www.cloudflare.com/products/cloudflare-workers/), making it _blazing_ fast from anywhere in the world — and even simpler!** [Try this code on the playground.](https://cloudflareworkers.com/#6b0835ee482cc019b521cd68dd35c1c2:https://tutorial.cloudflareworkers.com)

[![CI](https://github.com/jakejarvis/simpip/workflows/Deploy%20Cloudflare%20Worker/badge.svg)](https://github.com/jakejarvis/simpip/actions?query=workflow%3A%22Deploy+Cloudflare+Worker%22) [![Security Headers](https://img.shields.io/security-headers?url=https%3A%2F%2Fsimpip.com)](https://securityheaders.com/?q=https%3A%2F%2Fsimpip.com%2F)

A very, *very* "simple" and lightning-fast web server that returns the requester's IP address in plaintext...and **literally nothing else**. Perfect for CLI usage via `curl`, `wget`, `httpie`, etc. or for automated tasks like dynamic DNS updates.

The server returns your IPv6 address by default, but you can explicitly choose between IPv4 and IPv6 with [`curl`](https://curl.haxx.se/docs/manpage.html) flags:

```bash
curl simpip.com       # returns IPv6 *OR* IPv4
curl -4 simpip.com    # returns IPv4
curl -6 simpip.com    # returns IPv6, or fails to connect if network is incompatible
```


## Usage

In [my terminal's dotfiles](https://github.com/jakejarvis/dotfiles/blob/f40a23352c1bd4fe18640faad872e8687e14b745/zsh/aliases.zsh#L16), I have three aliases:`ip4` and `ip6` which are self-explanatory, and `ip` which returns both addresses *iff* your network supports IPv6; otherwise, IPv6 sliently fails and only your IPv4 address is shown.

```bash
alias ip4="curl -4 simpip.com --max-time 1 --proto-default https --silent"
alias ip6="curl -6 simpip.com --max-time 1 --proto-default https --silent"
alias ip="ip4; ip6"
```

Timeout is set to 1 second with `--max-time 1` (otherwise we will get stuck indefinitely attempting to connect via IPv6 even if our network doesn't support it) and a secure connection preference is set with `--proto-default https`. Connection errors (particularly for IPv6) are silenced with `--silent` so that the output of `ip` contains nothing but IP addresses, like so:

```bash
jake@macbook:~$ ip4
1.1.1.1

jake@macbook:~$ ip6
2606:4700:4700::1111

jake@macbook:~$ ip
1.1.1.1
2606:4700:4700::1111
```


## License

This project is distributed under the [MIT license](LICENSE.md).
