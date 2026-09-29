// source ./emsdk/emsdk_env.sh
// em++ fact.cpp -O2 -o factorial-browser.js -sENVIRONMENT=web --no-entry

#include <cstdint>
#include <emscripten/emscripten.h>

namespace {
std::uint64_t factorial_value(std::uint32_t number) {
	std::uint64_t result = 1;
	for (std::uint32_t factor = 2; factor <= number; ++factor) {
		result *= factor;
	}
	return result;
}
}

extern "C" {
EMSCRIPTEN_KEEPALIVE
std::uint64_t factorial(std::uint32_t number) {
	if (number > 20) {
		return 0;
	}
	return factorial_value(number);
}

EMSCRIPTEN_KEEPALIVE
std::uint32_t benchmark_factorial(std::uint32_t iterations) {
	constexpr std::uint32_t modulus = 1000000007;
	std::uint32_t checksum = 0;
	for (std::uint32_t iteration = 0; iteration < iterations; ++iteration) {
		const std::uint32_t number = 10 + iteration % 5;
		const std::uint32_t contribution = static_cast<std::uint32_t>(factorial_value(number) % modulus);
		checksum = (checksum + contribution) % modulus;
	}
	return checksum;
}
}
