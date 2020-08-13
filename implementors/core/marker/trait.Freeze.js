(function() {var implementors = {};
implementors["kernel_hal"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"kernel_hal/struct.VectorRegs.html\" title=\"struct kernel_hal::VectorRegs\">VectorRegs</a>","synthetic":true,"types":["kernel_hal::context::VectorRegs"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel_hal/struct.U128.html\" title=\"struct kernel_hal::U128\">U128</a>","synthetic":true,"types":["kernel_hal::context::U128"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel_hal/struct.Thread.html\" title=\"struct kernel_hal::Thread\">Thread</a>","synthetic":true,"types":["kernel_hal::dummy::Thread"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel_hal/struct.PageTable.html\" title=\"struct kernel_hal::PageTable\">PageTable</a>","synthetic":true,"types":["kernel_hal::dummy::PageTable"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel_hal/struct.PhysFrame.html\" title=\"struct kernel_hal::PhysFrame\">PhysFrame</a>","synthetic":true,"types":["kernel_hal::dummy::PhysFrame"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel_hal/struct.InterruptManager.html\" title=\"struct kernel_hal::InterruptManager\">InterruptManager</a>","synthetic":true,"types":["kernel_hal::dummy::InterruptManager"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel_hal/struct.SleepFuture.html\" title=\"struct kernel_hal::SleepFuture\">SleepFuture</a>","synthetic":true,"types":["kernel_hal::future::SleepFuture"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel_hal/struct.SerialFuture.html\" title=\"struct kernel_hal::SerialFuture\">SerialFuture</a>","synthetic":true,"types":["kernel_hal::future::SerialFuture"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel_hal/defs/struct.MMUFlags.html\" title=\"struct kernel_hal::defs::MMUFlags\">MMUFlags</a>","synthetic":true,"types":["kernel_hal::defs::MMUFlags"]},{"text":"impl Freeze for <a class=\"enum\" href=\"kernel_hal/defs/enum.CachePolicy.html\" title=\"enum kernel_hal::defs::CachePolicy\">CachePolicy</a>","synthetic":true,"types":["kernel_hal::defs::CachePolicy"]},{"text":"impl&lt;T, P&gt; Freeze for <a class=\"struct\" href=\"kernel_hal/user/struct.UserPtr.html\" title=\"struct kernel_hal::user::UserPtr\">UserPtr</a>&lt;T, P&gt;","synthetic":true,"types":["kernel_hal::user::UserPtr"]},{"text":"impl&lt;P&gt; Freeze for <a class=\"struct\" href=\"kernel_hal/user/struct.IoVec.html\" title=\"struct kernel_hal::user::IoVec\">IoVec</a>&lt;P&gt;","synthetic":true,"types":["kernel_hal::user::IoVec"]},{"text":"impl&lt;P&gt; Freeze for <a class=\"struct\" href=\"kernel_hal/user/struct.IoVecs.html\" title=\"struct kernel_hal::user::IoVecs\">IoVecs</a>&lt;P&gt;","synthetic":true,"types":["kernel_hal::user::IoVecs"]},{"text":"impl Freeze for <a class=\"enum\" href=\"kernel_hal/user/enum.In.html\" title=\"enum kernel_hal::user::In\">In</a>","synthetic":true,"types":["kernel_hal::user::In"]},{"text":"impl Freeze for <a class=\"enum\" href=\"kernel_hal/user/enum.Out.html\" title=\"enum kernel_hal::user::Out\">Out</a>","synthetic":true,"types":["kernel_hal::user::Out"]},{"text":"impl Freeze for <a class=\"enum\" href=\"kernel_hal/user/enum.InOut.html\" title=\"enum kernel_hal::user::InOut\">InOut</a>","synthetic":true,"types":["kernel_hal::user::InOut"]},{"text":"impl Freeze for <a class=\"enum\" href=\"kernel_hal/user/enum.Error.html\" title=\"enum kernel_hal::user::Error\">Error</a>","synthetic":true,"types":["kernel_hal::user::Error"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel_hal/vdso/struct.VdsoConstants.html\" title=\"struct kernel_hal::vdso::VdsoConstants\">VdsoConstants</a>","synthetic":true,"types":["kernel_hal::vdso::VdsoConstants"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel_hal/vdso/struct.Features.html\" title=\"struct kernel_hal::vdso::Features\">Features</a>","synthetic":true,"types":["kernel_hal::vdso::Features"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel_hal/vdso/struct.VersionString.html\" title=\"struct kernel_hal::vdso::VersionString\">VersionString</a>","synthetic":true,"types":["kernel_hal::vdso::VersionString"]}];
implementors["kernel_hal_unix"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"kernel_hal_unix/struct.Thread.html\" title=\"struct kernel_hal_unix::Thread\">Thread</a>","synthetic":true,"types":["kernel_hal_unix::Thread"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel_hal_unix/struct.PageTable.html\" title=\"struct kernel_hal_unix::PageTable\">PageTable</a>","synthetic":true,"types":["kernel_hal_unix::PageTable"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kernel_hal_unix/struct.PhysFrame.html\" title=\"struct kernel_hal_unix::PhysFrame\">PhysFrame</a>","synthetic":true,"types":["kernel_hal_unix::PhysFrame"]}];
implementors["linux_object"] = [{"text":"impl Freeze for <a class=\"enum\" href=\"linux_object/error/enum.LxError.html\" title=\"enum linux_object::error::LxError\">LxError</a>","synthetic":true,"types":["linux_object::error::LxError"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"linux_object/fs/struct.MemBuf.html\" title=\"struct linux_object::fs::MemBuf\">MemBuf</a>","synthetic":true,"types":["linux_object::fs::device::MemBuf"]},{"text":"impl Freeze for <a class=\"struct\" href=\"linux_object/fs/struct.FcntlFlags.html\" title=\"struct linux_object::fs::FcntlFlags\">FcntlFlags</a>","synthetic":true,"types":["linux_object::fs::fcntl::FcntlFlags"]},{"text":"impl Freeze for <a class=\"struct\" href=\"linux_object/fs/struct.FileFlags.html\" title=\"struct linux_object::fs::FileFlags\">FileFlags</a>","synthetic":true,"types":["linux_object::fs::fcntl::FileFlags"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"linux_object/fs/struct.File.html\" title=\"struct linux_object::fs::File\">File</a>","synthetic":true,"types":["linux_object::fs::file::File"]},{"text":"impl Freeze for <a class=\"struct\" href=\"linux_object/fs/struct.OpenOptions.html\" title=\"struct linux_object::fs::OpenOptions\">OpenOptions</a>","synthetic":true,"types":["linux_object::fs::file::OpenOptions"]},{"text":"impl Freeze for <a class=\"struct\" href=\"linux_object/fs/struct.PipeData.html\" title=\"struct linux_object::fs::PipeData\">PipeData</a>","synthetic":true,"types":["linux_object::fs::pipe::PipeData"]},{"text":"impl Freeze for <a class=\"struct\" href=\"linux_object/fs/struct.Pipe.html\" title=\"struct linux_object::fs::Pipe\">Pipe</a>","synthetic":true,"types":["linux_object::fs::pipe::Pipe"]},{"text":"impl Freeze for <a class=\"struct\" href=\"linux_object/fs/struct.Pseudo.html\" title=\"struct linux_object::fs::Pseudo\">Pseudo</a>","synthetic":true,"types":["linux_object::fs::pseudo::Pseudo"]},{"text":"impl Freeze for <a class=\"struct\" href=\"linux_object/fs/struct.RandomINodeData.html\" title=\"struct linux_object::fs::RandomINodeData\">RandomINodeData</a>","synthetic":true,"types":["linux_object::fs::random::RandomINodeData"]},{"text":"impl Freeze for <a class=\"struct\" href=\"linux_object/fs/struct.RandomINode.html\" title=\"struct linux_object::fs::RandomINode\">RandomINode</a>","synthetic":true,"types":["linux_object::fs::random::RandomINode"]},{"text":"impl Freeze for <a class=\"struct\" href=\"linux_object/fs/struct.STDIN.html\" title=\"struct linux_object::fs::STDIN\">STDIN</a>","synthetic":true,"types":["linux_object::fs::stdio::STDIN"]},{"text":"impl Freeze for <a class=\"struct\" href=\"linux_object/fs/struct.STDOUT.html\" title=\"struct linux_object::fs::STDOUT\">STDOUT</a>","synthetic":true,"types":["linux_object::fs::stdio::STDOUT"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"linux_object/fs/struct.Stdin.html\" title=\"struct linux_object::fs::Stdin\">Stdin</a>","synthetic":true,"types":["linux_object::fs::stdio::Stdin"]},{"text":"impl Freeze for <a class=\"struct\" href=\"linux_object/fs/struct.Stdout.html\" title=\"struct linux_object::fs::Stdout\">Stdout</a>","synthetic":true,"types":["linux_object::fs::stdio::Stdout"]},{"text":"impl Freeze for <a class=\"struct\" href=\"linux_object/fs/struct.FileDesc.html\" title=\"struct linux_object::fs::FileDesc\">FileDesc</a>","synthetic":true,"types":["linux_object::fs::FileDesc"]},{"text":"impl Freeze for <a class=\"enum\" href=\"linux_object/fs/enum.SeekFrom.html\" title=\"enum linux_object::fs::SeekFrom\">SeekFrom</a>","synthetic":true,"types":["linux_object::fs::file::SeekFrom"]},{"text":"impl Freeze for <a class=\"enum\" href=\"linux_object/fs/enum.PipeEnd.html\" title=\"enum linux_object::fs::PipeEnd\">PipeEnd</a>","synthetic":true,"types":["linux_object::fs::pipe::PipeEnd"]},{"text":"impl Freeze for <a class=\"struct\" href=\"linux_object/loader/struct.LinuxElfLoader.html\" title=\"struct linux_object::loader::LinuxElfLoader\">LinuxElfLoader</a>","synthetic":true,"types":["linux_object::loader::LinuxElfLoader"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"linux_object/process/struct.LinuxProcess.html\" title=\"struct linux_object::process::LinuxProcess\">LinuxProcess</a>","synthetic":true,"types":["linux_object::process::LinuxProcess"]},{"text":"impl Freeze for <a class=\"struct\" href=\"linux_object/thread/struct.LinuxThread.html\" title=\"struct linux_object::thread::LinuxThread\">LinuxThread</a>","synthetic":true,"types":["linux_object::thread::LinuxThread"]}];
implementors["linux_syscall"] = [{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"linux_syscall/struct.Syscall.html\" title=\"struct linux_syscall::Syscall\">Syscall</a>&lt;'a&gt;","synthetic":true,"types":["linux_syscall::Syscall"]}];
implementors["zircon_loader"] = [{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"zircon_loader/struct.Images.html\" title=\"struct zircon_loader::Images\">Images</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["zircon_loader::Images"]}];
implementors["zircon_object"] = [{"text":"impl Freeze for <a class=\"enum\" href=\"zircon_object/enum.ZxError.html\" title=\"enum zircon_object::ZxError\">ZxError</a>","synthetic":true,"types":["zircon_object::error::ZxError"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"zircon_object/debuglog/struct.DebugLog.html\" title=\"struct zircon_object::debuglog::DebugLog\">DebugLog</a>","synthetic":true,"types":["zircon_object::debuglog::DebugLog"]},{"text":"impl Freeze for <a class=\"enum\" href=\"zircon_object/debuglog/enum.Severity.html\" title=\"enum zircon_object::debuglog::Severity\">Severity</a>","synthetic":true,"types":["zircon_object::debuglog::Severity"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"zircon_object/dev/struct.BusTransactionInitiator.html\" title=\"struct zircon_object::dev::BusTransactionInitiator\">BusTransactionInitiator</a>","synthetic":true,"types":["zircon_object::dev::bti::BusTransactionInitiator"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/dev/struct.BtiInfo.html\" title=\"struct zircon_object::dev::BtiInfo\">BtiInfo</a>","synthetic":true,"types":["zircon_object::dev::bti::BtiInfo"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"zircon_object/dev/struct.Interrupt.html\" title=\"struct zircon_object::dev::Interrupt\">Interrupt</a>","synthetic":true,"types":["zircon_object::dev::interrupt::Interrupt"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/dev/struct.InterruptFlags.html\" title=\"struct zircon_object::dev::InterruptFlags\">InterruptFlags</a>","synthetic":true,"types":["zircon_object::dev::interrupt::InterruptFlags"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/dev/struct.InterruptOptions.html\" title=\"struct zircon_object::dev::InterruptOptions\">InterruptOptions</a>","synthetic":true,"types":["zircon_object::dev::interrupt::InterruptOptions"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"zircon_object/dev/struct.Iommu.html\" title=\"struct zircon_object::dev::Iommu\">Iommu</a>","synthetic":true,"types":["zircon_object::dev::iommu::Iommu"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/dev/struct.IommuPerms.html\" title=\"struct zircon_object::dev::IommuPerms\">IommuPerms</a>","synthetic":true,"types":["zircon_object::dev::iommu::IommuPerms"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"zircon_object/dev/struct.MmioPcieAddressProvider.html\" title=\"struct zircon_object::dev::MmioPcieAddressProvider\">MmioPcieAddressProvider</a>","synthetic":true,"types":["zircon_object::dev::pci::bus::MmioPcieAddressProvider"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"zircon_object/dev/struct.PCIeBusDriver.html\" title=\"struct zircon_object::dev::PCIeBusDriver\">PCIeBusDriver</a>","synthetic":true,"types":["zircon_object::dev::pci::bus::PCIeBusDriver"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/dev/struct.PcieDeviceInfo.html\" title=\"struct zircon_object::dev::PcieDeviceInfo\">PcieDeviceInfo</a>","synthetic":true,"types":["zircon_object::dev::pci::bus::PcieDeviceInfo"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"zircon_object/dev/struct.PcieDeviceKObject.html\" title=\"struct zircon_object::dev::PcieDeviceKObject\">PcieDeviceKObject</a>","synthetic":true,"types":["zircon_object::dev::pci::bus::PcieDeviceKObject"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/dev/struct.PioPcieAddressProvider.html\" title=\"struct zircon_object::dev::PioPcieAddressProvider\">PioPcieAddressProvider</a>","synthetic":true,"types":["zircon_object::dev::pci::bus::PioPcieAddressProvider"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/dev/struct.PciInitArgsAddrWindows.html\" title=\"struct zircon_object::dev::PciInitArgsAddrWindows\">PciInitArgsAddrWindows</a>","synthetic":true,"types":["zircon_object::dev::pci::PciInitArgsAddrWindows"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/dev/struct.PciInitArgsIrqs.html\" title=\"struct zircon_object::dev::PciInitArgsIrqs\">PciInitArgsIrqs</a>","synthetic":true,"types":["zircon_object::dev::pci::PciInitArgsIrqs"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/dev/struct.PciIrqSwizzleLut.html\" title=\"struct zircon_object::dev::PciIrqSwizzleLut\">PciIrqSwizzleLut</a>","synthetic":true,"types":["zircon_object::dev::pci::PciIrqSwizzleLut"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/dev/struct.PciInitArgsHeader.html\" title=\"struct zircon_object::dev::PciInitArgsHeader\">PciInitArgsHeader</a>","synthetic":true,"types":["zircon_object::dev::pci::PciInitArgsHeader"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/dev/struct.PciEcamRegion.html\" title=\"struct zircon_object::dev::PciEcamRegion\">PciEcamRegion</a>","synthetic":true,"types":["zircon_object::dev::pci::PciEcamRegion"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/dev/struct.MappedEcamRegion.html\" title=\"struct zircon_object::dev::MappedEcamRegion\">MappedEcamRegion</a>","synthetic":true,"types":["zircon_object::dev::pci::MappedEcamRegion"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"zircon_object/dev/struct.PinnedMemoryToken.html\" title=\"struct zircon_object::dev::PinnedMemoryToken\">PinnedMemoryToken</a>","synthetic":true,"types":["zircon_object::dev::pmt::PinnedMemoryToken"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/dev/struct.ResourceFlags.html\" title=\"struct zircon_object::dev::ResourceFlags\">ResourceFlags</a>","synthetic":true,"types":["zircon_object::dev::resource::ResourceFlags"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"zircon_object/dev/struct.Resource.html\" title=\"struct zircon_object::dev::Resource\">Resource</a>","synthetic":true,"types":["zircon_object::dev::resource::Resource"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/dev/struct.ResourceInfo.html\" title=\"struct zircon_object::dev::ResourceInfo\">ResourceInfo</a>","synthetic":true,"types":["zircon_object::dev::resource::ResourceInfo"]},{"text":"impl Freeze for <a class=\"enum\" href=\"zircon_object/dev/enum.PcieIrqMode.html\" title=\"enum zircon_object::dev::PcieIrqMode\">PcieIrqMode</a>","synthetic":true,"types":["zircon_object::dev::pci::nodes::PcieIrqMode"]},{"text":"impl Freeze for <a class=\"enum\" href=\"zircon_object/dev/enum.PciAddrSpace.html\" title=\"enum zircon_object::dev::PciAddrSpace\">PciAddrSpace</a>","synthetic":true,"types":["zircon_object::dev::pci::PciAddrSpace"]},{"text":"impl Freeze for <a class=\"enum\" href=\"zircon_object/dev/enum.ResourceKind.html\" title=\"enum zircon_object::dev::ResourceKind\">ResourceKind</a>","synthetic":true,"types":["zircon_object::dev::resource::ResourceKind"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"zircon_object/ipc/struct.Channel.html\" title=\"struct zircon_object::ipc::Channel\">Channel</a>","synthetic":true,"types":["zircon_object::ipc::channel::Channel"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/ipc/struct.MessagePacket.html\" title=\"struct zircon_object::ipc::MessagePacket\">MessagePacket</a>","synthetic":true,"types":["zircon_object::ipc::channel::MessagePacket"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"zircon_object/ipc/struct.Fifo.html\" title=\"struct zircon_object::ipc::Fifo\">Fifo</a>","synthetic":true,"types":["zircon_object::ipc::fifo::Fifo"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"zircon_object/ipc/struct.Socket.html\" title=\"struct zircon_object::ipc::Socket\">Socket</a>","synthetic":true,"types":["zircon_object::ipc::socket::Socket"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/ipc/struct.SocketFlags.html\" title=\"struct zircon_object::ipc::SocketFlags\">SocketFlags</a>","synthetic":true,"types":["zircon_object::ipc::socket::SocketFlags"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/ipc/struct.SocketInfo.html\" title=\"struct zircon_object::ipc::SocketInfo\">SocketInfo</a>","synthetic":true,"types":["zircon_object::ipc::socket::SocketInfo"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/object/struct.Handle.html\" title=\"struct zircon_object::object::Handle\">Handle</a>","synthetic":true,"types":["zircon_object::object::handle::Handle"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/object/struct.HandleBasicInfo.html\" title=\"struct zircon_object::object::HandleBasicInfo\">HandleBasicInfo</a>","synthetic":true,"types":["zircon_object::object::handle::HandleBasicInfo"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/object/struct.HandleInfo.html\" title=\"struct zircon_object::object::HandleInfo\">HandleInfo</a>","synthetic":true,"types":["zircon_object::object::handle::HandleInfo"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/object/struct.Rights.html\" title=\"struct zircon_object::object::Rights\">Rights</a>","synthetic":true,"types":["zircon_object::object::rights::Rights"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/object/struct.Signal.html\" title=\"struct zircon_object::object::Signal\">Signal</a>","synthetic":true,"types":["zircon_object::object::signal::Signal"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"zircon_object/object/struct.KObjectBase.html\" title=\"struct zircon_object::object::KObjectBase\">KObjectBase</a>","synthetic":true,"types":["zircon_object::object::KObjectBase"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"zircon_object/object/struct.DummyObject.html\" title=\"struct zircon_object::object::DummyObject\">DummyObject</a>","synthetic":true,"types":["zircon_object::object::DummyObject"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"zircon_object/signal/struct.Event.html\" title=\"struct zircon_object::signal::Event\">Event</a>","synthetic":true,"types":["zircon_object::signal::event::Event"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"zircon_object/signal/struct.EventPair.html\" title=\"struct zircon_object::signal::EventPair\">EventPair</a>","synthetic":true,"types":["zircon_object::signal::eventpair::EventPair"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"zircon_object/signal/struct.Futex.html\" title=\"struct zircon_object::signal::Futex\">Futex</a>","synthetic":true,"types":["zircon_object::signal::futex::Futex"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/signal/struct.PortPacket.html\" title=\"struct zircon_object::signal::PortPacket\">PortPacket</a>","synthetic":true,"types":["zircon_object::signal::port::port_packet::PortPacket"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/signal/struct.PacketSignal.html\" title=\"struct zircon_object::signal::PacketSignal\">PacketSignal</a>","synthetic":true,"types":["zircon_object::signal::port::port_packet::PacketSignal"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/signal/struct.PacketGuestBell.html\" title=\"struct zircon_object::signal::PacketGuestBell\">PacketGuestBell</a>","synthetic":true,"types":["zircon_object::signal::port::port_packet::PacketGuestBell"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/signal/struct.PacketGuestMem.html\" title=\"struct zircon_object::signal::PacketGuestMem\">PacketGuestMem</a>","synthetic":true,"types":["zircon_object::signal::port::port_packet::PacketGuestMem"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/signal/struct.PacketGuestIo.html\" title=\"struct zircon_object::signal::PacketGuestIo\">PacketGuestIo</a>","synthetic":true,"types":["zircon_object::signal::port::port_packet::PacketGuestIo"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/signal/struct.PacketGuestVcpuInterrupt.html\" title=\"struct zircon_object::signal::PacketGuestVcpuInterrupt\">PacketGuestVcpuInterrupt</a>","synthetic":true,"types":["zircon_object::signal::port::port_packet::PacketGuestVcpuInterrupt"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/signal/struct.PacketGuestVcpuStartup.html\" title=\"struct zircon_object::signal::PacketGuestVcpuStartup\">PacketGuestVcpuStartup</a>","synthetic":true,"types":["zircon_object::signal::port::port_packet::PacketGuestVcpuStartup"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/signal/struct.PacketGuestVcpu.html\" title=\"struct zircon_object::signal::PacketGuestVcpu\">PacketGuestVcpu</a>","synthetic":true,"types":["zircon_object::signal::port::port_packet::PacketGuestVcpu"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/signal/struct.PacketInterrupt.html\" title=\"struct zircon_object::signal::PacketInterrupt\">PacketInterrupt</a>","synthetic":true,"types":["zircon_object::signal::port::port_packet::PacketInterrupt"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/signal/struct.PortPacketRepr.html\" title=\"struct zircon_object::signal::PortPacketRepr\">PortPacketRepr</a>","synthetic":true,"types":["zircon_object::signal::port::port_packet::PortPacketRepr"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"zircon_object/signal/struct.Port.html\" title=\"struct zircon_object::signal::Port\">Port</a>","synthetic":true,"types":["zircon_object::signal::port::Port"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/signal/struct.PortOptions.html\" title=\"struct zircon_object::signal::PortOptions\">PortOptions</a>","synthetic":true,"types":["zircon_object::signal::port::PortOptions"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"zircon_object/signal/struct.Timer.html\" title=\"struct zircon_object::signal::Timer\">Timer</a>","synthetic":true,"types":["zircon_object::signal::timer::Timer"]},{"text":"impl Freeze for <a class=\"union\" href=\"zircon_object/signal/union.Payload.html\" title=\"union zircon_object::signal::Payload\">Payload</a>","synthetic":true,"types":["zircon_object::signal::port::port_packet::Payload"]},{"text":"impl Freeze for <a class=\"union\" href=\"zircon_object/signal/union.PacketGuestVcpuData.html\" title=\"union zircon_object::signal::PacketGuestVcpuData\">PacketGuestVcpuData</a>","synthetic":true,"types":["zircon_object::signal::port::port_packet::PacketGuestVcpuData"]},{"text":"impl Freeze for <a class=\"enum\" href=\"zircon_object/signal/enum.PacketType.html\" title=\"enum zircon_object::signal::PacketType\">PacketType</a>","synthetic":true,"types":["zircon_object::signal::port::port_packet::PacketType"]},{"text":"impl Freeze for <a class=\"enum\" href=\"zircon_object/signal/enum.PacketGuestVcpuType.html\" title=\"enum zircon_object::signal::PacketGuestVcpuType\">PacketGuestVcpuType</a>","synthetic":true,"types":["zircon_object::signal::port::port_packet::PacketGuestVcpuType"]},{"text":"impl Freeze for <a class=\"enum\" href=\"zircon_object/signal/enum.PayloadRepr.html\" title=\"enum zircon_object::signal::PayloadRepr\">PayloadRepr</a>","synthetic":true,"types":["zircon_object::signal::port::port_packet::PayloadRepr"]},{"text":"impl Freeze for <a class=\"enum\" href=\"zircon_object/signal/enum.Slack.html\" title=\"enum zircon_object::signal::Slack\">Slack</a>","synthetic":true,"types":["zircon_object::signal::timer::Slack"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"zircon_object/task/struct.Exceptionate.html\" title=\"struct zircon_object::task::Exceptionate\">Exceptionate</a>","synthetic":true,"types":["zircon_object::task::exception::Exceptionate"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/task/struct.ExceptionInfo.html\" title=\"struct zircon_object::task::ExceptionInfo\">ExceptionInfo</a>","synthetic":true,"types":["zircon_object::task::exception::ExceptionInfo"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/task/struct.ExceptionHeader.html\" title=\"struct zircon_object::task::ExceptionHeader\">ExceptionHeader</a>","synthetic":true,"types":["zircon_object::task::exception::ExceptionHeader"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/task/struct.ExceptionContext.html\" title=\"struct zircon_object::task::ExceptionContext\">ExceptionContext</a>","synthetic":true,"types":["zircon_object::task::exception::ExceptionContext"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/task/struct.ExceptionReport.html\" title=\"struct zircon_object::task::ExceptionReport\">ExceptionReport</a>","synthetic":true,"types":["zircon_object::task::exception::ExceptionReport"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"zircon_object/task/struct.ExceptionObject.html\" title=\"struct zircon_object::task::ExceptionObject\">ExceptionObject</a>","synthetic":true,"types":["zircon_object::task::exception::ExceptionObject"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"zircon_object/task/struct.Exception.html\" title=\"struct zircon_object::task::Exception\">Exception</a>","synthetic":true,"types":["zircon_object::task::exception::Exception"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/task/struct.JobDebuggerIterator.html\" title=\"struct zircon_object::task::JobDebuggerIterator\">JobDebuggerIterator</a>","synthetic":true,"types":["zircon_object::task::exception::JobDebuggerIterator"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"zircon_object/task/struct.Job.html\" title=\"struct zircon_object::task::Job\">Job</a>","synthetic":true,"types":["zircon_object::task::job::Job"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/task/struct.JobInfo.html\" title=\"struct zircon_object::task::JobInfo\">JobInfo</a>","synthetic":true,"types":["zircon_object::task::job::JobInfo"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/task/struct.JobPolicy.html\" title=\"struct zircon_object::task::JobPolicy\">JobPolicy</a>","synthetic":true,"types":["zircon_object::task::job_policy::JobPolicy"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/task/struct.BasicPolicy.html\" title=\"struct zircon_object::task::BasicPolicy\">BasicPolicy</a>","synthetic":true,"types":["zircon_object::task::job_policy::BasicPolicy"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/task/struct.TimerSlackPolicy.html\" title=\"struct zircon_object::task::TimerSlackPolicy\">TimerSlackPolicy</a>","synthetic":true,"types":["zircon_object::task::job_policy::TimerSlackPolicy"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/task/struct.TimerSlack.html\" title=\"struct zircon_object::task::TimerSlack\">TimerSlack</a>","synthetic":true,"types":["zircon_object::task::job_policy::TimerSlack"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"zircon_object/task/struct.Process.html\" title=\"struct zircon_object::task::Process\">Process</a>","synthetic":true,"types":["zircon_object::task::process::Process"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/task/struct.ProcessInfo.html\" title=\"struct zircon_object::task::ProcessInfo\">ProcessInfo</a>","synthetic":true,"types":["zircon_object::task::process::ProcessInfo"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"zircon_object/task/struct.SuspendToken.html\" title=\"struct zircon_object::task::SuspendToken\">SuspendToken</a>","synthetic":true,"types":["zircon_object::task::suspend_token::SuspendToken"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"zircon_object/task/struct.Thread.html\" title=\"struct zircon_object::task::Thread\">Thread</a>","synthetic":true,"types":["zircon_object::task::thread::Thread"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/task/struct.ThreadFlag.html\" title=\"struct zircon_object::task::ThreadFlag\">ThreadFlag</a>","synthetic":true,"types":["zircon_object::task::thread::ThreadFlag"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/task/struct.ThreadInfo.html\" title=\"struct zircon_object::task::ThreadInfo\">ThreadInfo</a>","synthetic":true,"types":["zircon_object::task::thread::ThreadInfo"]},{"text":"impl Freeze for <a class=\"enum\" href=\"zircon_object/task/enum.ExceptionType.html\" title=\"enum zircon_object::task::ExceptionType\">ExceptionType</a>","synthetic":true,"types":["zircon_object::task::exception::ExceptionType"]},{"text":"impl Freeze for <a class=\"enum\" href=\"zircon_object/task/enum.ExceptionChannelType.html\" title=\"enum zircon_object::task::ExceptionChannelType\">ExceptionChannelType</a>","synthetic":true,"types":["zircon_object::task::exception::ExceptionChannelType"]},{"text":"impl Freeze for <a class=\"enum\" href=\"zircon_object/task/enum.SetPolicyOptions.html\" title=\"enum zircon_object::task::SetPolicyOptions\">SetPolicyOptions</a>","synthetic":true,"types":["zircon_object::task::job_policy::SetPolicyOptions"]},{"text":"impl Freeze for <a class=\"enum\" href=\"zircon_object/task/enum.PolicyCondition.html\" title=\"enum zircon_object::task::PolicyCondition\">PolicyCondition</a>","synthetic":true,"types":["zircon_object::task::job_policy::PolicyCondition"]},{"text":"impl Freeze for <a class=\"enum\" href=\"zircon_object/task/enum.PolicyAction.html\" title=\"enum zircon_object::task::PolicyAction\">PolicyAction</a>","synthetic":true,"types":["zircon_object::task::job_policy::PolicyAction"]},{"text":"impl Freeze for <a class=\"enum\" href=\"zircon_object/task/enum.TimerSlackDefaultMode.html\" title=\"enum zircon_object::task::TimerSlackDefaultMode\">TimerSlackDefaultMode</a>","synthetic":true,"types":["zircon_object::task::job_policy::TimerSlackDefaultMode"]},{"text":"impl Freeze for <a class=\"enum\" href=\"zircon_object/task/enum.Status.html\" title=\"enum zircon_object::task::Status\">Status</a>","synthetic":true,"types":["zircon_object::task::process::Status"]},{"text":"impl Freeze for <a class=\"enum\" href=\"zircon_object/task/enum.ThreadStateKind.html\" title=\"enum zircon_object::task::ThreadStateKind\">ThreadStateKind</a>","synthetic":true,"types":["zircon_object::task::thread::thread_state::ThreadStateKind"]},{"text":"impl Freeze for <a class=\"enum\" href=\"zircon_object/task/enum.ThreadState.html\" title=\"enum zircon_object::task::ThreadState\">ThreadState</a>","synthetic":true,"types":["zircon_object::task::thread::ThreadState"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/util/block_range/struct.BlockIter.html\" title=\"struct zircon_object::util::block_range::BlockIter\">BlockIter</a>","synthetic":true,"types":["zircon_object::util::block_range::BlockIter"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/util/block_range/struct.BlockRange.html\" title=\"struct zircon_object::util::block_range::BlockRange\">BlockRange</a>","synthetic":true,"types":["zircon_object::util::block_range::BlockRange"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"zircon_object/util/kcounter/struct.KCounter.html\" title=\"struct zircon_object::util::kcounter::KCounter\">KCounter</a>","synthetic":true,"types":["zircon_object::util::kcounter::KCounter"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/util/kcounter/struct.KCounterDescriptor.html\" title=\"struct zircon_object::util::kcounter::KCounterDescriptor\">KCounterDescriptor</a>","synthetic":true,"types":["zircon_object::util::kcounter::KCounterDescriptor"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/util/kcounter/struct.KCounterDescriptorArray.html\" title=\"struct zircon_object::util::kcounter::KCounterDescriptorArray\">KCounterDescriptorArray</a>","synthetic":true,"types":["zircon_object::util::kcounter::KCounterDescriptorArray"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"zircon_object/vm/struct.Stream.html\" title=\"struct zircon_object::vm::Stream\">Stream</a>","synthetic":true,"types":["zircon_object::vm::stream::Stream"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/vm/struct.StreamInfo.html\" title=\"struct zircon_object::vm::StreamInfo\">StreamInfo</a>","synthetic":true,"types":["zircon_object::vm::stream::StreamInfo"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/vm/struct.VmarFlags.html\" title=\"struct zircon_object::vm::VmarFlags\">VmarFlags</a>","synthetic":true,"types":["zircon_object::vm::vmar::VmarFlags"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"zircon_object/vm/struct.VmAddressRegion.html\" title=\"struct zircon_object::vm::VmAddressRegion\">VmAddressRegion</a>","synthetic":true,"types":["zircon_object::vm::vmar::VmAddressRegion"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/vm/struct.VmarInfo.html\" title=\"struct zircon_object::vm::VmarInfo\">VmarInfo</a>","synthetic":true,"types":["zircon_object::vm::vmar::VmarInfo"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"zircon_object/vm/struct.VmMapping.html\" title=\"struct zircon_object::vm::VmMapping\">VmMapping</a>","synthetic":true,"types":["zircon_object::vm::vmar::VmMapping"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/vm/struct.TaskStatsInfo.html\" title=\"struct zircon_object::vm::TaskStatsInfo\">TaskStatsInfo</a>","synthetic":true,"types":["zircon_object::vm::vmar::TaskStatsInfo"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"zircon_object/vm/struct.VmObject.html\" title=\"struct zircon_object::vm::VmObject\">VmObject</a>","synthetic":true,"types":["zircon_object::vm::vmo::VmObject"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/vm/struct.VmoInfo.html\" title=\"struct zircon_object::vm::VmoInfo\">VmoInfo</a>","synthetic":true,"types":["zircon_object::vm::vmo::VmoInfo"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/vm/struct.VmoInfoFlags.html\" title=\"struct zircon_object::vm::VmoInfoFlags\">VmoInfoFlags</a>","synthetic":true,"types":["zircon_object::vm::vmo::VmoInfoFlags"]},{"text":"impl Freeze for <a class=\"struct\" href=\"zircon_object/vm/struct.KERNEL_ASPACE.html\" title=\"struct zircon_object::vm::KERNEL_ASPACE\">KERNEL_ASPACE</a>","synthetic":true,"types":["zircon_object::vm::KERNEL_ASPACE"]},{"text":"impl Freeze for <a class=\"enum\" href=\"zircon_object/vm/enum.SeekOrigin.html\" title=\"enum zircon_object::vm::SeekOrigin\">SeekOrigin</a>","synthetic":true,"types":["zircon_object::vm::stream::SeekOrigin"]},{"text":"impl Freeze for <a class=\"enum\" href=\"zircon_object/vm/enum.RangeChangeOp.html\" title=\"enum zircon_object::vm::RangeChangeOp\">RangeChangeOp</a>","synthetic":true,"types":["zircon_object::vm::vmo::RangeChangeOp"]}];
implementors["zircon_syscall"] = [{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"zircon_syscall/struct.Syscall.html\" title=\"struct zircon_syscall::Syscall\">Syscall</a>&lt;'a&gt;","synthetic":true,"types":["zircon_syscall::Syscall"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()