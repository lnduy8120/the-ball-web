import { NewsArticle } from '@/components/news/NewsCard';

export interface NewsArticleDetail extends NewsArticle {
    content: string;
    relatedArticles: string[];
}

const MOCK_NEWS: NewsArticleDetail[] = [
    {
        id: '1',
        title: 'Nhận định Man City vs Arsenal: Cuộc chiến vương quyền tại Etihad',
        excerpt: 'Manchester City sẽ tiếp đón Arsenal trong trận cầu tâm điểm vòng 30 Premier League. Cả hai đội đều đang có phong độ cực cao và đây có thể là trận đấu quyết định ngôi vương mùa này.',
        image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2993&auto=format&fit=crop',
        category: 'Match Analysis',
        author: 'Tuấn Anh',
        date: '12 Tháng 5, 2024',
        readTime: '5 phút đọc',
        slug: 'nhan-dinh-man-city-vs-arsenal',
        relatedArticles: ['2', '3'],
        content: `
      <p class="mb-4">Cuối tuần này, mọi ánh mắt sẽ đổ dồn về sân Etihad, nơi diễn ra trận "chung kết sớm" của Premier League mùa giải năm nay giữa Manchester City và Arsenal. Một chiến thắng sẽ giúp một trong hai đội bứt lên trong cuộc đua vô địch đầy cam go.</p>
      
      <h3 class="text-xl font-bold mb-2 mt-6">Phong độ hiện tại</h3>
      <p class="mb-4">Man City đang có chuỗi 20 trận bất bại trên mọi đấu trường. Sự trở lại của Kevin de Bruyne và Erling Haaland giúp Pep Guardiola có trong tay đội hình mạnh nhất. Trên sân nhà, The Citizens luôn là một thế lực đáng sợ.</p>
      <p class="mb-4">Trong khi đó, Arsenal cũng không kém cạnh khi thắng liên tiếp 8 trận tại Ngoại hạng Anh, ghi tới 33 bàn thắng. Sự trưởng thành của Declan Rice và phong độ cao của Bukayo Saka là điểm tựa cho Pháo thủ.</p>

      <h3 class="text-xl font-bold mb-2 mt-6">Tình hình lực lượng</h3>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>Man City:</strong> Ederson và Kyle Walker bỏ ngỏ khả năng ra sân sau chấn thương khi tập trung ĐTQG. Stones cũng đang gặp vấn đề nhẹ.</li>
        <li><strong>Arsenal:</strong> Gabriel Martinelli đã trở lại tập luyện. Timber vẫn vắng mặt dài hạn.</li>
      </ul>

      <h3 class="text-xl font-bold mb-2 mt-6">Dự đoán chiến thuật</h3>
      <p class="mb-4">Pep Guardiola nhiều khả năng sẽ sử dụng sơ đồ 3-2-4-1 quen thuộc để kiểm soát khu trung tuyến, nhằm hạn chế khả năng chuyển trạng thái của Arsenal. Ngược lại, Mikel Arteta sẽ trung thành với 4-3-3, tận dụng tốc độ của hai cánh để phản công.</p>
      
      <div class="bg-blue-50 p-4 rounded-xl border border-blue-100 my-6">
        <h4 class="font-bold text-blue-800 mb-2">Dự đoán tỷ số</h4>
        <p class="italic text-slate-700">"Đây là trận đấu rất cân bằng. Man City có lợi thế sân nhà nhưng Arsenal đang khao khát khẳng định mình. Nhiều khả năng trận đấu sẽ kết thúc với tỷ số hòa có bàn thắng."</p>
        <p class="mt-2 font-bold text-lg">Dự đoán: Man City 1-1 Arsenal</p>
      </div>
    `
    },
    {
        id: '2',
        title: 'Mbappe chính thức xác nhận rời PSG: Điểm đến tiếp theo là Real Madrid?',
        excerpt: 'Siêu sao người Pháp Kylian Mbappe đã thông báo với ban lãnh đạo PSG về quyết định không gia hạn hợp đồng. Mọi ánh mắt đang đổ dồn về Santiago Bernabeu.',
        image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2692&auto=format&fit=crop',
        category: 'Transfer News',
        author: 'Minh Long',
        date: '11 Tháng 5, 2024',
        readTime: '3 phút đọc',
        slug: 'mbappe-roi-psg',
        relatedArticles: ['1', '4'],
        content: `
      <p class="mb-4">Hành trình 7 năm của Kylian Mbappe tại Paris Saint-Germain sắp đi đến hồi kết. Theo các nguồn tin uy tín từ Pháp, tiền đạo 25 tuổi đã chính thức thông báo với chủ tịch Nasser Al-Khelaifi rằng anh sẽ ra đi theo dạng chuyển nhượng tự do vào cuối mùa giải.</p>

      <h3 class="text-xl font-bold mb-2 mt-6">Real Madrid chờ sẵn</h3>
      <p class="mb-4">Mặc dù chưa có thông báo chính thức, nhưng Real Madrid được cho là điểm đến duy nhất của Mbappe. Đội bóng Hoàng gia Tây Ban Nha đã theo đuổi nhà vô địch World Cup 2018 suốt nhiều năm qua.</p>
      <p class="mb-4">Hợp đồng dự kiến sẽ kéo dài 5 năm với mức lương kỷ lục. Tuy nhiên, Mbappe sẽ phải chấp nhận giảm thu nhập so với con số khổng lồ đang nhận tại PSG để khoác áo Los Blancos.</p>
      
      <h3 class="text-xl font-bold mb-2 mt-6">Di sản tại PSG</h3>
      <p class="mb-4">Mbappe rời đi với tư cách là cầu thủ ghi nhiều bàn thắng nhất lịch sử PSG. Tuy nhiên, "giấc mơ Champions League" vẫn là điều dang dở mà anh chưa thể mang về cho đội bóng thủ đô nước Pháp.</p>
    `
    },
    {
        id: '3',
        title: 'Phân tích chiến thuật: Tại sao Leverkusen của Xabi Alonso lại bất bại?',
        excerpt: 'Cùng mổ xẻ hệ thống 3-4-2-1 đầy biến ảo của Xabi Alonso, chìa khóa giúp Bayer Leverkusen lật đổ sự thống trị của Bayern Munich tại Bundesliga.',
        image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=2940&auto=format&fit=crop',
        category: 'Match Analysis',
        author: 'Hoàng Bách',
        date: '10 Tháng 5, 2024',
        readTime: '8 phút đọc',
        slug: 'chien-thuat-leverkusen',
        relatedArticles: ['1', '5'],
        content: `
       <p class="mb-4">Bayer Leverkusen đang viết nên câu chuyện cổ tích tại Bundesliga mùa này. Dưới bàn tay của Xabi Alonso, họ chưa thua bất kỳ trận đấu nào. Đâu là bí quyết tạo nên cỗ máy chiến thắng này?</p>
       <!-- Content truncated for brevity in mock -->
       <p>Một hệ thống 3-4-2-1 linh hoạt, với hai Wing-back dâng cao (Grimaldo và Frimpong) đóng vai trò như những tiền vệ cánh thực thụ...</p>
    `
    },
    {
        id: '4',
        title: 'Top 5 ứng cử viên Quả bóng vàng 2024: Jude Bellingham dẫn đầu',
        excerpt: 'Với phong độ chói sáng tại Real Madrid, Jude Bellingham đang là ứng viên số 1 cho danh hiệu Ballon d\'Or năm nay. Ai sẽ là đối trọng của anh?',
        image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=2849&auto=format&fit=crop',
        category: 'Player Focus',
        author: 'Quang Huy',
        date: '09 Tháng 5, 2024',
        readTime: '4 phút đọc',
        slug: 'ung-cu-vien-qua-bong-vang-2024',
        relatedArticles: ['2', '5'],
        content: `
      <p>Cuộc đua đến danh hiệu cá nhân cao quý nhất thế giới bóng đá đang nóng lên từng ngày.</p>
    `
    },
    {
        id: '5',
        title: 'EURO 2024: Những điều cần biết về giải đấu tại Đức',
        excerpt: 'Tổng hợp thông tin về các bảng đấu, lịch thi đấu và những ngôi sao đáng xem nhất tại VCK EURO 2024 diễn ra mùa hè này.',
        image: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45?q=80&w=3000&auto=format&fit=crop',
        category: 'Tournament Update',
        author: 'Đức Mạnh',
        date: '08 Tháng 5, 2024',
        readTime: '6 phút đọc',
        slug: 'euro-2024-guide',
        relatedArticles: ['3', '4'],
        content: `
      <p>Mùa hè nước Đức hứa hẹn sẽ bùng nổ với VCK EURO 2024.</p>
    `
    }
];

export const newsService = {
    getAllNews: async (): Promise<NewsArticleDetail[]> => {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        return MOCK_NEWS;
    },

    getNewsBySlug: async (slug: string): Promise<NewsArticleDetail | undefined> => {
        await new Promise(resolve => setTimeout(resolve, 500));
        return MOCK_NEWS.find(n => n.slug === slug);
    },

    getRelatedNews: async (ids: string[]): Promise<NewsArticleDetail[]> => {
        await new Promise(resolve => setTimeout(resolve, 300));
        return MOCK_NEWS.filter(n => ids.includes(n.id));
    }
};
