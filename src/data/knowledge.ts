export interface KnowledgePoint {
  id: string;
  title: string;
  description: string;
  level: 'basic' | 'advanced';
  scenes: ('ad' | 'risk')[];
  content: {
    principle: string;
    scenes: string;
    cases: string;
    keyPoints: string[];
  };
  isRiskPMEssential?: boolean;
  cases: string[];
}

export interface Category {
  id: string;
  title: string;
  children: KnowledgePoint[];
}

export const categories: Category[] = [
  {
    id: 'supervised',
    title: '有监督学习',
    children: [
      {
        id: 'classification',
        title: '分类',
        description: '给数据打标签，判断数据属于哪个类别',
        level: 'basic',
        scenes: ['ad', 'risk'],
        content: {
          principle: '分类是一种监督学习任务，目标是将输入数据映射到预定义的类别中。例如，判断邮件是否为垃圾邮件，识别图片中的物体等。\\n\\n**专业术语**：\\n- 类别（Class）：数据的标签或分类结果\\n- 特征（Feature）：用于分类的输入变量\\n- 决策边界（Decision Boundary）：将不同类别分开的边界\\n\\n**公式**：\\n对于二分类问题，常用的逻辑回归模型公式为：\\n\\n$$P(y=1|x) = \\frac{1}{1 + e^{-z}}$$\\n其中 $z = w^T x + b$，$w$ 是权重向量，$b$ 是偏置项。',
          scenes: '广告场景：用户画像分类，广告投放定向；风控场景：欺诈检测，信用评分。',
          cases: '广告投放中的用户分群：根据用户行为数据将用户分为高价值、中价值和低价值三类，针对不同群体制定不同的投放策略。',
          keyPoints: ['分类模型输出离散值', '常见算法包括逻辑回归、决策树、SVM等', '评估指标包括准确率、精确率、召回率、F1分数等', '二分类和多分类问题的处理方法不同']
        },
        cases: ['case1', 'case2']
      },
      {
        id: 'regression',
        title: '回归',
        description: '预测连续数值，如房价、销售额等',
        level: 'basic',
        scenes: ['ad', 'risk'],
        content: {
          principle: '回归是一种监督学习任务，目标是预测连续数值输出。例如，预测房价、股票价格、用户点击率等。\\n\\n**专业术语**：\\n- 因变量（Dependent Variable）：需要预测的目标变量\\n- 自变量（Independent Variable）：用于预测的输入变量\\n- 残差（Residual）：预测值与实际值之间的差异\\n\\n**公式**：\\n线性回归模型的数学表达式为：\\n\\n$$y = w^T x + b + \\epsilon$$\\n其中 $w$ 是权重向量，$b$ 是偏置项，$\\epsilon$ 是误差项。',
          scenes: '广告场景：预测广告点击率(CTR)，预测广告转化量；风控场景：预测违约概率，预测损失金额。',
          cases: '广告点击率预测：基于用户历史行为、广告特征等数据，构建回归模型预测用户点击广告的概率。',
          keyPoints: ['回归模型输出连续值', '常见算法包括线性回归、岭回归、LASSO等', '评估指标包括均方误差(MSE)、平均绝对误差(MAE)、R²等', '过拟合和欠拟合是回归模型的常见问题']
        },
        cases: ['case3', 'case4']
      },
      {
        id: 'decision-tree',
        title: '决策树',
        description: '通过树状结构进行决策的算法',
        level: 'basic',
        scenes: ['ad', 'risk'],
        content: {
          principle: '决策树是一种基于树状结构的监督学习算法，通过一系列决策规则将数据分类或预测。它易于理解和解释，适合处理分类和回归问题。\\n\\n**专业术语**：\\n- 根节点（Root Node）：树的起始节点\\n- 内部节点（Internal Node）：表示特征测试的节点\\n- 叶节点（Leaf Node）：表示最终预测结果的节点\\n- 分裂准则（Splitting Criterion）：选择最佳特征进行分裂的方法\\n\\n**公式**：\\n信息增益（Information Gain）的计算：\\n\\n$$IG(D, a) = H(D) - \\sum_{v \\in Values(a)} \\frac{|D_v|}{|D|} H(D_v)$$\\n其中 $H(D)$ 是数据集 $D$ 的熵，$D_v$ 是特征 $a$ 取值 $v$ 的子集。',
          scenes: '广告场景：广告投放决策，用户价值评估；风控场景：风控规则引擎，欺诈检测。',
          cases: '风控规则引擎：使用决策树构建风控规则，根据用户的各项特征（如信用历史、交易行为等）判断是否存在欺诈风险。',
          keyPoints: ['决策树由节点和边组成', '每个内部节点表示一个特征测试', '每个叶节点表示一个类别或预测值', '易于可视化和解释', '容易过拟合，需要剪枝']
        },
        cases: ['case5', 'case6']
      },
      {
        id: 'svm',
        title: '支持向量机(SVM)',
        description: '寻找最优超平面的分类算法',
        level: 'advanced',
        scenes: ['ad', 'risk'],
        content: {
          principle: '支持向量机(SVM)是一种二分类模型，它的目标是寻找一个最优超平面，使得两个类别的数据点之间的间隔最大化。\\n\\n**专业术语**：\\n- 超平面（Hyperplane）：在高维空间中分隔不同类别的平面\\n- 支持向量（Support Vector）：距离超平面最近的数据点\\n- 间隔（Margin）：支持向量到超平面的距离\\n- 核函数（Kernel Function）：将低维数据映射到高维空间的函数\\n\\n**公式**：\\nSVM的优化目标是最大化间隔：\\n\\n$$\\max_{w,b} \\frac{1}{||w||} \\quad \\text{subject to} \\quad y_i(w^T x_i + b) \\geq 1, \\forall i$$',
          scenes: '广告场景：广告点击预测，用户分类；风控场景：欺诈检测，异常识别。',
          cases: '欺诈检测：使用SVM对用户交易行为进行分类，识别异常交易模式，判断是否为欺诈行为。',
          keyPoints: ['SVM寻找最大间隔超平面', '支持核函数进行非线性分类', '对小样本数据表现良好', '计算复杂度较高', '适合高维特征空间']
        },
        cases: ['case7', 'case8']
      },
      {
        id: 'logistic-regression',
        title: '逻辑回归',
        description: '用于二分类问题的回归算法',
        level: 'basic',
        scenes: ['ad', 'risk'],
        content: {
          principle: '逻辑回归是一种用于二分类问题的监督学习算法，它通过sigmoid函数将线性回归的输出映射到0-1之间，表示事件发生的概率。\\n\\n**专业术语**：\\n- Sigmoid函数：将任意实数映射到(0,1)区间的函数\\n-  odds：事件发生与不发生的比值\\n- logit：odds的自然对数\\n\\n**公式**：\\n逻辑回归的数学表达式：\\n\\n$$P(y=1|x) = \\sigma(w^T x + b) = \\frac{1}{1 + e^{-(w^T x + b)}}$$',
          scenes: '广告场景：广告点击率预测，用户转化预测；风控场景：欺诈评分，信用评估。',
          cases: '风控欺诈评分：基于用户的历史行为、信用记录等特征，使用逻辑回归模型计算欺诈概率，生成欺诈评分。',
          keyPoints: ['逻辑回归输出概率值', '使用sigmoid函数进行非线性变换', '可解释性强', '适合处理二分类问题', '可以通过正则化防止过拟合']
        },
        isRiskPMEssential: true,
        cases: ['case9', 'case10']
      },
      {
        id: 'naive-bayes',
        title: '朴素贝叶斯',
        description: '基于贝叶斯定理的分类算法',
        level: 'basic',
        scenes: ['ad', 'risk'],
        content: {
          principle: '朴素贝叶斯是一种基于贝叶斯定理的监督学习算法，它假设特征之间相互独立，通过计算后验概率进行分类。\\n\\n**专业术语**：\\n- 先验概率（Prior Probability）：在没有任何证据的情况下，事件发生的概率\\n- 后验概率（Posterior Probability）：在获得证据后，事件发生的概率\\n- 似然度（Likelihood）：在事件发生的情况下，证据出现的概率\\n\\n**公式**：\\n贝叶斯定理：\\n\\n$$P(Y|X) = \\frac{P(X|Y)P(Y)}{P(X)}$$\\n朴素贝叶斯假设特征独立，因此：\\n\\n$$P(Y|X_1,X_2,...,X_n) \\propto P(Y)\\prod_{i=1}^n P(X_i|Y)$$',
          scenes: '广告场景：垃圾广告识别，用户兴趣分类；风控场景：欺诈检测，异常行为识别。',
          cases: '垃圾广告识别：基于广告内容的特征（如关键词、图片等），使用朴素贝叶斯模型判断广告是否为垃圾广告。',
          keyPoints: ['基于贝叶斯定理', '假设特征独立', '计算效率高', '适合处理文本分类问题', '对缺失数据不敏感']
        },
        cases: ['case11', 'case12']
      },
      {
        id: 'random-forest',
        title: '随机森林',
        description: '由多个决策树组成的集成学习算法',
        level: 'advanced',
        scenes: ['ad', 'risk'],
        content: {
          principle: '随机森林是一种集成学习算法，它由多个决策树组成，通过投票或平均的方式得到最终结果。它能够有效减少过拟合，提高模型的泛化能力。\\n\\n**专业术语**：\\n- 集成学习（Ensemble Learning）：结合多个模型的预测结果\\n- 袋外样本（Out-of-Bag Sample）：未参与决策树训练的样本\\n- 特征随机选择：每个决策树只使用部分特征进行训练\\n\\n**公式**：\\n对于分类问题，随机森林的预测结果是多个决策树的投票结果：\\n\\n$$\\hat{y} = \\text{argmax}_c \\sum_{i=1}^k I(h_i(x) = c)$$\\n其中 $h_i(x)$ 是第 $i$ 个决策树的预测结果，$k$ 是决策树的数量。',
          scenes: '广告场景：广告转化预测，用户价值评估；风控场景：欺诈检测，信用评分。',
          cases: '广告转化预测：使用随机森林模型，基于用户的历史行为、广告特征等数据，预测用户是否会转化。',
          keyPoints: ['集成多个决策树', '随机选择特征和样本', '减少过拟合', '预测精度高', '可以评估特征重要性']
        },
        cases: ['case13', 'case14']
      },
      {
        id: 'gbm',
        title: '梯度提升机(GBM)',
        description: '通过梯度下降优化的集成学习算法',
        level: 'advanced',
        scenes: ['ad', 'risk'],
        content: {
          principle: '梯度提升机(GBM)是一种集成学习算法，它通过不断添加新的弱学习器，逐步减少模型的误差，最终得到一个强学习器。\\n\\n**专业术语**：\\n- 弱学习器（Weak Learner）：性能略优于随机猜测的模型\\n- 梯度下降（Gradient Descent）：通过最小化损失函数来优化模型\\n- 残差（Residual）：模型预测值与实际值之间的差异\\n\\n**公式**：\\nGBM的迭代过程：\\n\\n$$f_m(x) = f_{m-1}(x) + h_m(x)$$\\n其中 $h_m(x)$ 是第 $m$ 个弱学习器，用于拟合前 $m-1$ 个模型的残差。',
          scenes: '广告场景：广告点击率预测，用户价值评估；风控场景：欺诈检测，信用评分。',
          cases: '用户价值评估：使用GBM模型，基于用户的历史行为、消费记录等数据，评估用户的价值等级。',
          keyPoints: ['基于梯度下降优化', '逐步减少误差', '预测精度高', '计算复杂度较高', '容易过拟合，需要正则化']
        },
        cases: ['case15', 'case16']
      },
      {
        id: 'neural-network',
        title: '神经网络',
        description: '模拟人脑神经元结构的机器学习算法',
        level: 'advanced',
        scenes: ['ad', 'risk'],
        content: {
          principle: '神经网络是一种模拟人脑神经元结构的机器学习算法，它由输入层、隐藏层和输出层组成，通过调整权重和偏置来学习数据的模式。\\n\\n**专业术语**：\\n- 神经元（Neuron）：神经网络的基本计算单元\\n- 激活函数（Activation Function）：引入非线性变换的函数\\n- 前向传播（Forward Propagation）：从输入到输出的计算过程\\n- 反向传播（Backward Propagation）：计算梯度并更新权重的过程\\n\\n**公式**：\\n神经元的输出计算：\\n\\n$$y = \\sigma(w^T x + b)$$\\n其中 $\\sigma$ 是激活函数，如sigmoid、ReLU等。',
          scenes: '广告场景：用户画像构建，广告推荐；风控场景：欺诈检测，异常行为识别。',
          cases: '用户画像构建：使用神经网络模型，基于用户的行为数据、社交数据等，构建多维度的用户画像。',
          keyPoints: ['由神经元和连接组成', '支持非线性建模', '可以自动提取特征', '需要大量数据和计算资源', '容易过拟合，需要正则化和 dropout']
        },
        cases: ['case17', 'case18']
      }
    ]
  },
  {
    id: 'unsupervised',
    title: '无监督学习',
    children: [
      {
        id: 'clustering',
        title: '聚类',
        description: '将相似的数据点分组的算法',
        level: 'basic',
        scenes: ['ad', 'risk'],
        content: {
          principle: '聚类是一种无监督学习任务，目标是将相似的数据点分组到同一个簇中，不同簇的数据点差异较大。\\n\\n**专业术语**：\\n- 簇（Cluster）：相似数据点的集合\\n- 距离度量（Distance Metric）：衡量数据点之间相似性的方法\\n-  centroids：簇的中心点\\n\\n**公式**：\\nK-means聚类的目标函数：\\n\\n$$J = \\sum_{i=1}^n \\sum_{k=1}^K w_{ik} ||x_i - \\mu_k||^2$$\\n其中 $w_{ik}$ 是指示变量，表示样本 $i$ 是否属于簇 $k$，$\\mu_k$ 是簇 $k$ 的中心点。',
          scenes: '广告场景：用户分群，广告投放定向；风控场景：异常检测，欺诈团伙识别。',
          cases: '用户分群：基于用户的行为特征（如浏览历史、购买记录等），使用聚类算法将用户分为不同的群体，针对不同群体制定个性化的广告投放策略。',
          keyPoints: ['无标签数据', '基于相似度分组', '常见算法包括K-means、层次聚类、DBSCAN等', '需要选择合适的距离度量', '聚类结果的评估较困难']
        },
        cases: ['case19', 'case20']
      },
      {
        id: 'dimensionality-reduction',
        title: '降维',
        description: '减少数据维度的技术',
        level: 'advanced',
        scenes: ['ad', 'risk'],
        content: {
          principle: '降维是一种无监督学习技术，目标是减少数据的维度，同时保留数据的主要信息，以便于可视化和后续处理。\\n\\n**专业术语**：\\n- 维度（Dimensionality）：数据的特征数量\\n- 特征提取（Feature Extraction）：从原始特征中提取新的特征\\n- 特征选择（Feature Selection）：选择原始特征的子集\\n\\n**公式**：\\nPCA的目标是找到数据的主成分，使得数据在主成分上的方差最大化。',
          scenes: '广告场景：用户特征压缩，广告效果分析；风控场景：风险因子提取，异常检测。',
          cases: '用户特征压缩：使用降维技术（如PCA）将高维的用户特征压缩到低维空间，减少计算复杂度，同时保留主要信息。',
          keyPoints: ['减少数据维度', '保留主要信息', '常见方法包括PCA、t-SNE、UMAP等', '有助于数据可视化', '可以提高模型训练速度']
        },
        cases: ['case21', 'case22']
      },
      {
        id: 'pca',
        title: '主成分分析(PCA)',
        description: '通过线性变换降维的方法',
        level: 'advanced',
        scenes: ['ad', 'risk'],
        content: {
          principle: '主成分分析(PCA)是一种线性降维方法，它通过寻找数据的主成分，将高维数据投影到低维空间，保留数据的主要变异。\\n\\n**专业术语**：\\n- 主成分（Principal Component）：数据方差最大的方向\\n- 特征值（Eigenvalue）：表示主成分的方差大小\\n- 特征向量（Eigenvector）：表示主成分的方向\\n\\n**公式**：\\nPCA的数学过程包括：\\n1. 数据标准化\\n2. 计算协方差矩阵\\n3. 计算协方差矩阵的特征值和特征向量\\n4. 选择前k个最大特征值对应的特征向量\\n5. 将数据投影到这些特征向量张成的空间',
          scenes: '广告场景：用户特征压缩，广告效果分析；风控场景：风险因子提取，异常检测。',
          cases: '风险因子提取：使用PCA从多个风控指标中提取主要风险因子，简化风险评估模型。',
          keyPoints: ['线性降维', '最大化方差', '正交变换', '计算效率高', '对数据分布有一定要求']
        },
        cases: ['case23', 'case24']
      },
      {
        id: 'svd',
        title: '奇异值分解(SVD)',
        description: '矩阵分解的数学方法',
        level: 'advanced',
        scenes: ['ad', 'risk'],
        content: {
          principle: '奇异值分解(SVD)是一种矩阵分解方法，它将一个矩阵分解为三个矩阵的乘积，常用于降维、推荐系统等领域。\\n\\n**专业术语**：\\n- 奇异值（Singular Value）：矩阵的重要程度指标\\n- 左奇异向量（Left Singular Vector）：对应行空间的正交基\\n- 右奇异向量（Right Singular Vector）：对应列空间的正交基\\n\\n**公式**：\\nSVD的数学表达式：\\n\\n$$A = U \\Sigma V^T$$\\n其中 $U$ 是左奇异向量矩阵，$\\Sigma$ 是对角矩阵，包含奇异值，$V$ 是右奇异向量矩阵。',
          scenes: '广告场景：推荐系统，用户画像构建；风控场景：异常检测，风险评估。',
          cases: '推荐系统：使用SVD对用户-物品交互矩阵进行分解，预测用户对物品的偏好，实现个性化推荐。',
          keyPoints: ['矩阵分解', '保留主要信息', '用于降维和推荐系统', '计算复杂度较高', '可以处理稀疏矩阵']
        },
        cases: ['case25', 'case26']
      },
      {
        id: 'autoencoder',
        title: '自动编码器',
        description: '用于降维和特征学习的神经网络',
        level: 'advanced',
        scenes: ['ad', 'risk'],
        content: {
          principle: '自动编码器是一种神经网络结构，它通过编码器将输入数据压缩到低维空间，然后通过解码器重建输入数据，用于降维和特征学习。\\n\\n**专业术语**：\\n- 编码器（Encoder）：将输入数据压缩到潜在空间\\n- 解码器（Decoder）：将潜在空间的表示重建为原始数据\\n- 潜在空间（Latent Space）：数据的低维表示\\n- 重建误差（Reconstruction Error）：重建数据与原始数据的差异\\n\\n**公式**：\\n自动编码器的训练目标是最小化重建误差：\\n\\n$$\\min_{\\theta} ||x - \\text{decode}(\\text{encode}(x))||^2$$',
          scenes: '广告场景：用户特征提取，广告内容理解；风控场景：异常检测，欺诈识别。',
          cases: '异常检测：使用自动编码器学习正常数据的模式，当输入异常数据时，重建误差会增大，从而识别异常。',
          keyPoints: ['编码器-解码器结构', '无监督学习', '用于降维和特征学习', '可以检测异常数据', '变体包括变分自动编码器(VAE)']
        },
        cases: ['case27', 'case28']
      },
      {
        id: 'deep-learning-unsupervised',
        title: '深度学习',
        description: '无监督学习中的深度学习方法',
        level: 'advanced',
        scenes: ['ad', 'risk'],
        content: {
          principle: '无监督学习中的深度学习方法，如生成对抗网络(GAN)、自监督学习等，通过学习数据的内在结构，实现特征提取、数据生成等任务。\\n\\n**专业术语**：\\n- 生成模型（Generative Model）：学习数据分布并生成新数据的模型\\n- 自监督学习（Self-supervised Learning）：使用数据本身作为监督信号\\n- 对比学习（Contrastive Learning）：通过对比样本相似性进行学习\\n\\n**公式**：\\nGAN的目标函数：\\n\\n$$\\min_G \\max_D V(D, G) = \\mathbb{E}_{x \\sim p_{data}(x)}[\\log D(x)] + \\mathbb{E}_{z \\sim p_z(z)}[\\log(1 - D(G(z)))]$$\\n其中 $D$ 是判别器，$G$ 是生成器。',
          scenes: '广告场景：广告创意生成，用户画像构建；风控场景：欺诈检测，异常行为识别。',
          cases: '广告创意生成：使用GAN生成符合特定风格的广告创意，提高广告效果。',
          keyPoints: ['学习数据内在结构', '无需标签', '可以生成新数据', '计算资源需求高', '训练不稳定']
        },
        cases: ['case29', 'case30']
      }
    ]
  },
  {
    id: 'reinforcement',
    title: '强化学习',
    children: [
      {
        id: 'model-based',
        title: '基于模型的强化学习',
        description: '通过构建环境模型进行学习',
        level: 'advanced',
        scenes: ['ad', 'risk'],
        content: {
          principle: '基于模型的强化学习是一种通过构建环境模型来预测环境反应，从而优化策略的方法。它可以减少与真实环境的交互，提高学习效率。\\n\\n**专业术语**：\\n- 环境模型（Environment Model）：预测环境状态转移和奖励的模型\\n- 规划（Planning）：基于环境模型进行策略优化\\n- 模型预测控制（Model Predictive Control）：使用模型预测未来状态并选择最优动作\\n\\n**公式**：\\n环境模型的状态转移概率：\\n\\n$$P(s\'|s, a)$$\\n表示在状态 $s$ 执行动作 $a$ 后转移到状态 $s\'$ 的概率。',
          scenes: '广告场景：广告投放策略优化，预算分配；风控场景：风险控制策略优化，异常处理。',
          cases: '广告投放策略优化：使用基于模型的强化学习，构建广告投放环境的模型，预测不同投放策略的效果，从而选择最优策略。',
          keyPoints: ['构建环境模型', '预测环境反应', '减少真实环境交互', '模型准确性影响性能', '适合环境变化较慢的场景']
        },
        cases: ['case31', 'case32']
      },
      {
        id: 'model-free',
        title: '无模型强化学习',
        description: '直接从经验中学习，不需要环境模型',
        level: 'advanced',
        scenes: ['ad', 'risk'],
        content: {
          principle: '无模型强化学习是一种直接从经验中学习策略的方法，不需要构建环境模型。它通过与环境的交互，不断调整策略，以最大化累积奖励。\\n\\n**专业术语**：\\n- 经验回放（Experience Replay）：存储和重放过去的经验\\n- 探索与利用（Exploration vs Exploitation）：在尝试新动作和利用已知最优动作之间的权衡\\n- 时间差分学习（Temporal Difference Learning）：结合蒙特卡洛和动态规划的学习方法\\n\\n**公式**：\\nQ-learning的更新规则：\\n\\n$$Q(s, a) \\leftarrow Q(s, a) + \\alpha [r + \\gamma \\max_{a\'} Q(s\', a\') - Q(s, a)]$$\\n其中 $\\alpha$ 是学习率，$\\gamma$ 是折扣因子。',
          scenes: '广告场景：实时出价策略，用户体验优化；风控场景：动态风险控制，异常处理。',
          cases: '实时出价策略：使用无模型强化学习，根据实时的市场情况和用户反馈，动态调整广告出价，最大化广告效果。',
          keyPoints: ['直接从经验学习', '不需要环境模型', '与环境交互学习', '样本效率较低', '适合环境复杂的场景']
        },
        cases: ['case33', 'case34']
      },
      {
        id: 'value-based',
        title: '基于价值的方法',
        description: '学习状态或状态-动作对的价值函数',
        level: 'advanced',
        scenes: ['ad', 'risk'],
        content: {
          principle: '基于价值的方法是一种通过学习状态或状态-动作对的价值函数，来选择最优动作的强化学习方法。常见的算法包括Q-learning、SARSA等。\\n\\n**专业术语**：\\n- 价值函数（Value Function）：衡量状态或状态-动作对的价值\\n- Q函数（Action-Value Function）：衡量在状态s执行动作a的价值\\n- 最优价值函数：在最优策略下的价值函数\\n\\n**公式**：\\n最优Q函数的Bellman方程：\\n\\n$$Q^*(s, a) = \\mathbb{E}_{s\', r}[r + \\gamma \\max_{a\'} Q^*(s\', a\')]$$',
          scenes: '广告场景：广告投放策略，用户路径优化；风控场景：风险控制策略，异常处理。',
          cases: '用户路径优化：使用基于价值的方法，学习用户在不同页面的价值，优化用户路径，提高转化率。',
          keyPoints: ['学习价值函数', '选择价值最高的动作', '适合离散动作空间', 'Q-learning是代表算法', '价值函数估计可能不准确']
        },
        cases: ['case35', 'case36']
      },
      {
        id: 'policy-based',
        title: '基于策略的方法',
        description: '直接学习策略函数',
        level: 'advanced',
        scenes: ['ad', 'risk'],
        content: {
          principle: '基于策略的方法是一种直接学习策略函数的强化学习方法，它可以处理连续动作空间，并且可以通过梯度上升直接优化策略。\\n\\n**专业术语**：\\n- 策略函数（Policy Function）：直接映射状态到动作的函数\\n- 策略梯度（Policy Gradient）：策略函数的梯度\\n- 优势函数（Advantage Function）：衡量动作相对于平均水平的优势\\n\\n**公式**：\\nREINFORCE算法的梯度更新：\\n\\n$$\\nabla_\\theta J(\\theta) = \\mathbb{E}_{\\tau \\sim p_\\theta(\\tau)} [\\sum_{t=0}^{T-1} \\nabla_\\theta \\log \\pi_\\theta(a_t|s_t) G_t]$$\\n其中 $G_t$ 是从时间步 $t$ 开始的累积奖励。',
          scenes: '广告场景：实时出价策略，预算分配；风控场景：风险控制策略，异常处理。',
          cases: '预算分配：使用基于策略的方法，直接学习预算分配策略，优化广告投放效果。',
          keyPoints: ['直接学习策略', '处理连续动作空间', '使用梯度上升优化', 'REINFORCE是代表算法', '方差较大，需要方差减少技术']
        },
        cases: ['case37', 'case38']
      },
      {
        id: 'actor-critic',
        title: 'Actor-Critic方法',
        description: '结合价值函数和策略函数的方法',
        level: 'advanced',
        scenes: ['ad', 'risk'],
        content: {
          principle: 'Actor-Critic方法是一种结合价值函数和策略函数的强化学习方法，它通过Actor网络选择动作，通过Critic网络评估动作的价值，两者相互配合，提高学习效率。\\n\\n**专业术语**：\\n- Actor：负责选择动作的策略网络\\n- Critic：负责评估动作价值的价值网络\\n- 优势函数（Advantage Function）：衡量动作相对于平均水平的优势\\n\\n**公式**：\\nActor-Critic的梯度更新：\\n\\n$$\\nabla_\\theta J(\\theta) = \\mathbb{E}[\\nabla_\\theta \\log \\pi_\\theta(a|s) A(s, a)]$$\\n其中 $A(s, a)$ 是优势函数。',
          scenes: '广告场景：广告投放策略优化，实时出价；风控场景：动态风险控制，异常处理。',
          cases: '实时出价优化：使用Actor-Critic方法，Actor网络负责出价决策，Critic网络评估出价效果，不断优化出价策略。',
          keyPoints: ['结合价值和策略', 'Actor选择动作', 'Critic评估价值', '学习效率高', '训练稳定性好']
        },
        cases: ['case39', 'case40']
      }
    ]
  },
  {
    id: 'deep-learning',
    title: '深度学习',
    children: [
      {
        id: 'cnn',
        title: '卷积神经网络(CNN)',
        description: '专门处理图像数据的神经网络',
        level: 'advanced',
        scenes: ['ad', 'risk'],
        content: {
          principle: '卷积神经网络(CNN)是一种专门处理网格数据（如图像）的深度学习模型，它通过卷积层、池化层等结构，自动提取图像的特征。\\n\\n**专业术语**：\\n- 卷积层（Convolutional Layer）：使用卷积核提取局部特征\\n- 池化层（Pooling Layer）：下采样操作，减少特征维度\\n- 感受野（Receptive Field）：每个神经元感受的输入区域\\n- 卷积核（Convolutional Kernel）：用于提取特征的过滤器\\n\\n**公式**：\\n卷积操作的数学表达式：\\n\\n$$(f * g)(i, j) = \\sum_{k,l} f(k, l) g(i-k, j-l)$$\\n其中 $f$ 是输入特征图，$g$ 是卷积核。',
          scenes: '广告场景：广告内容理解，用户画像构建；风控场景：图像欺诈检测，身份验证。',
          cases: '图像欺诈检测：使用CNN对用户上传的图片进行分析，识别是否为欺诈图片（如虚假身份证、合成图片等）。',
          keyPoints: ['自动提取特征', '卷积层处理局部特征', '池化层减少维度', '适合处理图像数据', '可以处理不同尺寸的输入']
        },
        cases: ['case41', 'case42']
      },
      {
        id: 'rnn',
        title: '循环神经网络(RNN)',
        description: '处理序列数据的神经网络',
        level: 'advanced',
        scenes: ['ad', 'risk'],
        content: {
          principle: '循环神经网络(RNN)是一种处理序列数据的深度学习模型，它通过递归结构，能够捕获序列数据中的时间依赖关系。\\n\\n**专业术语**：\\n- 隐藏状态（Hidden State）：存储序列历史信息的状态\\n- 递归连接（Recurrent Connection）：将隐藏状态传递到下一个时间步\\n- 时间步（Time Step）：序列中的每个位置\\n\\n**公式**：\\nRNN的数学表达式：\\n\\n$$h_t = \\tanh(W_{hh} h_{t-1} + W_{xh} x_t + b_h)$$\\n$$y_t = W_{hy} h_t + b_y$$\\n其中 $h_t$ 是时间步 $t$ 的隐藏状态，$x_t$ 是时间步 $t$ 的输入。',
          scenes: '广告场景：用户行为序列分析，广告推荐；风控场景：交易序列分析，欺诈检测。',
          cases: '交易序列分析：使用RNN对用户的交易序列进行分析，识别异常交易模式，判断是否为欺诈行为。',
          keyPoints: ['处理序列数据', '捕获时间依赖', '递归结构', '容易出现梯度消失', '适合处理短期依赖']
        },
        cases: ['case43', 'case44']
      },
      {
        id: 'lstm',
        title: '长短期记忆网络(LSTM)',
        description: '解决RNN梯度消失问题的改进模型',
        level: 'advanced',
        scenes: ['ad', 'risk'],
        content: {
          principle: '长短期记忆网络(LSTM)是RNN的一种变体，它通过门控机制，能够有效解决RNN的梯度消失问题，更好地捕获长序列的依赖关系。\\n\\n**专业术语**：\\n- 遗忘门（Forget Gate）：控制遗忘多少历史信息\\n- 输入门（Input Gate）：控制输入多少新信息\\n- 输出门（Output Gate）：控制输出多少隐藏状态信息\\n- 细胞状态（Cell State）：存储长期记忆的状态\\n\\n**公式**：\\nLSTM的门控机制：\\n\\n$$f_t = \\sigma(W_f \\cdot [h_{t-1}, x_t] + b_f)$$\\n$$i_t = \\sigma(W_i \\cdot [h_{t-1}, x_t] + b_i)$$\\n$$\\tilde{C}_t = \\tanh(W_C \\cdot [h_{t-1}, x_t] + b_C)$$\\n$$C_t = f_t \\cdot C_{t-1} + i_t \\cdot \\tilde{C}_t$$\\n$$o_t = \\sigma(W_o \\cdot [h_{t-1}, x_t] + b_o)$$\\n$$h_t = o_t \\cdot \\tanh(C_t)$$',
          scenes: '广告场景：用户行为预测，广告推荐；风控场景：风控数据趋势分析，欺诈检测。',
          cases: '风控数据趋势分析：使用LSTM对风控数据的时间序列进行分析，预测风险趋势，提前制定风控策略。',
          keyPoints: ['门控机制', '解决梯度消失', '捕获长序列依赖', '计算复杂度较高', '适合处理长序列数据']
        },
        cases: ['case45', 'case46']
      },
      {
        id: 'gan',
        title: '生成对抗网络(GAN)',
        description: '通过对抗训练生成新数据的模型',
        level: 'advanced',
        scenes: ['ad', 'risk'],
        content: {
          principle: '生成对抗网络(GAN)是一种通过生成器和判别器的对抗训练，生成与真实数据分布相似的新数据的深度学习模型。\\n\\n**专业术语**：\\n- 生成器（Generator）：生成新数据的网络\\n- 判别器（Discriminator）：区分真实数据和生成数据的网络\\n- 对抗训练（Adversarial Training）：生成器和判别器相互竞争的训练过程\\n- 模式崩溃（Mode Collapse）：生成器只生成有限种类的数据\\n\\n**公式**：\\nGAN的目标函数：\\n\\n$$\\min_G \\max_D V(D, G) = \\mathbb{E}_{x \\sim p_{data}(x)}[\\log D(x)] + \\mathbb{E}_{z \\sim p_z(z)}[\\log(1 - D(G(z)))]$$',
          scenes: '广告场景：广告创意生成，用户画像增强；风控场景：欺诈样本生成，异常检测。',
          cases: '广告创意生成：使用GAN生成符合特定风格的广告创意，提高广告效果和多样性。',
          keyPoints: ['生成器-判别器结构', '对抗训练', '生成新数据', '训练不稳定', '需要大量训练数据']
        },
        cases: ['case47', 'case48']
      },
      {
        id: 'transformer',
        title: 'Transformer',
        description: '基于自注意力机制的深度学习模型',
        level: 'advanced',
        scenes: ['ad', 'risk'],
        content: {
          principle: 'Transformer是一种基于自注意力机制的深度学习模型，它能够并行处理序列数据，捕获长距离依赖关系，在NLP等领域取得了显著成果。\\n\\n**专业术语**：\\n- 自注意力机制（Self-Attention）：计算序列内部元素之间的注意力权重\\n- 多头注意力（Multi-Head Attention）：使用多个注意力头捕获不同方面的信息\\n- 位置编码（Positional Encoding）：为序列添加位置信息\\n- 前馈网络（Feed-Forward Network）：对注意力输出进行进一步处理\\n\\n**公式**：\\n自注意力机制的计算：\\n\\n$$\\text{Attention}(Q, K, V) = \\text{softmax}(\\frac{QK^T}{\\sqrt{d_k}})V$$\\n其中 $Q$、$K$、$V$ 分别是查询、键、值矩阵，$d_k$ 是键的维度。',
          scenes: '广告场景：广告文本理解，用户评论分析；风控场景：风控文本识别，欺诈检测。',
          cases: '风控文本识别：使用Transformer对用户提交的文本信息（如申请材料、聊天记录等）进行分析，识别欺诈风险。',
          keyPoints: ['自注意力机制', '并行处理', '捕获长距离依赖', '计算资源需求高', '适合处理长序列数据']
        },
        cases: ['case49', 'case50']
      }
    ]
  }
];

export const getKnowledgePoint = (id: string): KnowledgePoint | undefined => {
  for (const category of categories) {
    const knowledgePoint = category.children.find(kp => kp.id === id);
    if (knowledgePoint) {
      return knowledgePoint;
    }
  }
  return undefined;
};

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};