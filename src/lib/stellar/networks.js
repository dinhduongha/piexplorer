const networks = {
  public: 'public',
  test: 'test',
  local: 'local',
}

const hostnameToNetworkType = hostname => {
  if (hostname === 'wepi.vn' || hostname === 'WePi.vn' || hostname === 'publicnet.local')
    return networks.public
  else if (hostname === 'testnet.wepi.vn' || hostname === 'testnet.local')
    return networks.test
  else return networks.local
}

export {networks as default, hostnameToNetworkType}
