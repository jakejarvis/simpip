# 🌎 [simpip](https://simpip.com/)

**⚡ Now powered purely by [Cloudflare Workers](https://www.cloudflare.com/products/cloudflare-workers/), making it _blazing_ fast from anywhere in the world — and even simpler!** [Try this code on the playground.][playground]

[![Deploy Cloudflare Worker](https://github.com/jakejarvis/simpip/actions/workflows/deploy.yml/badge.svg)](https://github.com/jakejarvis/simpip/actions/workflows/deploy.yml)

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

MIT

[playground]: https://workers.cloudflare.com/playground#LYVwNgLglgDghgJwgegGYHsHALQBM4RwDcABAEbogB2+CAngLzbPYDqApmQNJQQBimYACFKNRHSEBjAFYBGAJqyAWgA0AigFYAktIBqXAExgAXCxYduvAVhHVaEmQuXrtew2ACwAKADC6KhDsAdgAIlAAzjDo4bxQ-sYkGFh4BMQkVHDA7AwARFA07AAeAHTS4TmkqFBgQZnZeQUlZTnefgFBENgAKnQw7AlwMDBgUJIEcVTI0nAAbnDhkgiwEADUwOi44Oze3kVRSCS47Khw4BAkAN5eJCTzdFSSiewQkgAWABQI7ACOIOzhEAAlJdrjcSJJ-ACSOgYBBwiQGCCwWDXuw4EcEOEEldkcicm1AsEen0cgkcoFCihhnB8jkADSg3EkfFwN7sbAEhDoMCk5lUdDYMZsunpAUAzDsEWgAHYL5zEb4QL0xm4nIAUUKMCgX3KZIADMqmTccgAFBBwADmwDgvJy-MFrNRhqN+P8hM6AGV2JIQEsIHRsCbuaM6LajiczthwghHgByflUdix51MnIqUJQXDYeSUbBcfkAd1tOZA4LgVBIIHC7BIAB0cj6EGASNgACz16EIOsN33N7AANg7EHQJAtzxI7F4qK7WhNt1wuB14QAhCnVendFB2AXsB7KDH2LbXhAIDAschkBapyAyMUIcApnAANbsaYIGYRZAxYBamBrm4AL4MsiAFEF4KpQKgJDvImBYkAAqgASgAMp8Px-ACxS9oCxTwBArwZFkCIMIiOTIDkwI4riEJUFCsAIiQXy-P8EDFKi6LsJixRjhA7wNqggr+ImkjQFQFrYLAFEkAAPtJjHoSxbFohi4Tcc8fGFNgSQFogRxZkkFFgSqNxfBAvoVrBJCIf8US0ew7z0SszK1lQ9JIkaAIEFWCQGHqerAR5hBmeEXRFBAZIAPJcP+YLFHFMJwgFIGAmBIHgcipnmek25WTZkL2TkrZ6q2JAAHLoOcAh2C5blUcinnBQkRWtklYINVWoWUmS5WVaIuAxXFxQJeErUASloJAV4oFeN4ZjMBYPD8IIthiPQUhyIoqiaDo+hGK0bodBmkTRLE8SJIIKSEKQhH1FkhCKjalTVLUWS5GQYDoGQLS+AdRK9P0txDCMYzQP4UzhP4OxeBcOTWvkAD66ybDUpINEcTTlABs1zQtVjLX14jrU4W2uLtYDMN4QA